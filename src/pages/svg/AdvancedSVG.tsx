import { useState, type ReactElement } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Demo {
  title: string;
  desc: string;
  code: string;
  svg: () => ReactElement;
}
interface Section {
  id: string;
  label: string;
  icon: string;
  color: string;
  demos: Demo[];
}

/* ─────────────────────────────────────────────
   SHARED STYLES
───────────────────────────────────────────── */
const svgBox = {
  background: "#0a0f1e",
  borderRadius: 12,
  padding: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 200,
  border: "1px solid #1e293b",
} as const;

/* ─────────────────────────────────────────────
   SECTION 1 – PATH COMMANDS
───────────────────────────────────────────── */
const pathDemos: Demo[] = [
  {
    title: "M / L / H / V / Z — Line commands",
    desc: "M moves the pen, L draws a line to absolute coordinates, H draws horizontal, V draws vertical. Z closes the path back to start.",
    code: `<path
  d="M 20 80
     L 80 20
     H 150
     V 80
     L 200 140
     H 20
     Z"
  fill="#4f46e5"
  stroke="#818cf8"
  strokeWidth="2"
/>`,
    svg: () => (
      <svg viewBox="0 0 220 160" width="280" height="200">
        <path d="M 20 80 L 80 20 H 150 V 80 L 200 140 H 20 Z"
          fill="#4f46e5" stroke="#818cf8" strokeWidth="2" />
        {[{x:20,y:80,l:"M"},{x:80,y:20,l:"L"},{x:150,y:20,l:"H"},{x:150,y:80,l:"V"},{x:200,y:140,l:"L"},{x:20,y:140,l:"H"}].map((p,i)=>(
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="#f472b6" />
            <text x={p.x+6} y={p.y-4} fontSize="9" fill="#f9a8d4">{p.l}({p.x},{p.y})</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: "C — Cubic Bézier curve",
    desc: "C x1 y1, x2 y2, x y — two control points shape the curve. The control point handles (tangents) control how the curve bends in and out.",
    code: `<path
  d="M 30 120
     C 30 30, 170 30, 170 120"
  fill="none"
  stroke="#10b981"
  strokeWidth="3"
/>
{/* Control handles shown as dashed lines */}
<line x1="30" y1="120" x2="30" y2="30"
  stroke="#f97316" strokeDasharray="4 3"
  strokeWidth="1.5" />
<line x1="170" y1="120" x2="170" y2="30"
  stroke="#f97316" strokeDasharray="4 3"
  strokeWidth="1.5" />`,
    svg: () => (
      <svg viewBox="0 0 200 150" width="280" height="210">
        <line x1="30" y1="120" x2="30" y2="30" stroke="#f97316" strokeDasharray="4 3" strokeWidth="1.5" />
        <line x1="170" y1="120" x2="170" y2="30" stroke="#f97316" strokeDasharray="4 3" strokeWidth="1.5" />
        <path d="M 30 120 C 30 30, 170 30, 170 120" fill="none" stroke="#10b981" strokeWidth="3" />
        {[{x:30,y:30,c:"#f97316",l:"CP1"},{x:170,y:30,c:"#f97316",l:"CP2"}].map((p,i)=>(
          <g key={i}><circle cx={p.x} cy={p.y} r="5" fill={p.c} />
            <text x={p.x+7} y={p.y+4} fontSize="9" fill="#fdba74">{p.l}</text></g>
        ))}
        {[{x:30,y:120,l:"start"},{x:170,y:120,l:"end"}].map((p,i)=>(
          <g key={i}><circle cx={p.x} cy={p.y} r="5" fill="#10b981" />
            <text x={p.x+7} y={p.y-4} fontSize="9" fill="#6ee7b7">{p.l}</text></g>
        ))}
      </svg>
    ),
  },
  {
    title: "Q — Quadratic Bézier",
    desc: "Q x1 y1, x y — one shared control point. Simpler than cubic. S and T commands let you chain smooth Béziers automatically.",
    code: `<path
  d="M 20 120
     Q 100 10, 180 120"
  fill="none"
  stroke="#a78bfa"
  strokeWidth="3"
/>
{/* T chains off the last control point */}
<path
  d="M 20 120
     Q 60 30, 100 120
     T 180 120"
  fill="none"
  stroke="#f472b6"
  strokeWidth="2"
/>`,
    svg: () => (
      <svg viewBox="0 0 200 145" width="280" height="200">
        <line x1="20" y1="120" x2="100" y2="10" stroke="#6366f1" strokeDasharray="4 3" strokeWidth="1" />
        <line x1="180" y1="120" x2="100" y2="10" stroke="#6366f1" strokeDasharray="4 3" strokeWidth="1" />
        <path d="M 20 120 Q 100 10, 180 120" fill="none" stroke="#a78bfa" strokeWidth="3" />
        <path d="M 20 80 Q 60 20, 100 80 T 180 80" fill="none" stroke="#f472b6" strokeWidth="2" />
        <circle cx="100" cy="10" r="5" fill="#facc15" />
        <text x="107" y="13" fontSize="9" fill="#fde68a">Q control point</text>
        <text x="55" y="97" fontSize="9" fill="#f9a8d4">T chained</text>
      </svg>
    ),
  },
  {
    title: "A — Arc command",
    desc: "A rx ry x-rotation large-arc-flag sweep-flag x y. The arc draws an ellipse section between two points. large-arc and sweep flags select which of 4 possible arcs to draw.",
    code: `{/* sweep=0: counter-clockwise */}
<path d="M 50 100 A 60 40 0 0 0 150 100"
  fill="none" stroke="#f97316" strokeWidth="2"/>

{/* sweep=1: clockwise */}
<path d="M 50 100 A 60 40 0 0 1 150 100"
  fill="none" stroke="#10b981" strokeWidth="2"/>

{/* large-arc=1: the longer arc */}
<path d="M 50 100 A 60 40 0 1 0 150 100"
  fill="none" stroke="#a78bfa" strokeWidth="2"/>`,
    svg: () => (
      <svg viewBox="0 0 200 155" width="280" height="210">
        <path d="M 50 100 A 60 40 0 0 0 150 100" fill="none" stroke="#f97316" strokeWidth="2.5" />
        <path d="M 50 100 A 60 40 0 0 1 150 100" fill="none" stroke="#10b981" strokeWidth="2.5" />
        <path d="M 50 100 A 60 40 0 1 0 150 100" fill="none" stroke="#a78bfa" strokeWidth="2.5" />
        <path d="M 50 100 A 60 40 0 1 1 150 100" fill="none" stroke="#f472b6" strokeWidth="2.5" />
        <circle cx="50" cy="100" r="4" fill="white" /><circle cx="150" cy="100" r="4" fill="white" />
        {[
          {c:"#f97316",l:"sweep=0, large=0",y:145},
          {c:"#10b981",l:"sweep=1, large=0",y:155},
          {c:"#a78bfa",l:"sweep=0, large=1",y:165},
          {c:"#f472b6",l:"sweep=1, large=1",y:175},
        ].map((item,i)=>(
          <g key={i}><rect x="10" y={item.y-8} width="8" height="8" fill={item.c} rx="1" />
            <text x="21" y={item.y} fontSize="8" fill="#94a3b8">{item.l}</text></g>
        ))}
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 2 – COORDINATE SYSTEMS
───────────────────────────────────────────── */
const coordDemos: Demo[] = [
  {
    title: "viewBox & preserveAspectRatio",
    desc: "viewBox='minX minY width height' sets the internal coordinate space. preserveAspectRatio controls alignment when the SVG aspect ratio differs from the viewport.",
    code: `{/* viewBox: internal coords 0-200 x 0-100 */}
<svg width="300" height="150"
  viewBox="0 0 200 100"
  preserveAspectRatio="xMidYMid meet">

  {/* This circle at cx=100 cy=50 r=40 */}
  {/* auto-scales to fit the viewport   */}
  <circle cx="100" cy="50" r="40"
    fill="#4f46e5" />
</svg>`,
    svg: () => (
      <svg viewBox="0 0 320 200" width="300" height="190">
        <rect x="5" y="5" width="310" height="190" fill="none" stroke="#334155" strokeWidth="1" rx="4" />
        <text x="10" y="22" fontSize="9" fill="#64748b">viewport: 300×150</text>
        <svg x="5" y="30" width="310" height="150" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="200" height="100" fill="#0f172a" />
          <circle cx="100" cy="50" r="40" fill="#4f46e5" opacity="0.9" />
          <text x="100" y="55" textAnchor="middle" fontSize="11" fill="#e0e7ff">viewBox</text>
          <rect x="0" y="0" width="200" height="100" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />
          <text x="2" y="9" fontSize="7" fill="#475569">0,0</text>
          <text x="170" y="98" fontSize="7" fill="#475569">200,100</text>
        </svg>
      </svg>
    ),
  },
  {
    title: "Nested SVGs & coordinate spaces",
    desc: "You can nest <svg> inside <svg>. Each nested SVG creates its own coordinate system with its own viewBox — great for reusable sub-components.",
    code: `<svg width="300" height="200" viewBox="0 0 300 200">
  {/* outer: red frame */}
  <rect width="300" height="200" fill="#1e1b4b"/>

  {/* inner svg with own viewBox */}
  <svg x="50" y="40" width="200" height="120"
    viewBox="0 0 100 60">
    <circle cx="50" cy="30" r="28"
      fill="#7c3aed"/>
    <text x="50" y="35"
      textAnchor="middle"
      fontSize="10" fill="white">
      own space
    </text>
  </svg>
</svg>`,
    svg: () => (
      <svg width="280" height="180" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#1e1b4b" rx="8" />
        <text x="10" y="20" fontSize="9" fill="#4c1d95">outer SVG (300×200)</text>
        <rect x="50" y="40" width="200" height="120" fill="none" stroke="#7c3aed" strokeDasharray="5 3" strokeWidth="1.5" />
        <svg x="50" y="40" width="200" height="120" viewBox="0 0 100 60">
          <rect width="100" height="60" fill="#2e1065" />
          <circle cx="50" cy="30" r="26" fill="#7c3aed" />
          <text x="50" y="28" textAnchor="middle" fontSize="9" fill="white">inner SVG</text>
          <text x="50" y="40" textAnchor="middle" fontSize="7" fill="#c4b5fd">viewBox 0 0 100 60</text>
        </svg>
        <text x="55" y="38" fontSize="8" fill="#7c3aed">x=50, y=40</text>
      </svg>
    ),
  },
  {
    title: "transform — translate, rotate, scale, skew, matrix",
    desc: "SVG elements support transform attribute with 6 functions. Transforms compose (multiply) — order matters! Applied right to left.",
    code: `{/* translate: move */}
<rect transform="translate(20, 10)" ... />

{/* rotate(angle cx cy): rotate around point */}
<rect transform="rotate(45 100 50)" ... />

{/* scale(x y): scale from origin */}
<rect transform="scale(1.5 0.75)" ... />

{/* skewX / skewY: shear */}
<rect transform="skewX(20)" ... />

{/* matrix(a b c d e f): full 2D transform */}
<rect transform="matrix(1 0.2 0.2 1 10 5)" />

{/* chain multiple transforms */}
<g transform="translate(100 50) rotate(30) scale(0.8)">
  <rect x="-20" y="-20" width="40" height="40" />
</g>`,
    svg: () => (
      <svg viewBox="0 0 300 200" width="300" height="200">
        <g transform="translate(30, 90)">
          <rect x="0" y="-20" width="40" height="40" fill="#f97316" opacity="0.3" rx="4" />
          <rect x="0" y="-20" width="40" height="40" fill="#f97316" rx="4" transform="translate(10,10)" />
          <text x="0" y="32" fontSize="9" fill="#fdba74">translate</text>
        </g>
        <g transform="translate(115, 90)">
          <rect x="-20" y="-20" width="40" height="40" fill="#10b981" opacity="0.3" rx="4" />
          <rect x="-20" y="-20" width="40" height="40" fill="#10b981" rx="4" transform="rotate(35 0 0)" />
          <text x="-18" y="32" fontSize="9" fill="#6ee7b7">rotate</text>
        </g>
        <g transform="translate(195, 90)">
          <rect x="-15" y="-20" width="30" height="40" fill="#a78bfa" opacity="0.3" rx="4" />
          <rect x="-15" y="-20" width="30" height="40" fill="#a78bfa" rx="4" transform="scale(1 0.6)" />
          <text x="-10" y="32" fontSize="9" fill="#c4b5fd">scale</text>
        </g>
        <g transform="translate(255, 90)">
          <rect x="-15" y="-20" width="30" height="40" fill="#f472b6" opacity="0.3" rx="4" />
          <rect x="-15" y="-20" width="30" height="40" fill="#f472b6" rx="4" transform="skewX(20)" />
          <text x="-10" y="32" fontSize="9" fill="#f9a8d4">skew</text>
        </g>
        <text x="150" y="160" textAnchor="middle" fontSize="10" fill="#94a3b8">orange = before · color = after transform</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 3 – GRADIENTS
───────────────────────────────────────────── */
const gradientDemos: Demo[] = [
  {
    title: "linearGradient — stops, units, gradientTransform",
    desc: "gradientUnits='userSpaceOnUse' pins coordinates to the SVG canvas; 'objectBoundingBox' (default) uses 0–1 relative to the shape. gradientTransform rotates/skews.",
    code: `<defs>
  <linearGradient id="lg1" x1="0%" y1="0%"
    x2="100%" y2="0%">
    <stop offset="0%"   stopColor="#e11d48"/>
    <stop offset="50%"  stopColor="#7c3aed"/>
    <stop offset="100%" stopColor="#0ea5e9"/>
  </linearGradient>

  {/* diagonal via gradientTransform */}
  <linearGradient id="lg2"
    gradientTransform="rotate(45)">
    <stop offset="0%"   stopColor="#f59e0b"/>
    <stop offset="100%" stopColor="#10b981"/>
  </linearGradient>
</defs>
<rect fill="url(#lg1)" ... />
<rect fill="url(#lg2)" ... />`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <defs>
          <linearGradient id="adv-lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e11d48"/>
            <stop offset="50%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#0ea5e9"/>
          </linearGradient>
          <linearGradient id="adv-lg2" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#10b981"/>
          </linearGradient>
          <linearGradient id="adv-lg3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b"/>
            <stop offset="40%" stopColor="#6366f1"/>
            <stop offset="70%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#f97316"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="250" height="44" rx="8" fill="url(#adv-lg1)" />
        <text x="135" y="37" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">horizontal</text>
        <rect x="10" y="64" width="250" height="44" rx="8" fill="url(#adv-lg2)" />
        <text x="135" y="91" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">rotated 45°</text>
        <rect x="10" y="118" width="250" height="44" rx="8" fill="url(#adv-lg3)" />
        <text x="135" y="145" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">multi-stop diagonal</text>
      </svg>
    ),
  },
  {
    title: "radialGradient — cx, cy, r, fx, fy (focal point)",
    desc: "cx/cy sets the gradient center, r is the radius. fx/fy is the focal point — shifting it off-center creates a 3D sphere effect.",
    code: `<defs>
  <radialGradient id="rg-sphere"
    cx="35%" cy="35%" r="60%"
    fx="30%" fy="30%">
    <stop offset="0%"
      stopColor="#fde68a"/>
    <stop offset="60%"
      stopColor="#f97316"/>
    <stop offset="100%"
      stopColor="#7c2d12"/>
  </radialGradient>
</defs>
<circle cx="100" cy="100" r="80"
  fill="url(#rg-sphere)" />`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <defs>
          <radialGradient id="adv-rg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa"/>
            <stop offset="100%" stopColor="#1e1b4b"/>
          </radialGradient>
          <radialGradient id="adv-rg2" cx="35%" cy="35%" r="60%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#fde68a"/>
            <stop offset="60%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#7c2d12"/>
          </radialGradient>
          <radialGradient id="adv-rg3" cx="50%" cy="100%" r="80%" fx="50%" fy="100%">
            <stop offset="0%" stopColor="#6ee7b7"/>
            <stop offset="100%" stopColor="#064e3b"/>
          </radialGradient>
        </defs>
        <circle cx="60" cy="90" r="55" fill="url(#adv-rg1)" />
        <text x="60" y="156" textAnchor="middle" fontSize="9" fill="#94a3b8">center focal</text>
        <circle cx="170" cy="90" r="55" fill="url(#adv-rg2)" />
        <text x="170" y="156" textAnchor="middle" fontSize="9" fill="#94a3b8">off-center focal</text>
        <circle cx="252" cy="90" r="28" fill="url(#adv-rg3)" />
        <text x="252" y="130" textAnchor="middle" fontSize="9" fill="#94a3b8">bottom focal</text>
      </svg>
    ),
  },
  {
    title: "spreadMethod — pad, reflect, repeat",
    desc: "Controls what happens outside the gradient region. 'pad' extends last stop, 'reflect' mirrors back and forth, 'repeat' tiles.",
    code: `<linearGradient id="lg-repeat"
  x1="0%" y1="0%" x2="25%" y2="0%"
  spreadMethod="repeat">
  <stop offset="0%" stopColor="#4f46e5"/>
  <stop offset="100%" stopColor="#06b6d4"/>
</linearGradient>

<linearGradient id="lg-reflect"
  x1="0%" y1="0%" x2="25%" y2="0%"
  spreadMethod="reflect">
  <stop offset="0%" stopColor="#4f46e5"/>
  <stop offset="100%" stopColor="#06b6d4"/>
</linearGradient>`,
    svg: () => (
      <svg viewBox="0 0 280 175" width="280" height="175">
        <defs>
          <linearGradient id="adv-pad" x1="0%" y1="0%" x2="25%" y2="0%" spreadMethod="pad">
            <stop offset="0%" stopColor="#4f46e5"/><stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <linearGradient id="adv-reflect" x1="0%" y1="0%" x2="25%" y2="0%" spreadMethod="reflect">
            <stop offset="0%" stopColor="#4f46e5"/><stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <linearGradient id="adv-repeat" x1="0%" y1="0%" x2="25%" y2="0%" spreadMethod="repeat">
            <stop offset="0%" stopColor="#4f46e5"/><stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="260" height="40" rx="6" fill="url(#adv-pad)" />
        <text x="140" y="34" textAnchor="middle" fontSize="11" fill="white">pad (default)</text>
        <rect x="10" y="65" width="260" height="40" rx="6" fill="url(#adv-reflect)" />
        <text x="140" y="89" textAnchor="middle" fontSize="11" fill="white">reflect</text>
        <rect x="10" y="120" width="260" height="40" rx="6" fill="url(#adv-repeat)" />
        <text x="140" y="144" textAnchor="middle" fontSize="11" fill="white">repeat</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 4 – PATTERNS
───────────────────────────────────────────── */
const patternDemos: Demo[] = [
  {
    title: "Basic pattern — patternUnits",
    desc: "patternUnits='userSpaceOnUse' uses SVG coords for size. 'objectBoundingBox' (0–1) scales with the shape. patternTransform rotates/scales the tile.",
    code: `<defs>
  <pattern id="dots"
    x="0" y="0"
    width="20" height="20"
    patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="4"
      fill="#6366f1"/>
  </pattern>
</defs>
<rect width="200" height="120"
  fill="url(#dots)" />`,
    svg: () => (
      <svg viewBox="0 0 280 170" width="280" height="170">
        <defs>
          <pattern id="adv-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="4" fill="#6366f1"/>
          </pattern>
          <pattern id="adv-stripes" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="16" fill="#10b981"/>
          </pattern>
          <pattern id="adv-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#f97316" strokeWidth="0.5"/>
            <rect width="10" height="10" fill="#f97316" opacity="0.15"/>
          </pattern>
        </defs>
        <rect x="10" y="10" width="80" height="70" rx="6" fill="url(#adv-dots)" />
        <text x="50" y="94" textAnchor="middle" fontSize="9" fill="#94a3b8">dots</text>
        <rect x="100" y="10" width="80" height="70" rx="6" fill="url(#adv-stripes)" />
        <text x="140" y="94" textAnchor="middle" fontSize="9" fill="#94a3b8">diagonal stripes</text>
        <rect x="190" y="10" width="80" height="70" rx="6" fill="url(#adv-grid)" />
        <text x="230" y="94" textAnchor="middle" fontSize="9" fill="#94a3b8">grid</text>
      </svg>
    ),
  },
  {
    title: "Complex patterns — nesting & SVG shapes as tiles",
    desc: "Patterns can contain any SVG — paths, text, gradients, even other patterns. Combine with patternTransform for rich textures.",
    code: `<defs>
  <pattern id="hex"
    width="40" height="46"
    patternUnits="userSpaceOnUse">
    <polygon
      points="20,2 38,12 38,34 20,44 2,34 2,12"
      fill="none"
      stroke="#7c3aed"
      strokeWidth="1.5"/>
  </pattern>
</defs>
<rect width="250" height="150"
  fill="url(#hex)" />`,
    svg: () => (
      <svg viewBox="0 0 280 150" width="280" height="150">
        <defs>
          <pattern id="adv-hex" width="36" height="42" patternUnits="userSpaceOnUse">
            <polygon points="18,1 33,10 33,31 18,40 3,31 3,10" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5"/>
          </pattern>
          <pattern id="adv-hextile" width="36" height="42" patternUnits="userSpaceOnUse" x="18" y="21">
            <polygon points="18,1 33,10 33,31 18,40 3,31 3,10" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect x="10" y="10" width="260" height="130" rx="8" fill="url(#adv-hex)" />
        <rect x="10" y="10" width="260" height="130" rx="8" fill="url(#adv-hextile)" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 5 – CLIP PATH & MASKS
───────────────────────────────────────────── */
const clipDemos: Demo[] = [
  {
    title: "clipPath — hard-edged clipping",
    desc: "clipPath masks content with binary transparency — pixels are either fully visible or fully hidden. The clipping shape can be any SVG element.",
    code: `<defs>
  <clipPath id="clip-star">
    <polygon points="100,15 120,65
      175,65 128,95 147,148
      100,115 53,148 72,95
      25,65 80,65" />
  </clipPath>
</defs>
{/* Image or any content clipped to star */}
<image
  clipPath="url(#clip-star)"
  href="./photo.jpg"
  width="200" height="200" />`,
    svg: () => (
      <svg viewBox="0 0 280 185" width="280" height="185">
        <defs>
          <linearGradient id="adv-clip-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316"/>
            <stop offset="50%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#8b5cf6"/>
          </linearGradient>
          <clipPath id="adv-clip-star">
            <polygon points="100,10 118,60 172,60 128,90 145,140 100,110 55,140 72,90 28,60 82,60" />
          </clipPath>
          <clipPath id="adv-clip-text">
            <text x="200" y="100" fontSize="52" fontWeight="900" textAnchor="middle">SVG</text>
          </clipPath>
        </defs>
        <rect x="28" y="10" width="144" height="144" fill="url(#adv-clip-g)" clipPath="url(#adv-clip-star)" />
        <polygon points="100,10 118,60 172,60 128,90 145,140 100,110 55,140 72,90 28,60 82,60" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="145" y="30" width="120" height="110" fill="url(#adv-clip-g)" clipPath="url(#adv-clip-text)" />
        <text x="205" y="175" textAnchor="middle" fontSize="9" fill="#94a3b8">text clipPath</text>
        <text x="100" y="175" textAnchor="middle" fontSize="9" fill="#94a3b8">star clipPath</text>
      </svg>
    ),
  },
  {
    title: "mask — alpha/luminance masking",
    desc: "mask uses the luminance (brightness) of the mask shape for transparency — white = fully visible, black = fully hidden, gray = partial. Much more flexible than clipPath.",
    code: `<defs>
  <mask id="fade-mask">
    {/* white = show, black = hide */}
    <linearGradient id="mask-grad">
      <stop offset="0%"   stopColor="white"/>
      <stop offset="100%" stopColor="black"/>
    </linearGradient>
    <rect width="200" height="200"
      fill="url(#mask-grad)"/>
  </mask>
</defs>
<image mask="url(#fade-mask)"
  href="./photo.jpg" ... />`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <defs>
          <linearGradient id="adv-mask-g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e11d48"/>
            <stop offset="50%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#0ea5e9"/>
          </linearGradient>
          <linearGradient id="adv-mfade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white"/>
            <stop offset="100%" stopColor="black"/>
          </linearGradient>
          <mask id="adv-mask-fade">
            <rect x="10" y="10" width="260" height="80" fill="url(#adv-mfade)" />
          </mask>
          <radialGradient id="adv-mask-rg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white"/>
            <stop offset="100%" stopColor="black"/>
          </radialGradient>
          <mask id="adv-mask-radial">
            <rect x="10" y="100" width="260" height="70" fill="url(#adv-mask-rg)" />
          </mask>
        </defs>
        <rect x="10" y="10" width="260" height="80" rx="6" fill="url(#adv-mask-g1)" mask="url(#adv-mask-fade)" />
        <text x="60" y="58" fontSize="11" fill="white" fontWeight="bold">Horizontal fade mask</text>
        <rect x="10" y="100" width="260" height="70" rx="6" fill="url(#adv-mask-g1)" mask="url(#adv-mask-radial)" />
        <text x="140" y="140" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Radial fade mask</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 6 – TEXT
───────────────────────────────────────────── */
const textDemos: Demo[] = [
  {
    title: "textPath — text on a curve",
    desc: "Place text along any SVG path using <textPath href='#path-id'>. startOffset controls where text begins (0%–100% of path length).",
    code: `<defs>
  <path id="arc-path"
    d="M 20 120 A 100 80 0 0 1 230 120"
    fill="none"/>
</defs>
<text fontSize="14" fill="#a78bfa">
  <textPath href="#arc-path"
    startOffset="10%">
    Text flowing along a curved path!
  </textPath>
</text>`,
    svg: () => (
      <svg viewBox="0 0 260 200" width="280" height="200">
        <defs>
          <path id="adv-arc-path" d="M 20 140 A 110 90 0 0 1 240 140" />
          <path id="adv-wave-path" d="M 10 100 Q 65 40, 130 100 T 250 100" />
          <path id="adv-circle-path" d="M 130 170 A 60 60 0 1 1 129.9 170" />
        </defs>
        <path d="M 20 140 A 110 90 0 0 1 240 140" fill="none" stroke="#334155" strokeDasharray="3 3" strokeWidth="1"/>
        <text fontSize="12" fill="#a78bfa" fontWeight="bold">
          <textPath href="#adv-arc-path" startOffset="5%">Text on an arc path — textPath!</textPath>
        </text>
        <path d="M 10 100 Q 65 40, 130 100 T 250 100" fill="none" stroke="#334155" strokeDasharray="3 3" strokeWidth="1"/>
        <text fontSize="10" fill="#f472b6">
          <textPath href="#adv-wave-path" startOffset="2%">Flowing on a wave  ~  </textPath>
        </text>
        <path d="M 130 170 A 60 60 0 1 1 129.9 170" fill="none" stroke="#334155" strokeDasharray="3 3" strokeWidth="1"/>
        <text fontSize="9" fill="#10b981">
          <textPath href="#adv-circle-path" startOffset="0%">◆ Circular text going around ◆ </textPath>
        </text>
      </svg>
    ),
  },
  {
    title: "tspan — inline text formatting",
    desc: "tspan lets you apply styles (fill, fontSize, fontWeight) and positioning (dx, dy, x, y) to spans of text within a <text> element — like a styled <span> in HTML.",
    code: `<text x="20" y="40" fontSize="16">
  Normal text
  <tspan fill="#f97316"
    fontWeight="bold"> orange bold
  </tspan>
  <tspan dy="24" x="20"
    fontSize="12"
    fill="#94a3b8">
    new line via dy
  </tspan>
  <tspan dx="10"
    textDecoration="underline"
    fill="#10b981">
    underlined + offset
  </tspan>
</text>`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <text x="15" y="40" fontSize="16" fill="#e2e8f0">
          Normal
          <tspan fill="#f97316" fontWeight="bold"> bold orange</tspan>
          <tspan fill="#a78bfa"> purple</tspan>
        </text>
        <text x="15" y="75" fontSize="13" fill="#94a3b8">
          Line one with
          <tspan dy="22" x="15" fill="#10b981" fontSize="15" fontWeight="bold"> dy shifts down</tspan>
          <tspan dy="22" x="15" fill="#f472b6" fontSize="12" textDecoration="underline"> underlined on next line</tspan>
        </text>
        <text x="15" y="155" fontSize="28" fontWeight="900">
          <tspan fill="#f97316">S</tspan>
          <tspan fill="#facc15">V</tspan>
          <tspan fill="#10b981">G</tspan>
          <tspan fill="#818cf8" dx="8" fontSize="14" dy="-8">advanced</tspan>
        </text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 7 – SYMBOLS & USE
───────────────────────────────────────────── */
const symbolDemos: Demo[] = [
  {
    title: "symbol + use — SVG component system",
    desc: "Define a shape once in <symbol> inside <defs>, then stamp it anywhere with <use>. Each use instance can have different position, size, color (via currentColor), and transform.",
    code: `<defs>
  <symbol id="icon-star" viewBox="0 0 24 24">
    <polygon
      points="12,2 15,9 22,9 16,14
              18,21 12,17 6,21 8,14
              2,9 9,9"
      fill="currentColor"/>
  </symbol>
</defs>

{/* Reuse at different sizes & colors */}
<use href="#icon-star" x="10" y="10"
  width="40" height="40"
  color="#f97316"/>
<use href="#icon-star" x="60" y="10"
  width="60" height="60"
  color="#a78bfa"/>`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <defs>
          <symbol id="adv-star" viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="currentColor"/>
          </symbol>
          <symbol id="adv-heart" viewBox="0 0 24 24">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="currentColor"/>
          </symbol>
          <symbol id="adv-hex-sym" viewBox="0 0 24 24">
            <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="currentColor"/>
          </symbol>
        </defs>
        {[
          {id:"adv-star",colors:["#f97316","#facc15","#fde68a"],y:20,sizes:[36,50,28]},
          {id:"adv-heart",colors:["#f43f5e","#fb7185","#fda4af"],y:90,sizes:[32,46,24]},
          {id:"adv-hex-sym",colors:["#818cf8","#a78bfa","#c4b5fd"],y:150,sizes:[30,42,22]},
        ].map((group,gi)=>{
          let xPos = 15;
          return group.colors.map((c,i)=>{
            const el = <use key={`${gi}-${i}`} href={`#${group.id}`} x={xPos} y={group.y} width={group.sizes[i]} height={group.sizes[i]} color={c} />;
            xPos += group.sizes[i] + 10;
            return el;
          });
        })}
        <text x="200" y="50" fontSize="11" fill="#64748b">Same symbol</text>
        <text x="200" y="64" fontSize="11" fill="#64748b">different</text>
        <text x="200" y="78" fontSize="11" fill="#64748b">size + color</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 8 – MARKERS (arrowheads)
───────────────────────────────────────────── */
const markerDemos: Demo[] = [
  {
    title: "marker — arrowheads and custom line decorations",
    desc: "Markers attach shapes to the start, mid, or end of a stroke. Define in <defs>, then apply via marker-start, marker-mid, marker-end attributes.",
    code: `<defs>
  <marker id="arrow"
    viewBox="0 0 10 10"
    refX="9" refY="5"
    markerWidth="6"
    markerHeight="6"
    orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z"
      fill="#f97316"/>
  </marker>
  <marker id="dot-marker"
    viewBox="0 0 10 10"
    refX="5" refY="5"
    markerWidth="5" markerHeight="5">
    <circle cx="5" cy="5" r="5"
      fill="#10b981"/>
  </marker>
</defs>
<line marker-end="url(#arrow)" .../>
<polyline
  marker-start="url(#dot-marker)"
  marker-mid="url(#dot-marker)"
  marker-end="url(#arrow)" .../>`,
    svg: () => (
      <svg viewBox="0 0 280 200" width="280" height="200">
        <defs>
          <marker id="adv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316"/>
          </marker>
          <marker id="adv-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#818cf8"/>
          </marker>
          <marker id="adv-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="4" fill="#10b981"/>
          </marker>
          <marker id="adv-square" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <rect x="1" y="1" width="8" height="8" fill="#f472b6" rx="2"/>
          </marker>
        </defs>
        <line x1="20" y1="30" x2="250" y2="30" stroke="#f97316" strokeWidth="2" markerEnd="url(#adv-arrow)"/>
        <text x="15" y="52" fontSize="9" fill="#64748b">marker-end (arrowhead)</text>
        <line x1="20" y1="80" x2="250" y2="80" stroke="#818cf8" strokeWidth="2" markerStart="url(#adv-arrow-blue)" markerEnd="url(#adv-arrow-blue)"/>
        <text x="15" y="100" fontSize="9" fill="#64748b">marker-start + marker-end (double arrow)</text>
        <polyline points="20,140 90,115 160,140 230,115 260,140" fill="none" stroke="#10b981" strokeWidth="2" markerStart="url(#adv-dot)" markerMid="url(#adv-dot)" markerEnd="url(#adv-dot)"/>
        <text x="15" y="163" fontSize="9" fill="#64748b">marker-mid (dots at each vertex)</text>
        <path d="M 20 185 Q 140 150 260 185" fill="none" stroke="#f472b6" strokeWidth="2" markerEnd="url(#adv-square)" markerStart="url(#adv-dot)"/>
        <text x="15" y="200" fontSize="9" fill="#64748b">curved path with mixed markers</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 9 – STROKE TECHNIQUES
───────────────────────────────────────────── */
const strokeDemos: Demo[] = [
  {
    title: "stroke-dasharray & stroke-dashoffset",
    desc: "dasharray='dash gap' creates dashed lines. Animating dashoffset from path-length to 0 creates the popular 'draw-on' effect.",
    code: `{/* fixed dashes */}
<line stroke-dasharray="10 5" .../>

{/* draw-on animation */}
<style>
  .draw {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: draw 2s ease forwards;
  }
  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }
</style>
<path className="draw"
  d="M 20 100 C 80 20 180 20 240 100"
  fill="none"
  stroke="#10b981"
  strokeWidth="3"/>`,
    svg: () => (
      <svg viewBox="0 0 280 200" width="280" height="200">
        <style>{`
          @keyframes advDraw { to { stroke-dashoffset: 0; } }
          .adv-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: advDraw 2.5s ease infinite; }
          @keyframes advDash { to { stroke-dashoffset: -30; } }
          .adv-march { animation: advDash 0.8s linear infinite; }
        `}</style>
        <line x1="15" y1="25" x2="265" y2="25" stroke="#6366f1" strokeWidth="3" strokeDasharray="4 4" />
        <text x="15" y="42" fontSize="9" fill="#64748b">dasharray: 4 4 (equal)</text>
        <line x1="15" y1="60" x2="265" y2="60" stroke="#f97316" strokeWidth="3" strokeDasharray="12 4" />
        <text x="15" y="77" fontSize="9" fill="#64748b">dasharray: 12 4 (long dash)</text>
        <line x1="15" y1="95" x2="265" y2="95" stroke="#10b981" strokeWidth="3" strokeDasharray="2 8" />
        <text x="15" y="112" fontSize="9" fill="#64748b">dasharray: 2 8 (dotted)</text>
        <line x1="15" y1="130" x2="265" y2="130" stroke="#f472b6" strokeWidth="3" strokeDasharray="15 4 4 4" className="adv-march" />
        <text x="15" y="147" fontSize="9" fill="#64748b">marching ants (animated offset)</text>
        <path d="M 15 175 C 80 130 200 130 265 175" fill="none" stroke="#a78bfa" strokeWidth="3" className="adv-draw" />
        <text x="15" y="198" fontSize="9" fill="#64748b">draw-on animation (dashoffset 600→0)</text>
      </svg>
    ),
  },
  {
    title: "stroke-linecap & stroke-linejoin",
    desc: "linecap controls how line ends look (butt/round/square). linejoin controls corners (miter/round/bevel). These are crucial for icon design.",
    code: `{/* linecap */}
<line strokeLinecap="butt" .../>
<line strokeLinecap="round" .../>
<line strokeLinecap="square" .../>

{/* linejoin */}
<polyline strokeLinejoin="miter"
  points="..."/>
<polyline strokeLinejoin="round"
  points="..."/>
<polyline strokeLinejoin="bevel"
  points="..."/>

{/* miterLimit prevents spiky corners */}
<polyline strokeLinejoin="miter"
  strokeMiterlimit="2" .../>`,
    svg: () => (
      <svg viewBox="0 0 280 200" width="280" height="200">
        {[
          {cap:"butt",x:15,col:"#f97316"},
          {cap:"round",x:105,col:"#10b981"},
          {cap:"square",x:195,col:"#818cf8"},
        ].map(p=>(
          <g key={p.cap}>
            <line x1={p.x} y1="30" x2={p.x+60} y2="30" stroke={p.col} strokeWidth="12" strokeLinecap={p.cap as any}/>
            <line x1={p.x} y1="30" x2={p.x+60} y2="30" stroke="white" strokeWidth="1" strokeDasharray="2 2"/>
            <text x={p.x+30} y="55" textAnchor="middle" fontSize="9" fill="#94a3b8">{p.cap}</text>
          </g>
        ))}
        <text x="10" y="76" fontSize="9" fill="#64748b">stroke-linecap ↑</text>
        {[
          {join:"miter",x:25,col:"#f472b6"},
          {join:"round",x:115,col:"#fbbf24"},
          {join:"bevel",x:205,col:"#34d399"},
        ].map(p=>(
          <g key={p.join}>
            <polyline points={`${p.x},150 ${p.x+30},95 ${p.x+60},150`} fill="none" stroke={p.col} strokeWidth="10" strokeLinejoin={p.join as any}/>
            <text x={p.x+30} y="172" textAnchor="middle" fontSize="9" fill="#94a3b8">{p.join}</text>
          </g>
        ))}
        <text x="10" y="195" fontSize="9" fill="#64748b">stroke-linejoin ↑</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 10 – ANIMATIONS
───────────────────────────────────────────── */
const animDemos: Demo[] = [
  {
    title: "SMIL animate — attribute animation",
    desc: "The <animate> element animates any SVG attribute over time. attributeName targets the property, values lists keyframes, keyTimes syncs them, calcMode sets easing.",
    code: `{/* animate fill color */}
<circle cx="60" cy="60" r="30">
  <animate
    attributeName="fill"
    values="#f97316;#a78bfa;#10b981;#f97316"
    keyTimes="0;0.33;0.66;1"
    dur="3s"
    repeatCount="indefinite"/>
</circle>

{/* animate radius (pulse) */}
<circle cx="60" cy="60" r="30">
  <animate
    attributeName="r"
    values="25;40;25"
    dur="1.5s"
    repeatCount="indefinite"
    calcMode="spline"
    keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
</circle>`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <circle cx="50" cy="90" r="30">
          <animate attributeName="fill" values="#f97316;#a78bfa;#10b981;#f97316" keyTimes="0;0.33;0.66;1" dur="3s" repeatCount="indefinite"/>
        </circle>
        <text x="50" y="135" textAnchor="middle" fontSize="9" fill="#64748b">fill</text>
        <circle cx="150" cy="90" r="25" fill="#f472b6">
          <animate attributeName="r" values="20;38;20" dur="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <text x="150" y="135" textAnchor="middle" fontSize="9" fill="#64748b">pulse</text>
        <rect x="215" y="70" width="40" height="40" rx="6" fill="#818cf8">
          <animate attributeName="rx" values="4;20;4" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#818cf8;#f97316;#818cf8" dur="2s" repeatCount="indefinite"/>
        </rect>
        <text x="235" y="135" textAnchor="middle" fontSize="9" fill="#64748b">rx + fill</text>
      </svg>
    ),
  },
  {
    title: "animateTransform — rotation, scale, translate",
    desc: "<animateTransform> animates the transform attribute. type='rotate' takes 'angle cx cy' as values for rotating around a point.",
    code: `{/* spin around center */}
<rect x="-20" y="-20" width="40" height="40"
  fill="#f97316">
  <animateTransform
    attributeName="transform"
    type="rotate"
    from="0 0 0"
    to="360 0 0"
    dur="3s"
    repeatCount="indefinite"/>
</rect>

{/* scale pulse */}
<circle r="30" fill="#10b981">
  <animateTransform
    attributeName="transform"
    type="scale"
    values="1;1.3;1"
    dur="1s"
    repeatCount="indefinite"
    additive="sum"/>
</circle>`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <g transform="translate(50,90)">
          <rect x="-22" y="-22" width="44" height="44" fill="#f97316" rx="4">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite"/>
          </rect>
        </g>
        <text x="50" y="130" textAnchor="middle" fontSize="9" fill="#64748b">rotate</text>
        <g transform="translate(150,90)">
          <circle r="26" fill="#10b981">
            <animateTransform attributeName="transform" type="scale" values="1;1.35;1" dur="1.2s" repeatCount="indefinite" additive="sum"/>
          </circle>
        </g>
        <text x="150" y="130" textAnchor="middle" fontSize="9" fill="#64748b">scale</text>
        <g transform="translate(235,90)">
          <rect x="-20" y="-20" width="40" height="40" fill="#a78bfa" rx="4">
            <animateTransform attributeName="transform" type="rotate" values="0;15;0;-15;0" dur="0.6s" repeatCount="indefinite"/>
          </rect>
        </g>
        <text x="235" y="130" textAnchor="middle" fontSize="9" fill="#64748b">wobble</text>
      </svg>
    ),
  },
  {
    title: "animateMotion — path-based movement",
    desc: "animateMotion moves an element along an SVG path. mpath links to an existing path element. rotate='auto' keeps the element aligned with the path direction.",
    code: `<defs>
  <path id="orbit"
    d="M 20 100 A 100 50 0 1 1 19.9 100"
    fill="none"/>
</defs>

<circle r="12" fill="#f97316">
  <animateMotion
    dur="3s"
    repeatCount="indefinite"
    rotate="auto">
    <mpath href="#orbit"/>
  </animateMotion>
</circle>`,
    svg: () => (
      <svg viewBox="0 0 280 200" width="280" height="200">
        <defs>
          <path id="adv-orbit" d="M 140 100 m -100 0 a 100 50 0 1 1 200 0 a 100 50 0 1 1 -200 0"/>
          <path id="adv-wave-motion" d="M 10 150 Q 70 90 140 150 T 270 150"/>
        </defs>
        <ellipse cx="140" cy="100" rx="100" ry="50" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
        <circle cx="140" cy="100" r="16" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <circle r="10" fill="#818cf8">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#adv-orbit"/>
          </animateMotion>
        </circle>
        <path d="M 10 150 Q 70 90 140 150 T 270 150" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
        <polygon points="0,-7 6,7 -6,7" fill="#f472b6">
          <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
            <mpath href="#adv-wave-motion"/>
          </animateMotion>
        </polygon>
        <text x="140" y="195" textAnchor="middle" fontSize="9" fill="#64748b">orbit + wave path (rotate=auto aligns element to path)</text>
      </svg>
    ),
  },
  {
    title: "CSS animations on SVG",
    desc: "SVG elements fully support CSS animations and transitions. You can animate transforms, opacity, fill, stroke, and more with standard @keyframes.",
    code: `<style>
  .spinner {
    transform-origin: center;
    animation: spin 2s linear infinite;
  }
  .fade-ring {
    animation: pulse 1.5s ease infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; r: 30px; }
    50%       { opacity: 0.3; r: 45px; }
  }
</style>
<circle className="spinner" ... />
<circle className="fade-ring" ... />`,
    svg: () => (
      <svg viewBox="0 0 280 180" width="280" height="180">
        <style>{`
          @keyframes advSpin { to { transform: rotate(360deg); } }
          @keyframes advPing { 0%,100%{opacity:1;r:20px}50%{opacity:0;r:42px} }
          @keyframes advBounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(-25px)} }
          @keyframes advColorShift {
            0%{fill:#f97316}25%{fill:#a78bfa}50%{fill:#10b981}75%{fill:#f472b6}100%{fill:#f97316}
          }
          .adv-spinner { transform-origin:50px 90px; animation:advSpin 2s linear infinite; }
          .adv-ping { transform-origin:150px 90px; animation:advPing 1.8s ease infinite; }
          .adv-bouncer { animation:advBounce 1s ease infinite; transform-origin:235px 90px; }
          .adv-color { animation:advColorShift 3s linear infinite; }
        `}</style>
        <circle cx="50" cy="90" r="28" fill="none" stroke="#1e293b" strokeWidth="2"/>
        <path d="M 50 62 A 28 28 0 1 1 22 90" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" className="adv-spinner"/>
        <text x="50" y="132" textAnchor="middle" fontSize="9" fill="#64748b">CSS spin</text>
        <circle cx="150" cy="90" r="20" fill="#818cf8" className="adv-ping"/>
        <circle cx="150" cy="90" r="14" fill="#818cf8"/>
        <text x="150" y="147" textAnchor="middle" fontSize="9" fill="#64748b">ping pulse</text>
        <rect x="215" y="72" width="40" height="36" rx="6" fill="#10b981" className="adv-bouncer adv-color"/>
        <text x="235" y="143" textAnchor="middle" fontSize="9" fill="#64748b">bounce + color</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 11 – FOREIGN OBJECT
───────────────────────────────────────────── */
const foreignDemos: Demo[] = [
  {
    title: "foreignObject — embed HTML inside SVG",
    desc: "foreignObject lets you embed arbitrary HTML inside an SVG. Useful for rich text, HTML forms, or components that are hard to express in SVG primitives.",
    code: `<svg width="400" height="300">
  <rect width="400" height="300"
    fill="#1e293b" rx="12"/>

  {/* SVG shapes above */}
  <circle cx="60" cy="60" r="30"
    fill="#7c3aed"/>

  {/* HTML content via foreignObject */}
  <foreignObject x="20" y="110"
    width="360" height="170">
    <div xmlns="http://www.w3.org/1999/xhtml"
      style={{ padding:'12px',
        background:'rgba(255,255,255,0.08)',
        borderRadius:'8px',
        color:'white' }}>
      <h3>HTML inside SVG!</h3>
      <p>Full HTML rendering</p>
    </div>
  </foreignObject>
</svg>`,
    svg: () => (
      <svg viewBox="0 0 280 200" width="280" height="200">
        <rect width="280" height="200" fill="#0f172a" rx="10"/>
        <circle cx="50" cy="50" r="28" fill="#7c3aed"/>
        <polygon points="120,22 138,50 102,50" fill="#f97316"/>
        <ellipse cx="200" cy="48" rx="35" ry="20" fill="#10b981" opacity="0.8"/>
        <text x="10" y="90" fontSize="9" fill="#475569">↑ SVG shapes</text>
        <foreignObject x="10" y="98" width="260" height="90">
          <div style={{
            padding:"10px 12px",
            background:"rgba(99,102,241,0.15)",
            borderRadius:"8px",
            border:"1px solid rgba(99,102,241,0.3)",
            fontFamily:"system-ui",
          }}>
            <div style={{color:"#a5b4fc",fontSize:"11px",fontWeight:"bold",marginBottom:"4px"}}>HTML inside SVG via foreignObject</div>
            <div style={{color:"#94a3b8",fontSize:"10px",lineHeight:1.5}}>Full HTML rendering — use for rich text, forms, or any HTML content that's hard to do in SVG.</div>
            <div style={{marginTop:"6px",display:"flex",gap:"6px"}}>
              <span style={{background:"#7c3aed",color:"white",fontSize:"9px",padding:"2px 6px",borderRadius:"4px"}}>tag</span>
              <span style={{background:"#0f766e",color:"white",fontSize:"9px",padding:"2px 6px",borderRadius:"4px"}}>another</span>
            </div>
          </div>
        </foreignObject>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   SECTION 12 – ACCESSIBILITY
───────────────────────────────────────────── */
const a11yDemos: Demo[] = [
  {
    title: "SVG accessibility — title, desc, role, aria",
    desc: "SVGs need accessibility metadata for screen readers. Use <title> (short name) and <desc> (long description) inside the SVG. Set role='img' and aria-labelledby pointing to the title.",
    code: `<svg
  role="img"
  aria-labelledby="svg-title svg-desc"
  viewBox="0 0 200 200">

  <title id="svg-title">
    Monthly Revenue Chart
  </title>
  <desc id="svg-desc">
    Bar chart showing revenue from Jan to Apr.
    April was the highest at $42,000.
  </desc>

  {/* decorative elements that
      should be hidden from AT */}
  <line aria-hidden="true" .../>

  {/* interactive SVG element */}
  <rect
    role="button"
    tabIndex={0}
    aria-label="January: $28,000"
    onKeyDown={handleKeyDown}
    .../>
</svg>`,
    svg: () => (
      <svg viewBox="0 0 280 200" width="280" height="200" role="img" aria-labelledby="adv-title adv-desc">
        <title id="adv-title">SVG Accessibility Demo</title>
        <desc id="adv-desc">Bar chart showing revenue for 4 months, with April as the highest bar.</desc>
        <text x="15" y="20" fontSize="11" fontWeight="bold" fill="#e2e8f0">Monthly Revenue</text>
        <line x1="30" y1="25" x2="30" y2="160" stroke="#334155" strokeWidth="1" aria-hidden="true"/>
        <line x1="30" y1="160" x2="270" y2="160" stroke="#334155" strokeWidth="1" aria-hidden="true"/>
        {[
          {month:"Jan",val:28000,h:67,x:50},
          {month:"Feb",val:34000,h:82,x:110},
          {month:"Mar",val:30000,h:72,x:170},
          {month:"Apr",val:42000,h:100,x:230},
        ].map(b=>(
          <g key={b.month}>
            <rect
              x={b.x} y={160-b.h} width="40" height={b.h} rx="4"
              fill="#6366f1" role="button" tabIndex={0}
              aria-label={`${b.month}: $${b.val.toLocaleString()}`}
            >
              <animate attributeName="fill" values="#6366f1;#818cf8;#6366f1" dur="2s" begin="mouseover" end="mouseout"/>
            </rect>
            <text x={b.x+20} y={155-b.h} textAnchor="middle" fontSize="9" fill="#a5b4fc">${(b.val/1000).toFixed(0)}k</text>
            <text x={b.x+20} y="174" textAnchor="middle" fontSize="9" fill="#64748b">{b.month}</text>
          </g>
        ))}
        <rect x="10" y="180" width="260" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.5"/>
        <text x="15" y="192" fontSize="8" fill="#475569">role="img"  title  desc  role="button"  tabIndex  aria-label</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   ALL SECTIONS
───────────────────────────────────────────── */
const sections: Section[] = [
  { id:"paths",    label:"Path Commands",      icon:"✏",  color:"#f97316", demos: pathDemos    },
  { id:"coords",   label:"Coordinate Systems", icon:"⊞",  color:"#818cf8", demos: coordDemos   },
  { id:"gradients",label:"Gradients",          icon:"◐",  color:"#f472b6", demos: gradientDemos},
  { id:"patterns", label:"Patterns",           icon:"⊟",  color:"#fbbf24", demos: patternDemos },
  { id:"clip",     label:"Clip & Mask",        icon:"⚄",  color:"#10b981", demos: clipDemos    },
  { id:"text",     label:"Text & textPath",    icon:"T",  color:"#a78bfa", demos: textDemos    },
  { id:"symbols",  label:"Symbols & Use",      icon:"⊕",  color:"#34d399", demos: symbolDemos  },
  { id:"markers",  label:"Markers",            icon:"→",  color:"#fb923c", demos: markerDemos  },
  { id:"strokes",  label:"Stroke Techniques",  icon:"—",  color:"#38bdf8", demos: strokeDemos  },
  { id:"anim",     label:"Animations",         icon:"▶",  color:"#e879f9", demos: animDemos    },
  { id:"foreign",  label:"foreignObject",      icon:"⊞",  color:"#4ade80", demos: foreignDemos },
  { id:"a11y",     label:"Accessibility",      icon:"◎",  color:"#f9a8d4", demos: a11yDemos    },
];

/* ─────────────────────────────────────────────
   CODE BLOCK COMPONENT
───────────────────────────────────────────── */
const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ position: "relative", marginTop: 8 }}>
      <pre style={{
        background: "#020817",
        border: "1px solid #1e293b",
        borderRadius: 10,
        padding: "14px 16px",
        fontSize: 11.5,
        lineHeight: 1.7,
        color: "#7dd3fc",
        overflowX: "auto",
        margin: 0,
        whiteSpace: "pre-wrap",
        fontFamily: "'Fira Code', 'Cascadia Code', monospace",
      }}>
        {code}
      </pre>
      <button
        onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        style={{
          position: "absolute", top: 8, right: 8,
          background: copied ? "#15803d" : "#1e293b",
          border: "1px solid #334155", borderRadius: 6,
          color: "#94a3b8", fontSize: 10, padding: "3px 10px",
          cursor: "pointer", transition: "all 0.2s",
        }}
      >{copied ? "Copied ✓" : "Copy"}</button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const AdvancedSVG = () => {
  const [activeSection, setActiveSection] = useState("paths");
  const [openDemo, setOpenDemo] = useState<number | null>(null);
  const [showCode, setShowCode] = useState<Record<number, boolean>>({});

  const section = sections.find(s => s.id === activeSection)!;

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#030712",
      minHeight: "100vh",
      color: "#e2e8f0",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Top bar */}
      <div style={{
        padding: "18px 24px 14px",
        borderBottom: "1px solid #0f172a",
        background: "#050d1a",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.5px" }}>
            SVG Advanced
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>12 concepts · {sections.reduce((a,s)=>a+s.demos.length,0)} live demos · code for each</span>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{
          width: 210,
          background: "#050d1a",
          borderRight: "1px solid #0f172a",
          padding: "12px 8px",
          flexShrink: 0,
          overflowY: "auto",
        }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => { setActiveSection(s.id); setOpenDemo(null); }}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "9px 12px",
                borderRadius: 8,
                border: "none",
                background: activeSection === s.id ? `${s.color}18` : "transparent",
                color: activeSection === s.id ? s.color : "#64748b",
                fontSize: 12.5,
                fontWeight: activeSection === s.id ? 600 : 400,
                cursor: "pointer",
                marginBottom: 2,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.15s",
                borderLeft: activeSection === s.id ? `3px solid ${s.color}` : "3px solid transparent",
              }}>
              <span style={{ fontSize: 14, width: 20, textAlign: "center" }}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
          {/* Section header */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22, background: `${section.color}20`, borderRadius: 8, padding: "4px 10px" }}>
                {section.icon}
              </span>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#f1f5f9" }}>
                {section.label}
              </h2>
            </div>
            <p style={{ margin: "6px 0 0 0", fontSize: 13, color: "#475569" }}>
              {section.demos.length} concept{section.demos.length > 1 ? "s" : ""} — click any card to expand code
            </p>
          </div>

          {/* Demo cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {section.demos.map((demo, i) => {
              const isOpen = openDemo === i;
              const codeVisible = showCode[i];
              return (
                <div key={i} style={{
                  background: "#0a1628",
                  border: isOpen ? `1.5px solid ${section.color}55` : "1.5px solid #0f172a",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}>
                  {/* Card header */}
                  <div
                    onClick={() => setOpenDemo(isOpen ? null : i)}
                    style={{
                      padding: "14px 18px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: isOpen ? "1px solid #0f172a" : "none",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9" }}>{demo.title}</div>
                    </div>
                    <span style={{ color: section.color, fontSize: 18, transition: "transform 0.2s", transform: isOpen ? "rotate(90deg)" : "none" }}>›</span>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div style={{ padding: "16px 18px" }}>
                      <p style={{ fontSize: 13, color: "#94a3b8", margin: "0 0 16px", lineHeight: 1.65 }}>
                        {demo.desc}
                      </p>

                      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                        {/* Live demo */}
                        <div style={{ ...svgBox, flex: "0 0 auto" }}>
                          <demo.svg />
                        </div>

                        {/* Code */}
                        <div style={{ flex: 1, minWidth: 260 }}>
                          <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                            <button
                              onClick={() => setShowCode(s => ({ ...s, [i]: !s[i] }))}
                              style={{
                                background: codeVisible ? section.color : "transparent",
                                border: `1px solid ${codeVisible ? section.color : "#1e293b"}`,
                                borderRadius: 6,
                                color: codeVisible ? "#fff" : "#64748b",
                                fontSize: 11,
                                padding: "4px 12px",
                                cursor: "pointer",
                                fontWeight: 500,
                              }}
                            >
                              {codeVisible ? "Hide Code" : "Show Code"}
                            </button>
                          </div>
                          {codeVisible && <CodeBlock code={demo.code} />}
                          {!codeVisible && (
                            <div style={{
                              background: "#020817",
                              borderRadius: 10,
                              border: "1px solid #0f172a",
                              padding: "20px",
                              color: "#1e293b",
                              fontSize: 12,
                              fontFamily: "monospace",
                              userSelect: "none",
                            }}>
                              <div style={{ color: "#1e3a5f", lineHeight: 1.8 }}>
                                {demo.code.split("\n").slice(0, 5).map((l, li) => (
                                  <div key={li}>{l || " "}</div>
                                ))}
                                <div style={{ color: "#1e3a5f" }}>…</div>
                              </div>
                              <div style={{
                                marginTop: 12,
                                color: "#334155",
                                fontSize: 11,
                                textAlign: "center",
                                fontFamily: "system-ui",
                              }}>Click "Show Code" to reveal</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSVG;