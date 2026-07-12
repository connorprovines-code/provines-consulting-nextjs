import React from "react";

/**
 * PaintStreak — a hand-painted green watercolor brush stroke.
 *
 * Renders as an accent behind H1 / header text (typically absolutely
 * positioned so the words sit on top). The watery, ragged edges and the
 * scattered splash droplets come from an SVG turbulence displacement
 * filter, so the streak scales cleanly to any size and needs no image
 * asset. `preserveAspectRatio="none"` lets it stretch to the width of the
 * phrase it sits behind.
 */
export default function PaintStreak({ className = "", seed = 7 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* organic, watercolor edges */}
        <filter id="paintstreak-noise" x="-25%" y="-60%" width="150%" height="220%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011 0.024"
            numOctaves="3"
            seed={seed}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <linearGradient id="paintstreak-wash" x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="45%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="paintstreak-core" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="60%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      <g filter="url(#paintstreak-noise)">
        {/* soft outer wash */}
        <path
          d="M18 78 C 120 44, 340 46, 462 66 C 372 104, 150 108, 24 90 Z"
          fill="url(#paintstreak-wash)"
          opacity="0.5"
        />
        {/* denser core stroke */}
        <path
          d="M30 74 C 130 52, 330 54, 448 70 C 356 92, 156 96, 34 84 Z"
          fill="url(#paintstreak-core)"
          opacity="0.9"
        />
        {/* splash droplets flicked off the brush */}
        <ellipse cx="470" cy="50" rx="9" ry="6" fill="#34D399" opacity="0.8" />
        <ellipse cx="452" cy="108" rx="6" ry="4" fill="#10B981" opacity="0.7" />
        <ellipse cx="10" cy="98" rx="5" ry="4" fill="#059669" opacity="0.7" />
      </g>
    </svg>
  );
}
