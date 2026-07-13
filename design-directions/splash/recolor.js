// Recolor a black-on-white splatter (PNG/JPG) into a transparent brand-green PNG.
// Luminance drives alpha: dark ink -> opaque #00D9A3, white paper -> transparent.
// Antialiased edges and fine spray are preserved (no hard tracing).
//
// Usage: node recolor.js <input> <output> [--white=245] [--gamma=1.0] [--color=00D9A3]
const sharp = require("sharp");
const path = require("path");

const args = process.argv.slice(2);
const input = args[0];
const output = args[1] || input.replace(/\.[^.]+$/, "-green.png");
const opt = Object.fromEntries(
  args.filter((a) => a.startsWith("--")).map((a) => a.slice(2).split("="))
);
const WHITE = Number(opt.white ?? 245);     // pixels brighter than this become fully transparent
const GAMMA = Number(opt.gamma ?? 1.0);      // <1 boosts faint spray, >1 cleans noise
const hex = (opt.color ?? "00D9A3").replace("#", "");
const CR = parseInt(hex.slice(0, 2), 16), CG = parseInt(hex.slice(2, 4), 16), CB = parseInt(hex.slice(4, 6), 16);

(async () => {
  const src = sharp(input).flatten({ background: "#ffffff" });
  const { data, info } = await src.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels], g = data[i * channels + 1], b = data[i * channels + 2];
    const whiteness = Math.min(r, g, b);     // 255 = pure white paper, low = saturated/dark ink
    let a = 255 - whiteness;                  // ink opacity (works for black OR colored ink)
    if (whiteness >= WHITE) a = 0;            // kill paper
    else a = Math.round(255 * Math.pow(a / 255, GAMMA));
    out[i * 4] = CR;
    out[i * 4 + 1] = CG;
    out[i * 4 + 2] = CB;
    out[i * 4 + 3] = a;
  }
  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .trim()                                   // crop to the artwork's bounding box
    .toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`OK -> ${path.basename(output)}  ${meta.width}x${meta.height}  (white=${WHITE} gamma=${GAMMA} #${hex})`);
})().catch((e) => {
  console.error("RECOLOR FAILED:", e.message);
  process.exit(1);
});
