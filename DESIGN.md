# Provines Consulting — Design System (Blueprint P1)

Canonical design-system spec for provinesconsulting.com. Read by Claude Design (claude.ai/design) at onboarding, by Claude Code sessions, and by any design tooling. This file is LAW for visual work — deviations require Connor's explicit approval.

## Brand thesis
The site must read "built by someone who builds systems." Engineered, precise, light. The design itself is a proof point for the offer (marketing infrastructure, owned by the client, run by an AI orchestrator).

## Tokens (source of truth: components/ClientLayout.jsx inline :root)
- `--navy: #0F172A` — ink. Headings, primary buttons, structural datum lines, footer bg.
- `--electric-blue: #0369A1` — the working accent. Links, hovers, operator highlights, underline signature. SCARCE by design: annotation, never ambient.
- `--mint: #7CBFE9` — on-dark link tint (footer). Not a page accent.
- `--charcoal: #334155` — nav/body secondary text.
- `--off-white: #F8FAFC` — section tint bands.
- `--line: #CBD5E1` — hairline borders everywhere.
- Ground: `.bp-ground` = #F1F5F9 with 56px drafting grid (#E2E8F0 1px lines).
- Expressive accent (RESERVED): `#00D9A3` green — approved for ONE hero art moment (growth-audit paint element). Never chrome, never buttons, never a second ambient color.

## Typography
- Sans: Geist (400/500/600/700/800). Display: font-extrabold, tracking-tighter, leading ~1.02–1.06.
- Mono: Geist Mono — technical labels only: chips, STEP/MOD indices, FIG labels, annotations. 10–11px, tracked +0.06–0.08em, uppercase.
- Body: 16–17.5px, leading-relaxed, max-w ~65ch. NO serif display faces (Instrument Serif/Fraunces explicitly banned).

## Layout system
- Framed sheet: content in max-w-[1200px], border-x hairline, 3px navy top datum, white bg, sitting on the grid ground.
- Sections: light-first. White or --off-white bands separated by hairlines (border-y --line). NO full dark sections except the footer.
- Corners: ALL SHARP (radius 0) — buttons, cards, images. Shape lock, no exceptions.
- Signature elements (use, don't multiply): hero mono chip; blue underline + `|—— in your name ——|` dimension annotation on "owning"; STEP 01→04 hairline stack with dashed connectors (operator step blue-outlined); FIG. 1 module diagram (Site→CRM→Ads→Orchestrator with ——▸ connectors, operator module blue).

## Hard rules (Connor's, non-negotiable)
1. NO stat/credential boxes ("12 years" tiles, metric strips). Client outcomes live inside their case-study narrative only.
2. Copy sells the SYSTEM/orchestrator — never AI content/copywriting. Sites are MIGRATED, not rebuilt. Ads stay plain (longtail, direct).
3. No em dashes in prose. No "AI-powered"/"AI employee"/"never sleeps" vocabulary. Max one "home builder" mention per page/piece.
4. One CTA label per intent sitewide ("Book a growth audit" = booking).
5. Eyebrow/mono-label restraint: they must encode real structure (FIG/STEP/MOD), max ~1 per 3 sections.
6. Every visual change ships with a launched, publicly clickable preview link for Connor's review BEFORE it's considered done.

## Design → code workflow (the wiring)
1. DESIGN: Connor works in Claude Design (claude.ai/design), which reads this repo/DESIGN.md for the system. Visual direction, art assets, and layout exploration happen THERE (knobs, inline comments), not in hand-coded geometry.
2. HANDOFF: Export → "Send to Claude Code" (structured bundle: components, tokens, layout, assets). Alternative: export assets to design/assets/ or share a bundle/zip path in chat.
3. IMPLEMENT: Claude Code translates the bundle into the real Next.js components, respecting this file over any conflicting bundle values (tokens here win).
4. REVIEW: branch → Vercel preview URL (public) → Connor clicks, approves → merge to master → production verify.
Raw image assets outside Claude Design: Google Nano Banana (Gemini) in Connor's own browser — NEVER arena.ai, NEVER automated third-party logins.
