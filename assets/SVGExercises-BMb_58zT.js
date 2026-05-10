import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{t as n}from"./react-BRPyh-lz.js";var r=e(n(),1),i=t(),a=({code:e,color:t})=>{let[n,a]=(0,r.useState)(!1);return(0,i.jsxs)(`div`,{className:`code-block`,children:[(0,i.jsx)(`button`,{className:`copy-btn`,style:{borderColor:t,color:t},onClick:()=>{navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)},children:n?`✓ Copied`:`Copy`}),(0,i.jsx)(`pre`,{children:(0,i.jsx)(`code`,{children:e})})]})},o=({ex:e,color:t,accentBg:n})=>{let[o,s]=(0,r.useState)(!1),[c,l]=(0,r.useState)(`preview`);return(0,i.jsxs)(`div`,{className:`ex-card ${o?`ex-card--open`:``}`,style:{"--accent":t,"--accent-bg":n},children:[(0,i.jsxs)(`button`,{className:`ex-card__header`,onClick:()=>s(e=>!e),children:[(0,i.jsx)(`span`,{className:`ex-card__id`,style:{background:n,color:t},children:e.id}),(0,i.jsx)(`span`,{className:`ex-card__title`,children:e.title}),(0,i.jsx)(`span`,{className:`ex-card__chevron`,style:{color:t},children:o?`▲`:`▼`})]}),o&&(0,i.jsxs)(`div`,{className:`ex-card__body`,children:[(0,i.jsxs)(`div`,{className:`ex-card__goal`,children:[(0,i.jsx)(`span`,{className:`label`,style:{color:t},children:`🎯 Goal`}),(0,i.jsx)(`p`,{children:e.goal})]}),(0,i.jsxs)(`div`,{className:`ex-card__hint`,children:[(0,i.jsx)(`span`,{className:`label`,style:{color:t},children:`💡 How to do it`}),(0,i.jsx)(`p`,{children:e.hint})]}),(0,i.jsx)(`div`,{className:`ex-card__tabs`,children:[`preview`,`code`].map(e=>(0,i.jsx)(`button`,{className:`tab-btn ${c===e?`tab-btn--active`:``}`,style:c===e?{background:t,color:`#fff`,borderColor:t}:{borderColor:t,color:t},onClick:()=>l(e),children:e===`preview`?`▶ Preview`:`</> Code`},e))}),(0,i.jsx)(`div`,{className:`ex-card__panel`,children:c===`preview`?(0,i.jsx)(`div`,{className:`svg-preview`,children:(0,i.jsx)(e.render,{})}):(0,i.jsx)(a,{code:e.code,color:t})})]})]})},s=[{id:`B-01`,title:`Basic Shapes — rect, circle, ellipse, line, polygon`,goal:`Draw all 5 basic SVG shapes with neon strokes on a white background. Understand x/y, cx/cy, r, rx/ry attributes.`,hint:`Set width/height on the SVG. Use fill for inside color, stroke for outline, strokeWidth for thickness. 
• rect → x, y, width, height, rx (corner radius)
• circle → cx, cy, r
• ellipse → cx, cy, rx, ry
• line → x1, y1, x2, y2 (no fill)
• polygon → points="x1,y1 x2,y2 …"`,code:`<svg width="400" height="220" viewBox="0 0 400 220"
     xmlns="http://www.w3.org/2000/svg">

  {/* rect with rounded corners */}
  <rect x="10" y="10" width="80" height="60" rx="8"
    fill="rgba(0,245,255,0.12)"
    stroke="rgb(0,245,255)"
    strokeWidth="2.5" />

  {/* circle */}
  <circle cx="160" cy="40" r="32"
    fill="rgba(255,0,255,0.10)"
    stroke="rgb(255,0,255)"
    strokeWidth="2.5" />

  {/* ellipse */}
  <ellipse cx="270" cy="40" rx="55" ry="30"
    fill="rgba(57,255,20,0.10)"
    stroke="rgb(57,255,20)"
    strokeWidth="2.5" />

  {/* line */}
  <line x1="340" y1="10" x2="390" y2="70"
    stroke="rgb(255,211,0)"
    strokeWidth="3"
    strokeLinecap="round" />

  {/* polygon — 6-pointed star */}
  <polygon
    points="90,130 105,160 140,160 115,180 125,215 90,195 55,215 65,180 40,160 75,160"
    fill="rgba(255,110,199,0.15)"
    stroke="rgb(255,110,199)"
    strokeWidth="2"
    strokeLinejoin="round" />

  {/* pentagon */}
  <polygon
    points="220,120 265,140 250,185 190,185 175,140"
    fill="rgba(124,0,255,0.12)"
    stroke="rgb(124,0,255)"
    strokeWidth="2.5" />

  {/* triangle */}
  <polygon points="330,120 380,210 280,210"
    fill="rgba(255,140,0,0.12)"
    stroke="rgb(255,140,0)"
    strokeWidth="2.5" />
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`220`,viewBox:`0 0 400 220`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`80`,height:`60`,rx:`8`,fill:`rgba(0,245,255,0.12)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`circle`,{cx:`160`,cy:`40`,r:`32`,fill:`rgba(255,0,255,0.10)`,stroke:`rgb(255,0,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`ellipse`,{cx:`270`,cy:`40`,rx:`55`,ry:`30`,fill:`rgba(57,255,20,0.10)`,stroke:`rgb(57,255,20)`,strokeWidth:`2.5`}),(0,i.jsx)(`line`,{x1:`340`,y1:`10`,x2:`390`,y2:`70`,stroke:`rgb(255,211,0)`,strokeWidth:`3`,strokeLinecap:`round`}),(0,i.jsx)(`polygon`,{points:`90,130 105,160 140,160 115,180 125,215 90,195 55,215 65,180 40,160 75,160`,fill:`rgba(255,110,199,0.15)`,stroke:`rgb(255,110,199)`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,i.jsx)(`polygon`,{points:`220,120 265,140 250,185 190,185 175,140`,fill:`rgba(124,0,255,0.12)`,stroke:`rgb(124,0,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`polygon`,{points:`330,120 380,210 280,210`,fill:`rgba(255,140,0,0.12)`,stroke:`rgb(255,140,0)`,strokeWidth:`2.5`}),(0,i.jsx)(`text`,{x:`50`,y:`105`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(0,245,255)`,children:`rect`}),(0,i.jsx)(`text`,{x:`160`,y:`105`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(255,0,255)`,children:`circle`}),(0,i.jsx)(`text`,{x:`270`,y:`105`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(57,255,20)`,children:`ellipse`}),(0,i.jsx)(`text`,{x:`365`,y:`105`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(255,211,0)`,children:`line`}),(0,i.jsx)(`text`,{x:`90`,y:`222`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(255,110,199)`,children:`star`}),(0,i.jsx)(`text`,{x:`222`,y:`200`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(124,0,255)`,children:`pentagon`}),(0,i.jsx)(`text`,{x:`330`,y:`222`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(255,140,0)`,children:`triangle`})]})},{id:`B-02`,title:`SVG Text — font, anchor, spacing, tspan`,goal:`Render styled text with textAnchor, fontSize, letterSpacing, fill. Use tspan for inline color/size changes and dy for line breaks.`,hint:`text element has x, y for position. Key attributes:
• textAnchor: "start" | "middle" | "end"
• dominantBaseline: "middle" | "hanging" | "auto"
• letterSpacing, fontSize, fontWeight, fontFamily
• tspan: nest inside text — supports dx, dy, fill, fontSize
• dy="1.4em" on tspan = new line with 1.4× line-height`,code:`<svg width="400" height="200" viewBox="0 0 400 200">

  {/* large neon title */}
  <text x="200" y="45" textAnchor="middle"
    fontSize="36" fontWeight="900"
    letterSpacing="4"
    fill="rgb(0,245,255)">
    SVG TEXT
  </text>

  {/* glow effect via filter */}
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <text x="200" y="45" textAnchor="middle"
    fontSize="36" fontWeight="900"
    letterSpacing="4"
    fill="rgb(0,245,255)"
    filter="url(#glow)" opacity="0.4">
    SVG TEXT
  </text>

  {/* tspan for multi-color inline */}
  <text x="20" y="90" fontSize="15" fill="#333">
    Learn
    <tspan fill="rgb(255,0,255)" fontWeight="700"> SVG </tspan>
    with
    <tspan fill="rgb(57,255,20)" fontWeight="700"> neon </tspan>
    colors!
  </text>

  {/* tspan dy = new lines */}
  <text x="20" y="125" fontSize="13" fill="#555">
    <tspan dy="0">Line one — dy="0"</tspan>
    <tspan x="20" dy="20" fill="rgb(255,140,0)">
      Line two — dy="20"
    </tspan>
    <tspan x="20" dy="20" fill="rgb(124,0,255)">
      Line three — dy="20"
    </tspan>
  </text>

  {/* right-aligned text */}
  <text x="390" y="185" textAnchor="end"
    fontSize="11" fill="rgb(0,191,255)"
    letterSpacing="2">
    textAnchor="end" →
  </text>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`200`,viewBox:`0 0 400 200`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`bg02glow`,children:[(0,i.jsx)(`feGaussianBlur`,{stdDeviation:`3`,result:`blur`}),(0,i.jsxs)(`feMerge`,{children:[(0,i.jsx)(`feMergeNode`,{in:`blur`}),(0,i.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,i.jsx)(`text`,{x:`200`,y:`45`,textAnchor:`middle`,fontSize:`36`,fontWeight:`900`,letterSpacing:`4`,fill:`rgb(0,245,255)`,filter:`url(#bg02glow)`,opacity:`0.4`,children:`SVG TEXT`}),(0,i.jsx)(`text`,{x:`200`,y:`45`,textAnchor:`middle`,fontSize:`36`,fontWeight:`900`,letterSpacing:`4`,fill:`rgb(0,245,255)`,children:`SVG TEXT`}),(0,i.jsxs)(`text`,{x:`20`,y:`90`,fontSize:`15`,fill:`#333`,children:[`Learn`,(0,i.jsx)(`tspan`,{fill:`rgb(255,0,255)`,fontWeight:`700`,children:` SVG `}),`with`,(0,i.jsx)(`tspan`,{fill:`rgb(57,255,20)`,fontWeight:`700`,children:` neon `}),`colors!`]}),(0,i.jsxs)(`text`,{x:`20`,y:`125`,fontSize:`13`,fill:`#555`,children:[(0,i.jsx)(`tspan`,{dy:`0`,children:`Line one — dy="0"`}),(0,i.jsx)(`tspan`,{x:`20`,dy:`20`,fill:`rgb(255,140,0)`,children:`Line two — dy="20"`}),(0,i.jsx)(`tspan`,{x:`20`,dy:`20`,fill:`rgb(124,0,255)`,children:`Line three — dy="20"`})]}),(0,i.jsx)(`text`,{x:`390`,y:`185`,textAnchor:`end`,fontSize:`11`,fill:`rgb(0,191,255)`,letterSpacing:`2`,children:`textAnchor="end" →`})]})},{id:`B-03`,title:`Linear & Radial Gradients`,goal:`Apply a linear gradient from neon cyan to neon purple and a radial gradient sphere effect. Understand stop-color and stop-opacity.`,hint:`Define gradients inside <defs> with a unique id, then reference with fill="url(#id)".
• linearGradient: x1/y1 → x2/y2 define the direction angle
• radialGradient: cx/cy = center, r = radius, fx/fy = focal point
• stop: offset (0%→100%), stopColor, stopOpacity
• Shift fx/fy off-center → 3D sphere look`,code:`<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    {/* horizontal linear */}
    <linearGradient id="horiz" x1="0%" y1="0%"
      x2="100%" y2="0%">
      <stop offset="0%"   stopColor="rgb(0,245,255)"/>
      <stop offset="50%"  stopColor="rgb(124,0,255)"/>
      <stop offset="100%" stopColor="rgb(255,0,255)"/>
    </linearGradient>

    {/* diagonal linear */}
    <linearGradient id="diag"
      x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stopColor="rgb(57,255,20)"/>
      <stop offset="100%" stopColor="rgb(0,191,255)"/>
    </linearGradient>

    {/* sphere radial */}
    <radialGradient id="sphere"
      cx="35%" cy="35%" r="60%"
      fx="28%" fy="28%">
      <stop offset="0%"
        stopColor="rgb(255,255,255)" stopOpacity="0.9"/>
      <stop offset="40%"
        stopColor="rgb(255,110,199)"/>
      <stop offset="100%"
        stopColor="rgb(124,0,255)"/>
    </radialGradient>
  </defs>

  <rect x="10" y="10" width="170" height="60" rx="10"
    fill="url(#horiz)"/>
  <text x="95" y="45" textAnchor="middle"
    fontSize="11" fill="white" fontWeight="bold">
    linearGradient horizontal
  </text>

  <rect x="195" y="10" width="195" height="60" rx="10"
    fill="url(#diag)"/>
  <text x="292" y="45" textAnchor="middle"
    fontSize="11" fill="white" fontWeight="bold">
    linearGradient diagonal
  </text>

  <circle cx="90" cy="145" r="55"
    fill="url(#sphere)"/>
  <text x="90" y="213" textAnchor="middle"
    fontSize="10" fill="#555">
    radialGradient sphere
  </text>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`220`,viewBox:`0 0 400 220`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`linearGradient`,{id:`bg03horiz`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(0,245,255)`}),(0,i.jsx)(`stop`,{offset:`50%`,stopColor:`rgb(124,0,255)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(255,0,255)`})]}),(0,i.jsxs)(`linearGradient`,{id:`bg03diag`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(57,255,20)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(0,191,255)`})]}),(0,i.jsxs)(`radialGradient`,{id:`bg03sphere`,cx:`35%`,cy:`35%`,r:`60%`,fx:`28%`,fy:`28%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(255,255,255)`,stopOpacity:`0.9`}),(0,i.jsx)(`stop`,{offset:`40%`,stopColor:`rgb(255,110,199)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(124,0,255)`})]})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`170`,height:`60`,rx:`10`,fill:`url(#bg03horiz)`}),(0,i.jsx)(`text`,{x:`95`,y:`45`,textAnchor:`middle`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`linearGradient horizontal`}),(0,i.jsx)(`rect`,{x:`195`,y:`10`,width:`195`,height:`60`,rx:`10`,fill:`url(#bg03diag)`}),(0,i.jsx)(`text`,{x:`292`,y:`45`,textAnchor:`middle`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`linearGradient diagonal`}),(0,i.jsx)(`circle`,{cx:`90`,cy:`145`,r:`55`,fill:`url(#bg03sphere)`}),(0,i.jsx)(`text`,{x:`90`,y:`213`,textAnchor:`middle`,fontSize:`10`,fill:`#555`,children:`radialGradient sphere`})]})},{id:`B-04`,title:`Path d attribute — M, L, C, Z`,goal:`Draw a neon speech bubble, a neon lightning bolt, and a smooth wave using path commands. Understand how M (move), L (line), C (curve), and Z (close) compose shapes.`,hint:`The d attribute is a mini-language:
• M x y → move pen (no draw)
• L x y → line to absolute point
• C x1 y1, x2 y2, x y → cubic Bézier (2 control pts)
• Q x1 y1, x y → quadratic Bézier (1 control pt)
• Z → close path back to start
• Lowercase = relative coords, UPPERCASE = absolute`,code:`<svg width="400" height="240" viewBox="0 0 400 240">

  {/* Speech bubble */}
  <path
    d="M 20 10
       H 160 Q 170 10 170 20
       V 80 Q 170 90 160 90
       H 60 L 30 115 L 50 90
       H 20 Q 10 90 10 80
       V 20 Q 10 10 20 10 Z"
    fill="rgba(0,245,255,0.1)"
    stroke="rgb(0,245,255)" strokeWidth="2.5"/>
  <text x="90" y="55" textAnchor="middle"
    fontSize="13" fill="rgb(0,245,255)"
    fontWeight="bold">Hello SVG!</text>

  {/* Lightning bolt */}
  <path
    d="M 230 10 L 200 110 L 225 110
       L 195 230 L 260 105 L 232 105 Z"
    fill="rgba(255,211,0,0.2)"
    stroke="rgb(255,211,0)" strokeWidth="2.5"
    strokeLinejoin="round"/>

  {/* Smooth wave using C */}
  <path
    d="M 0 200
       C 40 170, 80 230, 120 200
       C 160 170, 200 230, 240 200
       C 280 170, 320 230, 360 200
       C 380 185, 390 195, 400 200
       L 400 240 L 0 240 Z"
    fill="rgba(57,255,20,0.15)"
    stroke="rgb(57,255,20)" strokeWidth="2"/>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`240`,viewBox:`0 0 400 240`,children:[(0,i.jsx)(`path`,{d:`M 20 10 H 160 Q 170 10 170 20 V 80 Q 170 90 160 90 H 60 L 30 115 L 50 90 H 20 Q 10 90 10 80 V 20 Q 10 10 20 10 Z`,fill:`rgba(0,245,255,0.1)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`text`,{x:`90`,y:`55`,textAnchor:`middle`,fontSize:`13`,fill:`rgb(0,245,255)`,fontWeight:`bold`,children:`Hello SVG!`}),(0,i.jsx)(`path`,{d:`M 230 10 L 200 110 L 225 110 L 195 230 L 260 105 L 232 105 Z`,fill:`rgba(255,211,0,0.2)`,stroke:`rgb(255,211,0)`,strokeWidth:`2.5`,strokeLinejoin:`round`}),(0,i.jsx)(`path`,{d:`M 0 200 C 40 170, 80 230, 120 200 C 160 170, 200 230, 240 200 C 280 170, 320 230, 360 200 C 380 185, 390 195, 400 200 L 400 240 L 0 240 Z`,fill:`rgba(57,255,20,0.15)`,stroke:`rgb(57,255,20)`,strokeWidth:`2`})]})},{id:`B-05`,title:`Patterns & Textures`,goal:`Build a repeating dot grid, diagonal stripes, and a hexagonal tile. Learn how patternUnits and patternTransform work.`,hint:`Define <pattern> inside <defs>, give it width/height (tile size).
• patternUnits="userSpaceOnUse" → coordinates in SVG pixels
• patternUnits="objectBoundingBox" → 0-1 relative to shape
• patternTransform="rotate(45)" → tilts the pattern
• Any SVG shape can go inside the pattern tile`,code:`<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    {/* dot grid */}
    <pattern id="dots" width="16" height="16"
      patternUnits="userSpaceOnUse">
      <circle cx="8" cy="8" r="3"
        fill="rgb(0,245,255)" opacity="0.7"/>
    </pattern>

    {/* diagonal stripes */}
    <pattern id="stripes" width="12" height="12"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="6" height="12"
        fill="rgb(255,0,255)" opacity="0.5"/>
    </pattern>

    {/* hex tiles */}
    <pattern id="hex" width="34" height="40"
      patternUnits="userSpaceOnUse">
      <polygon
        points="17,2 30,10 30,30 17,38 4,30 4,10"
        fill="rgba(57,255,20,0.08)"
        stroke="rgb(57,255,20)" strokeWidth="1.5"/>
    </pattern>
  </defs>

  <rect x="5" y="5" width="118" height="118"
    rx="8" fill="url(#dots)"
    stroke="rgb(0,245,255)" strokeWidth="1.5"/>

  <rect x="138" y="5" width="118" height="118"
    rx="8" fill="url(#stripes)"
    stroke="rgb(255,0,255)" strokeWidth="1.5"/>

  <rect x="271" y="5" width="124" height="118"
    rx="8" fill="url(#hex)"
    stroke="rgb(57,255,20)" strokeWidth="1.5"/>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`130`,viewBox:`0 0 400 130`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`pattern`,{id:`bg05dots`,width:`16`,height:`16`,patternUnits:`userSpaceOnUse`,children:(0,i.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`rgb(0,245,255)`,opacity:`0.7`})}),(0,i.jsx)(`pattern`,{id:`bg05stripes`,width:`12`,height:`12`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`,children:(0,i.jsx)(`rect`,{width:`6`,height:`12`,fill:`rgb(255,0,255)`,opacity:`0.5`})}),(0,i.jsx)(`pattern`,{id:`bg05hex`,width:`34`,height:`40`,patternUnits:`userSpaceOnUse`,children:(0,i.jsx)(`polygon`,{points:`17,2 30,10 30,30 17,38 4,30 4,10`,fill:`rgba(57,255,20,0.08)`,stroke:`rgb(57,255,20)`,strokeWidth:`1.5`})})]}),(0,i.jsx)(`rect`,{x:`5`,y:`5`,width:`118`,height:`118`,rx:`8`,fill:`url(#bg05dots)`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`rect`,{x:`138`,y:`5`,width:`118`,height:`118`,rx:`8`,fill:`url(#bg05stripes)`,stroke:`rgb(255,0,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`rect`,{x:`271`,y:`5`,width:`124`,height:`118`,rx:`8`,fill:`url(#bg05hex)`,stroke:`rgb(57,255,20)`,strokeWidth:`1.5`}),(0,i.jsx)(`text`,{x:`64`,y:`125`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(0,245,255)`,children:`dot grid`}),(0,i.jsx)(`text`,{x:`197`,y:`125`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(255,0,255)`,children:`stripes`}),(0,i.jsx)(`text`,{x:`333`,y:`125`,textAnchor:`middle`,fontSize:`9`,fill:`rgb(57,255,20)`,children:`hexagons`})]})}],c=[{id:`A-01`,title:`Neon Glow Effect with feGaussianBlur`,goal:`Create a glowing neon sign effect by layering a blurred copy behind the sharp original. Use feDropShadow as a shortcut.`,hint:`Technique: render the shape twice.
1. First copy: large stdDeviation blur, low opacity → the halo
2. Second copy: normal sharp render → the crisp edge
OR use <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="neonColor"/>
floodOpacity controls glow intensity. Larger stdDeviation = wider glow.`,code:`<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    {/* glow filter for cyan */}
    <filter id="glow-cyan" x="-50%" y="-50%"
      width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    {/* drop-shadow shorthand glow */}
    <filter id="glow-pink" x="-40%" y="-40%"
      width="180%" height="180%">
      <feDropShadow dx="0" dy="0" stdDeviation="8"
        floodColor="rgb(255,0,255)"
        floodOpacity="0.9"/>
    </filter>
  </defs>

  {/* neon text — glow layer */}
  <text x="200" y="70" textAnchor="middle"
    fontSize="48" fontWeight="900"
    fill="rgba(0,245,255,0.3)"
    filter="url(#glow-cyan)">NEON</text>

  {/* neon text — sharp layer */}
  <text x="200" y="70" textAnchor="middle"
    fontSize="48" fontWeight="900"
    fill="rgb(0,245,255)">NEON</text>

  {/* neon circle with glow */}
  <circle cx="100" cy="145" r="35"
    fill="none"
    stroke="rgb(255,0,255)" strokeWidth="3"
    filter="url(#glow-pink)"/>

  {/* neon rect */}
  <rect x="170" y="110" width="160" height="60"
    rx="12" fill="none"
    stroke="rgb(57,255,20)" strokeWidth="2.5">
    <animate attributeName="opacity"
      values="1;0.4;1" dur="1.5s"
      repeatCount="indefinite"/>
  </rect>
  <text x="250" y="145" textAnchor="middle"
    fontSize="14" fill="rgb(57,255,20)"
    fontWeight="bold">OPEN 24/7</text>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`200`,viewBox:`0 0 400 200`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`filter`,{id:`adv01glow-cyan`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:[(0,i.jsx)(`feGaussianBlur`,{stdDeviation:`6`,result:`blur`}),(0,i.jsxs)(`feMerge`,{children:[(0,i.jsx)(`feMergeNode`,{in:`blur`}),(0,i.jsx)(`feMergeNode`,{in:`blur`}),(0,i.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,i.jsx)(`filter`,{id:`adv01glow-pink`,x:`-40%`,y:`-40%`,width:`180%`,height:`180%`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`8`,floodColor:`rgb(255,0,255)`,floodOpacity:`0.9`})}),(0,i.jsx)(`filter`,{id:`adv01glow-green`,x:`-40%`,y:`-40%`,width:`180%`,height:`180%`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`6`,floodColor:`rgb(57,255,20)`,floodOpacity:`0.8`})})]}),(0,i.jsx)(`text`,{x:`200`,y:`70`,textAnchor:`middle`,fontSize:`48`,fontWeight:`900`,fill:`rgba(0,245,255,0.3)`,filter:`url(#adv01glow-cyan)`,children:`NEON`}),(0,i.jsx)(`text`,{x:`200`,y:`70`,textAnchor:`middle`,fontSize:`48`,fontWeight:`900`,fill:`rgb(0,245,255)`,children:`NEON`}),(0,i.jsx)(`circle`,{cx:`100`,cy:`145`,r:`35`,fill:`none`,stroke:`rgb(255,0,255)`,strokeWidth:`3`,filter:`url(#adv01glow-pink)`}),(0,i.jsx)(`rect`,{x:`170`,y:`110`,width:`160`,height:`60`,rx:`12`,fill:`none`,stroke:`rgb(57,255,20)`,strokeWidth:`2.5`,filter:`url(#adv01glow-green)`,children:(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`1;0.4;1`,dur:`1.5s`,repeatCount:`indefinite`})}),(0,i.jsx)(`text`,{x:`250`,y:`145`,textAnchor:`middle`,fontSize:`14`,fill:`rgb(57,255,20)`,fontWeight:`bold`,children:`OPEN 24/7`})]})},{id:`A-02`,title:`clipPath & mask — reveal effects`,goal:`Clip a gradient rect to a text shape. Use a radial gradient mask to fade an image/shape from centre to edges. Understand hard vs soft clipping.`,hint:`clipPath = hard edge (binary mask — fully show or hide)
mask = soft edge (luminance-based — white=show, black=hide, grey=partial)
• Define in <defs>, apply with clipPath="url(#id)" or mask="url(#id)"
• Text inside clipPath → the gradient fills exactly the letter shapes
• Gradient inside mask → creates smooth fade-out`,code:`<svg width="400" height="220" viewBox="0 0 400 220">
  <defs>
    <linearGradient id="cg" x1="0%" y1="0%"
      x2="100%" y2="0%">
      <stop offset="0%"   stopColor="rgb(0,245,255)"/>
      <stop offset="50%"  stopColor="rgb(255,0,255)"/>
      <stop offset="100%" stopColor="rgb(57,255,20)"/>
    </linearGradient>

    {/* clip to text shape */}
    <clipPath id="text-clip">
      <text x="20" y="80" fontSize="72"
        fontWeight="900">CLIP</text>
    </clipPath>

    {/* radial fade mask */}
    <radialGradient id="fade-mask-g"
      cx="50%" cy="50%" r="50%">
      <stop offset="0%"  stopColor="white"/>
      <stop offset="75%" stopColor="white"/>
      <stop offset="100%" stopColor="black"/>
    </radialGradient>
    <mask id="fade-mask">
      <rect width="400" height="220"
        fill="url(#fade-mask-g)"/>
    </mask>
  </defs>

  {/* gradient clipped to text outline */}
  <rect x="0" y="0" width="400" height="100"
    fill="url(#cg)"
    clipPath="url(#text-clip)"/>

  {/* stroke outline over clipped text */}
  <text x="20" y="80" fontSize="72"
    fontWeight="900"
    fill="none" stroke="rgba(0,0,0,0.1)"
    strokeWidth="1"/>

  {/* circles with fade mask */}
  <g mask="url(#fade-mask)">
    <circle cx="200" cy="165" r="45"
      fill="none" stroke="rgb(255,140,0)"
      strokeWidth="3"/>
    <circle cx="200" cy="165" r="30"
      fill="none" stroke="rgb(255,0,255)"
      strokeWidth="3"/>
    <circle cx="200" cy="165" r="15"
      fill="rgb(0,245,255)" opacity="0.6"/>
  </g>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`220`,viewBox:`0 0 400 220`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`linearGradient`,{id:`adv02cg`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(0,245,255)`}),(0,i.jsx)(`stop`,{offset:`50%`,stopColor:`rgb(255,0,255)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(57,255,20)`})]}),(0,i.jsx)(`clipPath`,{id:`adv02text-clip`,children:(0,i.jsx)(`text`,{x:`20`,y:`80`,fontSize:`72`,fontWeight:`900`,children:`CLIP`})}),(0,i.jsxs)(`radialGradient`,{id:`adv02fade-mask-g`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`white`}),(0,i.jsx)(`stop`,{offset:`75%`,stopColor:`white`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`black`})]}),(0,i.jsx)(`mask`,{id:`adv02fade-mask`,children:(0,i.jsx)(`rect`,{width:`400`,height:`220`,fill:`url(#adv02fade-mask-g)`})})]}),(0,i.jsx)(`rect`,{x:`0`,y:`0`,width:`400`,height:`100`,fill:`url(#adv02cg)`,clipPath:`url(#adv02text-clip)`}),(0,i.jsxs)(`g`,{mask:`url(#adv02fade-mask)`,children:[(0,i.jsx)(`circle`,{cx:`200`,cy:`165`,r:`45`,fill:`none`,stroke:`rgb(255,140,0)`,strokeWidth:`3`}),(0,i.jsx)(`circle`,{cx:`200`,cy:`165`,r:`30`,fill:`none`,stroke:`rgb(255,0,255)`,strokeWidth:`3`}),(0,i.jsx)(`circle`,{cx:`200`,cy:`165`,r:`15`,fill:`rgb(0,245,255)`,opacity:`0.6`})]}),(0,i.jsx)(`text`,{x:`20`,y:`215`,fontSize:`9`,fill:`#aaa`,children:`Left: gradient clipPath on text | Right: radial gradient mask`})]})},{id:`A-03`,title:`CSS & SMIL Animations — draw-on, orbit, pulse`,goal:`Animate stroke-dashoffset to draw a path on screen. Orbit a dot around a circle with animateMotion. Pulse a ring with CSS @keyframes.`,hint:`Draw-on animation:
1. Set stroke-dasharray equal to path total length (use path.getTotalLength())
2. Set stroke-dashoffset to that same length (invisible)
3. Animate dashoffset → 0 (path appears)

animateMotion + <mpath> follows any SVG path.
CSS animations work on SVG: transform-origin must be set in SVG units.`,code:`<svg width="400" height="200" viewBox="0 0 400 200">
  <style>{\`
    @keyframes drawOn {
      to { stroke-dashoffset: 0; }
    }
    @keyframes neonPulse {
      0%, 100% { r: 20px; opacity: 1; }
      50%       { r: 38px; opacity: 0.3; }
    }
    .draw-path {
      stroke-dasharray: 520;
      stroke-dashoffset: 520;
      animation: drawOn 3s ease forwards infinite;
    }
    .pulse-ring {
      animation: neonPulse 1.4s ease infinite;
      transform-origin: 330px 100px;
    }
  \`}</style>
  <defs>
    <path id="orbit-ring"
      d="M 200 100 m -70 0
         a 70 35 0 1 1 140 0
         a 70 35 0 1 1 -140 0"/>
  </defs>

  {/* draw-on star path */}
  <path
    className="draw-path"
    d="M 90 20 L 105 65 L 152 65
       L 116 92 L 130 138
       L 90 112 L 50 138
       L 64 92 L 28 65
       L 75 65 Z"
    fill="none"
    stroke="rgb(255,211,0)"
    strokeWidth="2.5"
    strokeLinejoin="round"/>

  {/* orbit ellipse guide */}
  <path d="M 200 100 m -70 0 a 70 35 0 1 1 140 0 a 70 35 0 1 1 -140 0"
    fill="none" stroke="rgba(0,245,255,0.2)"
    strokeWidth="1.5" strokeDasharray="4 3"/>

  {/* orbiting dot */}
  <circle r="8" fill="rgb(0,245,255)">
    <animateMotion dur="3s"
      repeatCount="indefinite">
      <mpath href="#orbit-ring"/>
    </animateMotion>
  </circle>

  {/* pulsing ring */}
  <circle className="pulse-ring"
    cx="330" cy="100" r="20"
    fill="rgba(255,0,255,0.2)"
    stroke="rgb(255,0,255)"
    strokeWidth="2.5"/>
  <circle cx="330" cy="100" r="10"
    fill="rgb(255,0,255)"/>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`200`,viewBox:`0 0 400 200`,children:[(0,i.jsx)(`style`,{children:`
          @keyframes adv03drawOn { to { stroke-dashoffset: 0; } }
          @keyframes adv03pulse { 0%,100%{r:20px;opacity:1}50%{r:38px;opacity:0.3} }
          .adv03draw { stroke-dasharray:520;stroke-dashoffset:520;animation:adv03drawOn 3s ease infinite; }
          .adv03pulse { animation:adv03pulse 1.4s ease infinite;transform-origin:330px 100px; }
        `}),(0,i.jsx)(`defs`,{children:(0,i.jsx)(`path`,{id:`adv03orbit`,d:`M 200 100 m -70 0 a 70 35 0 1 1 140 0 a 70 35 0 1 1 -140 0`})}),(0,i.jsx)(`path`,{className:`adv03draw`,d:`M 90 20 L 105 65 L 152 65 L 116 92 L 130 138 L 90 112 L 50 138 L 64 92 L 28 65 L 75 65 Z`,fill:`none`,stroke:`rgb(255,211,0)`,strokeWidth:`2.5`,strokeLinejoin:`round`}),(0,i.jsx)(`path`,{d:`M 200 100 m -70 0 a 70 35 0 1 1 140 0 a 70 35 0 1 1 -140 0`,fill:`none`,stroke:`rgba(0,245,255,0.25)`,strokeWidth:`1.5`,strokeDasharray:`4 3`}),(0,i.jsx)(`circle`,{r:`8`,fill:`rgb(0,245,255)`,children:(0,i.jsx)(`animateMotion`,{dur:`3s`,repeatCount:`indefinite`,children:(0,i.jsx)(`mpath`,{href:`#adv03orbit`})})}),(0,i.jsx)(`circle`,{className:`adv03pulse`,cx:`330`,cy:`100`,r:`20`,fill:`rgba(255,0,255,0.2)`,stroke:`rgb(255,0,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`circle`,{cx:`330`,cy:`100`,r:`10`,fill:`rgb(255,0,255)`})]})},{id:`A-04`,title:`feTurbulence — fire, water, smoke textures`,goal:`Generate fire and water texture using feTurbulence + feColorMatrix. Understand baseFrequency, numOctaves, seed, and animated turbulence.`,hint:`feTurbulence generates Perlin noise — a seamless random texture.
• type="turbulence" → chaotic (fire, smoke)
• type="fractalNoise" → smoother (water, clouds)
• baseFrequency: smaller = larger blobs, larger = finer detail
• numOctaves: more = more detail layers (heavier)
• seed: different integer = different noise pattern
Animate the seed or baseFrequency for motion effect.`,code:`<svg width="400" height="180" viewBox="0 0 400 180">
  <defs>
    {/* fire: warm color mapping */}
    <filter id="fire-fx"
      x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="turbulence"
        baseFrequency="0.02 0.06"
        numOctaves="4" seed="3" result="n">
        <animate attributeName="baseFrequency"
          values="0.02 0.06;0.04 0.08;0.02 0.06"
          dur="2s" repeatCount="indefinite"/>
      </feTurbulence>
      <feColorMatrix type="matrix"
        values="3  1  0  0 -0.3
                0.5 0  0  0  0
                0  0  0  0  0
                0  0  0 15 -6"
        in="n"/>
    </filter>

    {/* water: cool color mapping */}
    <filter id="water-fx"
      x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise"
        baseFrequency="0.012 0.04"
        numOctaves="3" seed="9" result="n">
        <animate attributeName="baseFrequency"
          values="0.012 0.04;0.018 0.05;0.012 0.04"
          dur="4s" repeatCount="indefinite"/>
      </feTurbulence>
      <feColorMatrix type="matrix"
        values="0   0   0.5 0  0
                0   0   1   0  0
                0.5 0.5 2   0 -0.3
                0   0   0   8 -3"
        in="n"/>
    </filter>
  </defs>

  <rect x="10" y="10"  width="180" height="160"
    rx="8" filter="url(#fire-fx)"/>
  <rect x="210" y="10" width="180" height="160"
    rx="8" filter="url(#water-fx)"/>

  <text x="100" y="185" textAnchor="middle"
    fontSize="10" fill="#f97316">fire texture</text>
  <text x="300" y="185" textAnchor="middle"
    fontSize="10" fill="rgb(0,191,255)">water texture</text>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`195`,viewBox:`0 0 400 195`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`filter`,{id:`adv04fire`,x:`0%`,y:`0%`,width:`100%`,height:`100%`,children:[(0,i.jsx)(`feTurbulence`,{type:`turbulence`,baseFrequency:`0.02 0.06`,numOctaves:`4`,seed:`3`,result:`n`,children:(0,i.jsx)(`animate`,{attributeName:`baseFrequency`,values:`0.02 0.06;0.04 0.08;0.02 0.06`,dur:`2s`,repeatCount:`indefinite`})}),(0,i.jsx)(`feColorMatrix`,{type:`matrix`,values:`3 1 0 0 -0.3  0.5 0 0 0 0  0 0 0 0 0  0 0 0 15 -6`,in:`n`})]}),(0,i.jsxs)(`filter`,{id:`adv04water`,x:`0%`,y:`0%`,width:`100%`,height:`100%`,children:[(0,i.jsx)(`feTurbulence`,{type:`fractalNoise`,baseFrequency:`0.012 0.04`,numOctaves:`3`,seed:`9`,result:`n`,children:(0,i.jsx)(`animate`,{attributeName:`baseFrequency`,values:`0.012 0.04;0.018 0.05;0.012 0.04`,dur:`4s`,repeatCount:`indefinite`})}),(0,i.jsx)(`feColorMatrix`,{type:`matrix`,values:`0 0 0.5 0 0  0 0 1 0 0  0.5 0.5 2 0 -0.3  0 0 0 8 -3`,in:`n`})]})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`180`,height:`160`,rx:`8`,filter:`url(#adv04fire)`}),(0,i.jsx)(`rect`,{x:`210`,y:`10`,width:`180`,height:`160`,rx:`8`,filter:`url(#adv04water)`}),(0,i.jsx)(`text`,{x:`100`,y:`185`,textAnchor:`middle`,fontSize:`10`,fill:`rgb(255,140,0)`,children:`🔥 fire texture`}),(0,i.jsx)(`text`,{x:`300`,y:`185`,textAnchor:`middle`,fontSize:`10`,fill:`rgb(0,191,255)`,children:`💧 water texture`})]})}],l=(e,t,n,r)=>{let i=(r-90)*Math.PI/180;return{x:e+n*Math.cos(i),y:t+n*Math.sin(i)}},u=[{id:`beginner`,label:`Beginner`,emoji:`🌱`,color:`rgb(0,245,255)`,accentBg:`rgba(0,245,255,0.08)`,exercises:s},{id:`advanced`,label:`Advanced`,emoji:`⚡`,color:`rgb(255,0,255)`,accentBg:`rgba(255,0,255,0.08)`,exercises:c},{id:`charts`,label:`3D Charts`,emoji:`📊`,color:`rgb(57,255,20)`,accentBg:`rgba(57,255,20,0.08)`,exercises:[{id:`C-01`,title:`3D Donut Chart — arc math + depth extrusion`,goal:`Build a donut chart where each segment is extruded downward to create a 3D effect. Math: convert data percentages into arc angles using 2π·ratio formula.`,hint:`Math for pie/donut:
    • total = sum of all values
    • each slice angle = (value / total) × 360°
    • arc start angle = cumulative angle of previous slices
    • polarToCartesian(cx, cy, r, angle) → {x, y}
      x = cx + r × cos(angle in radians)
      y = cy + r × sin(angle in radians)
    3D depth: draw a second arc shifted by +depthY, connect with lines.
    `,render:()=>{let e=[{label:`React`,value:40,color:`rgb(0,245,255)`},{label:`Vue`,value:25,color:`rgb(255,0,255)`},{label:`Svelte`,value:20,color:`rgb(57,255,20)`},{label:`Angular`,value:15,color:`rgb(255,211,0)`}],t=e.reduce((e,t)=>e+t.value,0),n=0,r=e.map(e=>{let r=e.value/t*360,i={...e,startAngle:n,endAngle:n+r};return n+=i.endAngle,i});return(0,i.jsxs)(`svg`,{width:`400`,height:`220`,viewBox:`0 0 400 220`,children:[(0,i.jsx)(`defs`,{children:r.map((e,t)=>(0,i.jsx)(`filter`,{id:`c01glow${t}`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`4`,floodColor:e.color,floodOpacity:`0.6`})},t))}),r.filter(e=>e.startAngle>90||e.endAngle>90).map((e,t)=>{let n=Math.max(e.startAngle,90),r=Math.min(e.endAngle,270);if(r<=n)return null;let a=l(140,100,80,n),o=l(140,100,80,r),s=r-n>180?1:0;return(0,i.jsx)(`path`,{d:`M ${a.x} ${a.y} A 80 80 0 ${s} 1 ${o.x} ${o.y}
                    L ${o.x} ${o.y+18} A 80 80 0 ${s} 0 ${a.x} ${a.y+18} Z`,fill:e.color,opacity:`0.35`},`d${t}`)}),r.map((e,t)=>{let n=l(140,100,80,e.startAngle),r=l(140,100,80,e.endAngle),a=l(140,100,44,e.startAngle),o=l(140,100,44,e.endAngle),s=e.endAngle-e.startAngle>180?1:0;return(0,i.jsx)(`g`,{children:(0,i.jsx)(`path`,{d:`M ${n.x} ${n.y} A 80 80 0 ${s} 1 ${r.x} ${r.y}
                      L ${o.x} ${o.y} A 44 44 0 ${s} 0 ${a.x} ${a.y} Z`,fill:e.color,opacity:`0.9`,filter:`url(#c01glow${t})`})},t)}),r.map((e,t)=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`rect`,{x:`295`,y:30+t*32,width:`14`,height:`14`,rx:`3`,fill:e.color}),(0,i.jsxs)(`text`,{x:`315`,y:43+t*32,fontSize:`11`,fill:`#333`,fontWeight:`500`,children:[e.label,` — `,e.value,`%`]})]},`lg${t}`)),(0,i.jsx)(`text`,{x:`140`,y:`105`,textAnchor:`middle`,fontSize:`13`,fontWeight:`700`,fill:`#333`,children:`JS Frameworks`}),(0,i.jsx)(`text`,{x:`140`,y:`120`,textAnchor:`middle`,fontSize:`10`,fill:`#777`,children:`2024 survey`}),(0,i.jsxs)(`text`,{x:`140`,y:`208`,textAnchor:`middle`,fontSize:`9`,fill:`#aaa`,children:[`angle = (value/total) × 360° | depth extrusion via y+`,18]})]})},code:`// Complete 3D Donut Chart math
    const polarToCartesian = (cx, cy, r, deg) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
    };
    const data = [
      { label:"React",   value:40, color:"rgb(0,245,255)" },
      { label:"Vue",     value:25, color:"rgb(255,0,255)" },
      { label:"Svelte",  value:20, color:"rgb(57,255,20)" },
      { label:"Angular", value:15, color:"rgb(255,211,0)" },
    ];
    const cx=140, cy=100, outerR=80, innerR=44, depth=18;
    const total = data.reduce((s,d) => s+d.value, 0);
    let start = 0;
    const slices = data.map(d => {
      const angle = (d.value/total)*360;
      const sl = {...d, startAngle:start, endAngle:start+angle};
      start += angle;
      return sl;
    });
    // Render each slice:
    slices.map(s => {
      const so = polarToCartesian(cx,cy,outerR, s.startAngle);
      const eo = polarToCartesian(cx,cy,outerR, s.endAngle);
      const si = polarToCartesian(cx,cy,innerR, s.startAngle);
      const ei = polarToCartesian(cx,cy,innerR, s.endAngle);
      const la = s.endAngle - s.startAngle > 180 ? 1 : 0;
      return \`M \${so.x} \${so.y}
        A \${outerR} \${outerR} 0 \${la} 1 \${eo.x} \${eo.y}
        L \${ei.x} \${ei.y}
        A \${innerR} \${innerR} 0 \${la} 0 \${si.x} \${si.y} Z\`;
    })`},{id:`C-02`,title:`3D Bar Chart — perspective projection`,goal:`Render bars with isometric-style 3D tops and sides. Math: each bar has a front face, a top parallelogram, and a side face using a fixed depth offset.`,hint:`3D bar math with perspective offset (dx, dy):
• Front face: rect at (x, chartBottom - barHeight) width×barHeight
• Top face: parallelogram at top of front face, shifted by (dx, -dy)
  Points: TL, TR, TR+(dx,-dy), TL+(dx,-dy)
• Side face: right edge of front face down, shifted by (dx,-dy)
Use darker shade for side, lighter for top to simulate lighting.`,code:'const barData = [\n  {label:"Jan", value:65}, {label:"Feb", value:82},\n  {label:"Mar", value:48}, {label:"Apr", value:91},\n  {label:"May", value:74}, {label:"Jun", value:56},\n];\nconst chartH = 160, barW = 36, dx = 14, dy = 8;\nconst maxVal = Math.max(...barData.map(d => d.value));\n\nbarData.map((d, i) => {\n  const x = 30 + i * (barW + 16);\n  const bh = (d.value / maxVal) * chartH;  // bar height\n  const y  = chartBottom - bh;             // top of bar\n\n  // front face\n  const front = `${x},${y} ${x+barW},${y}\n    ${x+barW},${chartBottom} ${x},${chartBottom}`;\n\n  // top parallelogram\n  const top = `${x},${y}\n    ${x+barW},${y}\n    ${x+barW+dx},${y-dy}\n    ${x+dx},${y-dy}`;\n\n  // right side\n  const side = `${x+barW},${y}\n    ${x+barW+dx},${y-dy}\n    ${x+barW+dx},${chartBottom-dy}\n    ${x+barW},${chartBottom}`;\n});',render:()=>{let e=[{label:`Jan`,value:65},{label:`Feb`,value:82},{label:`Mar`,value:48},{label:`Apr`,value:91},{label:`May`,value:74},{label:`Jun`,value:56}],t=[`rgb(0,245,255)`,`rgb(255,0,255)`,`rgb(57,255,20)`,`rgb(255,211,0)`,`rgb(255,140,0)`,`rgb(124,0,255)`],n=Math.max(...e.map(e=>e.value));return(0,i.jsxs)(`svg`,{width:`400`,height:`210`,viewBox:`0 0 400 210`,children:[[0,25,50,75,100].map(e=>{let t=170-e/100*130;return(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`line`,{x1:`20`,y1:t,x2:`385`,y2:t,stroke:`#eee`,strokeWidth:`1`}),(0,i.jsx)(`text`,{x:`16`,y:t+4,fontSize:`8`,fill:`#bbb`,textAnchor:`end`,children:e})]},e)}),e.map((e,r)=>{let a=30+r*54,o=170-e.value/n*130,s=t[r],c=s.replace(`rgb(`,`rgba(`).replace(`)`,`,0.55)`),l=s.replace(`rgb(`,`rgba(`).replace(`)`,`,0.85)`);return(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`polygon`,{points:`${a+36},${o} ${a+36+14},${o-8} ${a+36+14},162 ${a+36},170`,fill:c}),(0,i.jsx)(`polygon`,{points:`${a},${o} ${a+36},${o} ${a+36},170 ${a},170`,fill:s,opacity:`0.85`}),(0,i.jsx)(`polygon`,{points:`${a},${o} ${a+36},${o} ${a+36+14},${o-8} ${a+14},${o-8}`,fill:l}),(0,i.jsx)(`text`,{x:a+36/2,y:o-8-6,textAnchor:`middle`,fontSize:`10`,fill:s,fontWeight:`700`,children:e.value}),(0,i.jsx)(`text`,{x:a+36/2,y:184,textAnchor:`middle`,fontSize:`10`,fill:`#555`,children:e.label})]},r)}),(0,i.jsx)(`text`,{x:`200`,y:`205`,textAnchor:`middle`,fontSize:`9`,fill:`#aaa`,children:`3D bar: front + top parallelogram + side face. bh = (value/maxVal) × chartH`})]})}},{id:`C-03`,title:`Animated Line Chart — SVG path + math`,goal:`Plot a multi-series line chart with smooth Bézier curves. Math: map data values to SVG coordinates using linear scale. Animate the lines drawing on.`,hint:`Linear scale: svgY = chartH - ((value - minVal) / (maxVal - minVal)) × chartH
For smooth curves use SVG C command:
• control points = midpoint between consecutive data points
• This creates a natural-looking catmull-rom style smooth line
To animate: set stroke-dasharray to path length, animate dashoffset 0→length→0`,code:`// Linear scale functions
const scaleX = (i, dataLen, w) =>
  (i / (dataLen - 1)) * w + paddingLeft;

const scaleY = (val, min, max, h) =>
  paddingTop + h - ((val - min) / (max - min)) * h;

// Smooth path from data points
const smoothPath = (points) => {
  return points.reduce((path, pt, i) => {
    if (i === 0) return \`M \${pt.x} \${pt.y}\`;
    const prev = points[i - 1];
    const cpX = (prev.x + pt.x) / 2;
    return path +
      \` C \${cpX} \${prev.y}, \${cpX} \${pt.y}, \${pt.x} \${pt.y}\`;
  }, "");
};

// Area under line (add bottom closing path)
const areaPath = smoothPath(pts)
  + \` L \${lastX} \${bottom} L \${firstX} \${bottom} Z\`;`,render:()=>{let e=[{name:`Sales`,color:`rgb(0,245,255)`,values:[30,55,45,70,60,85,75,92,80]},{name:`Revenue`,color:`rgb(255,0,255)`,values:[20,35,50,40,65,55,70,60,88]},{name:`Users`,color:`rgb(57,255,20)`,values:[50,40,60,55,75,65,80,70,95]}],t=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`],n=e=>40+e/(t.length-1)*360,r=e=>170-(e-0)/100*150,a=e=>e.reduce((t,n,r)=>{if(r===0)return`M ${n.x} ${n.y}`;let i=e[r-1],a=(i.x+n.x)/2;return t+` C ${a} ${i.y}, ${a} ${n.y}, ${n.x} ${n.y}`},``);return(0,i.jsxs)(`svg`,{width:`410`,height:`230`,viewBox:`0 0 410 230`,children:[(0,i.jsx)(`style`,{children:`
            @keyframes c03draw{to{stroke-dashoffset:0}}
            .c03l0{stroke-dasharray:700;stroke-dashoffset:700;animation:c03draw 2s 0s ease forwards infinite}
            .c03l1{stroke-dasharray:700;stroke-dashoffset:700;animation:c03draw 2s 0.4s ease forwards infinite}
            .c03l2{stroke-dasharray:700;stroke-dashoffset:700;animation:c03draw 2s 0.8s ease forwards infinite}
          `}),(0,i.jsx)(`defs`,{children:e.map((e,t)=>(0,i.jsxs)(`linearGradient`,{id:`c03area${t}`,x1:`0%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:e.color,stopOpacity:`0.3`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:e.color,stopOpacity:`0`})]},t))}),[0,25,50,75,100].map(e=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`line`,{x1:40,y1:r(e),x2:400,y2:r(e),stroke:`#f0f0f0`,strokeWidth:`1`}),(0,i.jsx)(`text`,{x:34,y:r(e)+4,fontSize:`9`,fill:`#ccc`,textAnchor:`end`,children:e})]},e)),t.map((e,t)=>(0,i.jsx)(`text`,{x:n(t),y:186,textAnchor:`middle`,fontSize:`9`,fill:`#999`,children:e},t)),e.map((e,o)=>{let s=e.values.map((e,t)=>({x:n(t),y:r(e)})),c=a(s);return(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`path`,{d:c+` L ${n(t.length-1)} 170 L ${n(0)} 170 Z`,fill:`url(#c03area${o})`}),(0,i.jsx)(`path`,{d:c,fill:`none`,stroke:e.color,strokeWidth:`2.5`,className:`c03l${o}`}),s.map((t,n)=>(0,i.jsx)(`circle`,{cx:t.x,cy:t.y,r:`3.5`,fill:e.color},n))]},o)}),e.map((e,t)=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`line`,{x1:40+t*110,y1:210,x2:60+t*110,y2:210,stroke:e.color,strokeWidth:`2.5`}),(0,i.jsx)(`text`,{x:64+t*110,y:214,fontSize:`10`,fill:`#555`,children:e.name})]},t)),(0,i.jsx)(`text`,{x:`210`,y:`228`,textAnchor:`middle`,fontSize:`8`,fill:`#bbb`,children:`scaleY = PT + H − ((val−min)/(max−min)) × H`})]})}}]},{id:`cartoons`,label:`Cartoons`,emoji:`🎨`,color:`rgb(255,211,0)`,accentBg:`rgba(255,211,0,0.08)`,exercises:[{id:`K-01`,title:`Neon Robot Character`,goal:`Draw a fun robot using only basic SVG shapes: rects, circles, lines, ellipses. Learn how to combine primitives to form a recognisable character.`,hint:`Robots are perfect for SVG beginners — they're just rectangles and circles!
• Head: large rect with rounded corners
• Eyes: circles with inner glow circles
• Antenna: line + circle on top
• Body: large rect, arms: long thin rects
• Legs: rects, feet: ellipses
Stack elements: shapes drawn later appear on top (painter's model).
Use <g transform="translate(x,y)"> to position a group.`,code:`<svg width="400" height="320" viewBox="0 0 400 320">
  <g transform="translate(200, 20)">
    {/* antenna */}
    <line x1="0" y1="-10" x2="0" y2="-50"
      stroke="rgb(0,245,255)" strokeWidth="3"/>
    <circle cx="0" cy="-55" r="8"
      fill="rgb(0,245,255)" opacity="0.8"/>

    {/* head */}
    <rect x="-50" y="-10" width="100" height="80"
      rx="12" fill="rgba(0,245,255,0.15)"
      stroke="rgb(0,245,255)" strokeWidth="2.5"/>

    {/* eyes */}
    <circle cx="-20" cy="22" r="14"
      fill="rgba(255,0,255,0.2)"
      stroke="rgb(255,0,255)" strokeWidth="2"/>
    <circle cx="-20" cy="22" r="7"
      fill="rgb(255,0,255)"/>

    {/* body, arms, legs ... */}
  </g>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`300`,viewBox:`0 0 400 300`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`k01glow`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(0,245,255)`,floodOpacity:`0.7`})}),(0,i.jsx)(`filter`,{id:`k01gpink`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`4`,floodColor:`rgb(255,0,255)`,floodOpacity:`0.8`})}),(0,i.jsx)(`filter`,{id:`k01ggreen`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`3`,floodColor:`rgb(57,255,20)`,floodOpacity:`0.7`})}),(0,i.jsxs)(`linearGradient`,{id:`k01body`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(0,245,255,0.18)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(124,0,255,0.18)`})]})]}),(0,i.jsxs)(`g`,{transform:`translate(200,30)`,children:[(0,i.jsx)(`line`,{x1:`0`,y1:`-5`,x2:`0`,y2:`-40`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#k01glow)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`-46`,r:`7`,fill:`rgb(0,245,255)`,filter:`url(#k01glow)`,children:(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`1;0.4;1`,dur:`1.2s`,repeatCount:`indefinite`})}),(0,i.jsx)(`rect`,{x:`-52`,y:`-5`,width:`104`,height:`82`,rx:`14`,fill:`url(#k01body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#k01glow)`}),(0,i.jsx)(`circle`,{cx:`-22`,cy:`24`,r:`16`,fill:`rgba(255,0,255,0.15)`,stroke:`rgb(255,0,255)`,strokeWidth:`2`}),(0,i.jsx)(`circle`,{cx:`-22`,cy:`24`,r:`8`,fill:`rgb(255,0,255)`,filter:`url(#k01gpink)`}),(0,i.jsx)(`circle`,{cx:`-18`,cy:`20`,r:`3`,fill:`white`,opacity:`0.7`}),(0,i.jsx)(`circle`,{cx:`22`,cy:`24`,r:`16`,fill:`rgba(255,0,255,0.15)`,stroke:`rgb(255,0,255)`,strokeWidth:`2`}),(0,i.jsx)(`circle`,{cx:`22`,cy:`24`,r:`8`,fill:`rgb(255,0,255)`,filter:`url(#k01gpink)`}),(0,i.jsx)(`circle`,{cx:`26`,cy:`20`,r:`3`,fill:`white`,opacity:`0.7`}),(0,i.jsx)(`path`,{d:`M -20 55 Q 0 68 20 55`,fill:`none`,stroke:`rgb(57,255,20)`,strokeWidth:`2.5`,strokeLinecap:`round`,filter:`url(#k01ggreen)`}),(0,i.jsx)(`circle`,{cx:`-52`,cy:`35`,r:`5`,fill:`rgb(255,211,0)`}),(0,i.jsx)(`circle`,{cx:`52`,cy:`35`,r:`5`,fill:`rgb(255,211,0)`}),(0,i.jsx)(`rect`,{x:`-14`,y:`77`,width:`28`,height:`16`,rx:`4`,fill:`rgba(0,245,255,0.3)`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`rect`,{x:`-65`,y:`93`,width:`130`,height:`100`,rx:`16`,fill:`url(#k01body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#k01glow)`}),(0,i.jsx)(`rect`,{x:`-40`,y:`108`,width:`80`,height:`50`,rx:`8`,fill:`rgba(124,0,255,0.2)`,stroke:`rgb(124,0,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`circle`,{cx:`-20`,cy:`133`,r:`8`,fill:`rgb(57,255,20)`,filter:`url(#k01ggreen)`,children:(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`1;0.3;1`,dur:`0.8s`,repeatCount:`indefinite`})}),(0,i.jsx)(`circle`,{cx:`0`,cy:`133`,r:`8`,fill:`rgb(255,0,255)`,filter:`url(#k01gpink)`,children:(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`1;0.3;1`,dur:`1.1s`,repeatCount:`indefinite`})}),(0,i.jsx)(`circle`,{cx:`20`,cy:`133`,r:`8`,fill:`rgb(255,211,0)`,children:(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`1;0.3;1`,dur:`0.9s`,repeatCount:`indefinite`})}),(0,i.jsx)(`rect`,{x:`-105`,y:`98`,width:`40`,height:`80`,rx:`10`,fill:`url(#k01body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`rect`,{x:`65`,y:`98`,width:`40`,height:`80`,rx:`10`,fill:`url(#k01body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`circle`,{cx:`-85`,cy:`190`,r:`14`,fill:`rgba(0,245,255,0.2)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`circle`,{cx:`85`,cy:`190`,r:`14`,fill:`rgba(0,245,255,0.2)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`rect`,{x:`-50`,y:`193`,width:`36`,height:`70`,rx:`10`,fill:`url(#k01body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`rect`,{x:`14`,y:`193`,width:`36`,height:`70`,rx:`10`,fill:`url(#k01body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`ellipse`,{cx:`-32`,cy:`268`,rx:`22`,ry:`10`,fill:`rgba(0,245,255,0.3)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`}),(0,i.jsx)(`ellipse`,{cx:`32`,cy:`268`,rx:`22`,ry:`10`,fill:`rgba(0,245,255,0.3)`,stroke:`rgb(0,245,255)`,strokeWidth:`2`})]})]})},{id:`K-02`,title:`Neon Rocket Ship`,goal:`Build a rocket from paths and shapes. Add animated exhaust flames using feTurbulence. Understand how to layer shapes and use grouping for motion.`,hint:`Rocket anatomy:
• Body: ellipse or path for the fuselage
• Nose cone: triangle polygon or path with arc
• Fins: polygon triangles at the bottom
• Window: circle inside body
• Exhaust: feTurbulence fire effect, or animated circles
Use <g transform="translate(cx,cy)"> to center the whole rocket,
then child elements are relative to that origin.`,code:`<svg width="400" height="320" viewBox="0 0 400 320">
  <defs>
    <filter id="exhaust">
      <feTurbulence type="turbulence"
        baseFrequency="0.03 0.1"
        numOctaves="3" seed="5">
        <animate attributeName="seed"
          values="1;10;1" dur="0.4s"
          repeatCount="indefinite"/>
      </feTurbulence>
      <feColorMatrix type="matrix"
        values="3 1 0 0 -0.5
                1 0.5 0 0 0
                0 0 0 0 0
                0 0 0 8 -3"/>
    </filter>
  </defs>
  <g transform="translate(200, 160)">
    <ellipse cx="0" cy="0" rx="45" ry="90"
      fill="rgba(0,245,255,0.15)"
      stroke="rgb(0,245,255)" strokeWidth="2.5"/>
    <path d="M -45 -30 Q 0 -120 45 -30"
      fill="rgba(255,0,255,0.2)"
      stroke="rgb(255,0,255)" strokeWidth="2.5"/>
    <circle cx="0" cy="-20" r="20"
      fill="rgba(255,211,0,0.3)"
      stroke="rgb(255,211,0)" strokeWidth="2"/>
    <polygon points="-45,50 -80,110 -45,90"
      fill="rgba(57,255,20,0.3)"
      stroke="rgb(57,255,20)" strokeWidth="2"/>
    <polygon points="45,50 80,110 45,90"
      fill="rgba(57,255,20,0.3)"
      stroke="rgb(57,255,20)" strokeWidth="2"/>
    <rect x="-25" y="90" width="50" height="60"
      filter="url(#exhaust)"/>
  </g>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`320`,viewBox:`0 0 400 320`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`filter`,{id:`k02exhaust`,x:`-50%`,y:`0%`,width:`200%`,height:`200%`,children:[(0,i.jsx)(`feTurbulence`,{type:`turbulence`,baseFrequency:`0.03 0.09`,numOctaves:`3`,seed:`5`,result:`n`,children:(0,i.jsx)(`animate`,{attributeName:`seed`,values:`1;15;1`,dur:`0.35s`,repeatCount:`indefinite`})}),(0,i.jsx)(`feColorMatrix`,{type:`matrix`,values:`3 1 0 0 -0.5  1 0.3 0 0 0  0 0 0 0 0  0 0 0 10 -4`,in:`n`})]}),(0,i.jsx)(`filter`,{id:`k02glow`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`6`,floodColor:`rgb(0,245,255)`,floodOpacity:`0.7`})}),(0,i.jsx)(`filter`,{id:`k02gpink`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(255,0,255)`,floodOpacity:`0.8`})}),(0,i.jsx)(`filter`,{id:`k02ggold`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`4`,floodColor:`rgb(255,211,0)`,floodOpacity:`0.8`})}),(0,i.jsxs)(`radialGradient`,{id:`k02window`,cx:`40%`,cy:`35%`,r:`60%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.9`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(255,211,0)`,stopOpacity:`0.4`})]}),(0,i.jsxs)(`linearGradient`,{id:`k02body`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(0,245,255,0.25)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(124,0,255,0.25)`})]})]}),[[30,25],[370,50],[60,130],[350,130],[20,200],[380,200],[80,280],[330,290]].map(([e,t],n)=>(0,i.jsx)(`circle`,{cx:e,cy:t,r:`2`,fill:`rgb(255,211,0)`,opacity:`0.6`,children:(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`0.6;0.1;0.6`,dur:`${1+n*.3}s`,repeatCount:`indefinite`})},n)),(0,i.jsxs)(`g`,{transform:`translate(200,155)`,children:[(0,i.jsx)(`rect`,{x:`-28`,y:`82`,width:`56`,height:`80`,filter:`url(#k02exhaust)`}),(0,i.jsx)(`polygon`,{points:`-44,40 -85,105 -44,85`,fill:`rgba(57,255,20,0.25)`,stroke:`rgb(57,255,20)`,strokeWidth:`2.5`,filter:`url(#k02glow)`}),(0,i.jsx)(`polygon`,{points:`44,40 85,105 44,85`,fill:`rgba(57,255,20,0.25)`,stroke:`rgb(57,255,20)`,strokeWidth:`2.5`,filter:`url(#k02glow)`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`0`,rx:`44`,ry:`88`,fill:`url(#k02body)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#k02glow)`}),(0,i.jsx)(`path`,{d:`M -44 -28 Q 0 -125 44 -28`,fill:`rgba(255,0,255,0.25)`,stroke:`rgb(255,0,255)`,strokeWidth:`2.5`,filter:`url(#k02gpink)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`-18`,r:`22`,fill:`url(#k02window)`,stroke:`rgb(255,211,0)`,strokeWidth:`2.5`,filter:`url(#k02ggold)`}),(0,i.jsx)(`text`,{x:`0`,y:`-12`,textAnchor:`middle`,fontSize:`16`,children:`👨‍🚀`}),(0,i.jsx)(`rect`,{x:`-44`,y:`15`,width:`88`,height:`10`,rx:`3`,fill:`rgba(255,0,255,0.3)`,stroke:`rgb(255,0,255)`,strokeWidth:`1`}),(0,i.jsx)(`rect`,{x:`-44`,y:`35`,width:`88`,height:`6`,rx:`2`,fill:`rgba(0,245,255,0.3)`}),(0,i.jsx)(`path`,{d:`M -28 88 L -35 105 L 35 105 L 28 88 Z`,fill:`rgba(0,245,255,0.4)`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`})]})]})},{id:`K-03`,title:`Neon Cat Character`,goal:`Craft a cute cartoon cat face using circles, paths, and ellipses. Learn SVG layering and how to express character with simple geometry.`,hint:`Cat anatomy with SVG:
• Head: large circle
• Ears: triangles (polygons) overlapping top of head circle
• Inner ears: smaller triangles, different color
• Eyes: ellipses, pupils: smaller ellipses
• Nose: small triangle/diamond
• Mouth: two Bézier curves (Q command) forming a cat smile
• Whiskers: 3 lines each side, rotating from nose`,code:`<svg width="400" height="300" viewBox="0 0 400 300">
  <g transform="translate(200, 150)">
    {/* head */}
    <circle cx="0" cy="0" r="100"
      fill="rgba(255,110,199,0.15)"
      stroke="rgb(255,110,199)" strokeWidth="3"/>

    {/* left ear */}
    <polygon points="-80,-70 -110,-140 -20,-80"
      fill="rgba(255,110,199,0.2)"
      stroke="rgb(255,110,199)" strokeWidth="2.5"/>

    {/* eyes — ellipses */}
    <ellipse cx="-35" cy="-15" rx="18" ry="22"
      fill="rgba(57,255,20,0.3)"
      stroke="rgb(57,255,20)" strokeWidth="2"/>
    {/* pupil (vertical slit) */}
    <ellipse cx="-35" cy="-15" rx="5" ry="18"
      fill="rgb(20,20,20)"/>

    {/* mouth curves */}
    <path d="M -15 30 Q -5 45 0 35"
      fill="none" stroke="rgb(255,110,199)"
      strokeWidth="2.5" strokeLinecap="round"/>

    {/* whiskers */}
    <line x1="-30" y1="20" x2="-110" y2="10"
      stroke="rgb(0,245,255)" strokeWidth="1.5"
      opacity="0.7"/>
  </g>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`400`,height:`310`,viewBox:`0 0 400 310`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`k03gpink`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(255,110,199)`,floodOpacity:`0.7`})}),(0,i.jsx)(`filter`,{id:`k03ggreen`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`4`,floodColor:`rgb(57,255,20)`,floodOpacity:`0.8`})}),(0,i.jsx)(`filter`,{id:`k03gcyan`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`3`,floodColor:`rgb(0,245,255)`,floodOpacity:`0.6`})}),(0,i.jsxs)(`radialGradient`,{id:`k03head`,cx:`40%`,cy:`35%`,r:`65%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(255,200,230,0.6)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(255,110,199,0.12)`})]}),(0,i.jsxs)(`radialGradient`,{id:`k03eye`,cx:`35%`,cy:`35%`,r:`60%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(150,255,150,0.8)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(57,255,20,0.3)`})]})]}),(0,i.jsxs)(`g`,{transform:`translate(200,155)`,children:[(0,i.jsx)(`polygon`,{points:`-82,-72 -115,-148 -22,-84`,fill:`rgba(255,110,199,0.2)`,stroke:`rgb(255,110,199)`,strokeWidth:`2.5`,filter:`url(#k03gpink)`}),(0,i.jsx)(`polygon`,{points:`-78,-75 -100,-132 -28,-86`,fill:`rgba(255,182,221,0.5)`}),(0,i.jsx)(`polygon`,{points:`82,-72 115,-148 22,-84`,fill:`rgba(255,110,199,0.2)`,stroke:`rgb(255,110,199)`,strokeWidth:`2.5`,filter:`url(#k03gpink)`}),(0,i.jsx)(`polygon`,{points:`78,-75 100,-132 28,-86`,fill:`rgba(255,182,221,0.5)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`0`,r:`100`,fill:`url(#k03head)`,stroke:`rgb(255,110,199)`,strokeWidth:`3`,filter:`url(#k03gpink)`}),(0,i.jsx)(`ellipse`,{cx:`-62`,cy:`28`,rx:`22`,ry:`14`,fill:`rgba(255,100,180,0.25)`}),(0,i.jsx)(`ellipse`,{cx:`62`,cy:`28`,rx:`22`,ry:`14`,fill:`rgba(255,100,180,0.25)`}),(0,i.jsx)(`ellipse`,{cx:`-34`,cy:`-14`,rx:`19`,ry:`23`,fill:`url(#k03eye)`,stroke:`rgb(57,255,20)`,strokeWidth:`2`,filter:`url(#k03ggreen)`}),(0,i.jsx)(`ellipse`,{cx:`-34`,cy:`-14`,rx:`6`,ry:`19`,fill:`#111`}),(0,i.jsx)(`circle`,{cx:`-28`,cy:`-20`,r:`4`,fill:`white`,opacity:`0.8`}),(0,i.jsx)(`ellipse`,{cx:`34`,cy:`-14`,rx:`19`,ry:`23`,fill:`url(#k03eye)`,stroke:`rgb(57,255,20)`,strokeWidth:`2`,filter:`url(#k03ggreen)`}),(0,i.jsx)(`ellipse`,{cx:`34`,cy:`-14`,rx:`6`,ry:`19`,fill:`#111`}),(0,i.jsx)(`circle`,{cx:`40`,cy:`-20`,r:`4`,fill:`white`,opacity:`0.8`}),(0,i.jsx)(`polygon`,{points:`0,18 -7,28 7,28`,fill:`rgb(255,110,199)`,filter:`url(#k03gpink)`}),(0,i.jsx)(`path`,{d:`M -14 32 Q -4 46 0 38`,fill:`none`,stroke:`rgb(255,110,199)`,strokeWidth:`2.5`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M 14 32 Q 4 46 0 38`,fill:`none`,stroke:`rgb(255,110,199)`,strokeWidth:`2.5`,strokeLinecap:`round`}),[[-28,18,-115,8],[-28,24,-115,24],[-28,30,-115,40],[28,18,115,8],[28,24,115,24],[28,30,115,40]].map(([e,t,n,r],a)=>(0,i.jsx)(`line`,{x1:e,y1:t,x2:n,y2:r,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`,opacity:`0.75`,filter:`url(#k03gcyan)`},a)),(0,i.jsx)(`polygon`,{points:`0,90 -30,70 0,80`,fill:`rgba(255,211,0,0.6)`,stroke:`rgb(255,211,0)`,strokeWidth:`1.5`}),(0,i.jsx)(`polygon`,{points:`0,90 30,70 0,80`,fill:`rgba(255,211,0,0.6)`,stroke:`rgb(255,211,0)`,strokeWidth:`1.5`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`82`,r:`6`,fill:`rgb(255,211,0)`}),(0,i.jsx)(`path`,{d:`M -80 75 Q 0 105 80 75`,fill:`none`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`-34`,cy:`-14`,rx:`19`,ry:`0`,fill:`rgb(255,110,199)`,stroke:`rgb(255,110,199)`,strokeWidth:`1`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;23;0`,keyTimes:`0;0.05;0.1`,dur:`4s`,repeatCount:`indefinite`,begin:`1s`})}),(0,i.jsx)(`ellipse`,{cx:`34`,cy:`-14`,rx:`19`,ry:`0`,fill:`rgb(255,110,199)`,stroke:`rgb(255,110,199)`,strokeWidth:`1`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;23;0`,keyTimes:`0;0.05;0.1`,dur:`4s`,repeatCount:`indefinite`,begin:`1s`})})]})]})},{id:`K-04`,title:`Donald Duck — Sailor Temper`,goal:`Recreate Donald Duck's iconic silhouette: round head, huge bill, sailor hat, puffy body and stubby tail. Learn to use arcs (A), quadratic curves (Q) and layered fills to build a recognisable cartoon face.`,hint:`Donald's anatomy in SVG:
• Head: large circle, slightly off-white fill
• Bill: wide flat ellipse + two curved path halves (upper / lower bill)
• Eyes: white circles with black pupils; one eyebrow each (tilted rect or path)
• Sailor hat: dark-blue rect + brim ellipse + red ribbon rect + white pompom circle
• Cheeks: faint blush ellipses
• Body: large ellipse below head, same off-white fill
• Sailor collar: two triangles (polygons) in blue
• Tail: small semi-circle path behind body
• Neon glow filters on hat & bill for the neon style`,code:`<svg width="420" height="360" viewBox="0 0 420 360">
  <defs>
    <filter id="ddGlow">
      <feDropShadow dx="0" dy="0" stdDeviation="6"
        floodColor="rgb(0,180,255)" floodOpacity="0.8"/>
    </filter>
    <filter id="ddYellow">
      <feDropShadow dx="0" dy="0" stdDeviation="5"
        floodColor="rgb(255,211,0)" floodOpacity="0.9"/>
    </filter>
  </defs>

  <g transform="translate(210,170)">
    {/* sailor hat */}
    <ellipse cx="0" cy="-108" rx="60" ry="12"
      fill="rgb(0,60,160)" filter="url(#ddGlow)"/>
    <rect x="-42" y="-148" width="84" height="42"
      rx="6" fill="rgb(0,60,160)" filter="url(#ddGlow)"/>
    <rect x="-42" y="-122" width="84" height="10"
      fill="rgb(220,0,0)"/>
    <circle cx="0" cy="-152" r="10"
      fill="white" filter="url(#ddGlow)"/>

    {/* head */}
    <circle cx="0" cy="-30" r="78"
      fill="rgba(230,240,255,0.95)"
      stroke="rgb(0,180,255)" strokeWidth="2.5"/>

    {/* bill — upper half */}
    <path d="M -52 -10 Q -20 30 0 28 Q 20 30 52 -10"
      fill="rgb(255,180,0)"
      stroke="rgb(255,130,0)" strokeWidth="2"
      filter="url(#ddYellow)"/>
    {/* bill — lower half */}
    <path d="M -52 -10 Q -20 -40 0 -42 Q 20 -40 52 -10"
      fill="rgb(255,200,50)"
      stroke="rgb(255,130,0)" strokeWidth="2"
      filter="url(#ddYellow)"/>
    {/* bill crease */}
    <path d="M -40 -10 Q 0 -8 40 -10"
      fill="none" stroke="rgb(200,100,0)"
      strokeWidth="1.5" opacity="0.6"/>

    {/* left eye */}
    <circle cx="-28" cy="-58" r="18"
      fill="white" stroke="rgb(0,180,255)"
      strokeWidth="1.5"/>
    <circle cx="-24" cy="-55" r="9"
      fill="rgb(20,20,60)"/>
    <circle cx="-21" cy="-58" r="3.5"
      fill="white"/>
    {/* right eye */}
    <circle cx="28" cy="-58" r="18"
      fill="white" stroke="rgb(0,180,255)"
      strokeWidth="1.5"/>
    <circle cx="32" cy="-55" r="9"
      fill="rgb(20,20,60)"/>
    <circle cx="35" cy="-58" r="3.5"
      fill="white"/>

    {/* angry eyebrows */}
    <rect x="-46" y="-82" width="32" height="7"
      rx="3" fill="rgb(20,20,60)"
      transform="rotate(-20,-30,-78)"/>
    <rect x="14" y="-82" width="32" height="7"
      rx="3" fill="rgb(20,20,60)"
      transform="rotate(20,30,-78)"/>

    {/* cheeks */}
    <ellipse cx="-58" cy="-28" rx="16" ry="10"
      fill="rgba(255,160,160,0.35)"/>
    <ellipse cx="58" cy="-28" rx="16" ry="10"
      fill="rgba(255,160,160,0.35)"/>

    {/* neck */}
    <rect x="-18" y="46" width="36" height="20"
      fill="rgba(200,220,255,0.9)"
      stroke="rgb(0,180,255)" strokeWidth="1.5"/>

    {/* body */}
    <ellipse cx="0" cy="120" rx="80" ry="90"
      fill="rgba(230,240,255,0.95)"
      stroke="rgb(0,180,255)" strokeWidth="2.5"/>

    {/* sailor collar — left flap */}
    <polygon points="0,66 -80,110 -20,100"
      fill="rgb(0,60,160)"
      stroke="rgb(0,180,255)" strokeWidth="1.5"
      filter="url(#ddGlow)"/>
    {/* sailor collar — right flap */}
    <polygon points="0,66 80,110 20,100"
      fill="rgb(0,60,160)"
      stroke="rgb(0,180,255)" strokeWidth="1.5"
      filter="url(#ddGlow)"/>
    {/* collar knot */}
    <polygon points="0,90 -14,74 14,74"
      fill="rgb(220,0,0)"/>

    {/* tail */}
    <path d="M 60 160 Q 120 130 110 180 Q 90 200 60 185 Z"
      fill="rgba(230,240,255,0.95)"
      stroke="rgb(0,180,255)" strokeWidth="2"/>
  </g>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`420`,height:`360`,viewBox:`0 0 420 360`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`ddGlow`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`6`,floodColor:`rgb(0,180,255)`,floodOpacity:`0.8`})}),(0,i.jsx)(`filter`,{id:`ddYellow`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(255,211,0)`,floodOpacity:`0.9`})}),(0,i.jsx)(`filter`,{id:`ddRed`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`4`,floodColor:`rgb(255,80,80)`,floodOpacity:`0.7`})}),(0,i.jsxs)(`radialGradient`,{id:`ddHead`,cx:`40%`,cy:`35%`,r:`65%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(255,255,255,0.95)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(210,230,255,0.9)`})]}),(0,i.jsxs)(`radialGradient`,{id:`ddBill`,cx:`50%`,cy:`30%`,r:`70%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(255,220,80)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(255,160,0)`})]})]}),(0,i.jsxs)(`g`,{transform:`translate(210,175)`,children:[(0,i.jsx)(`path`,{d:`M 62 148 Q 125 118 115 168 Q 95 192 62 178 Z`,fill:`url(#ddHead)`,stroke:`rgb(0,180,255)`,strokeWidth:`2`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`112`,rx:`82`,ry:`88`,fill:`url(#ddHead)`,stroke:`rgb(0,180,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`polygon`,{points:`0,64 -82,108 -22,98`,fill:`rgb(0,55,155)`,stroke:`rgb(0,180,255)`,strokeWidth:`1.5`,filter:`url(#ddGlow)`}),(0,i.jsx)(`polygon`,{points:`0,64 82,108 22,98`,fill:`rgb(0,55,155)`,stroke:`rgb(0,180,255)`,strokeWidth:`1.5`,filter:`url(#ddGlow)`}),(0,i.jsx)(`line`,{x1:`-40`,y1:`77`,x2:`-70`,y2:`103`,stroke:`white`,strokeWidth:`2`,opacity:`0.5`}),(0,i.jsx)(`line`,{x1:`40`,y1:`77`,x2:`70`,y2:`103`,stroke:`white`,strokeWidth:`2`,opacity:`0.5`}),(0,i.jsx)(`polygon`,{points:`0,88 -16,70 16,70`,fill:`rgb(220,30,30)`,filter:`url(#ddRed)`}),(0,i.jsx)(`rect`,{x:`-17`,y:`44`,width:`34`,height:`22`,rx:`4`,fill:`url(#ddHead)`,stroke:`rgb(0,180,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`-106`,rx:`64`,ry:`13`,fill:`rgb(0,55,155)`,filter:`url(#ddGlow)`}),(0,i.jsx)(`rect`,{x:`-44`,y:`-148`,width:`88`,height:`44`,rx:`8`,fill:`rgb(0,55,155)`,filter:`url(#ddGlow)`}),(0,i.jsx)(`rect`,{x:`-44`,y:`-120`,width:`88`,height:`11`,fill:`rgb(210,20,20)`,filter:`url(#ddRed)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`-153`,r:`11`,fill:`white`,filter:`url(#ddGlow)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`-30`,r:`80`,fill:`url(#ddHead)`,stroke:`rgb(0,180,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`path`,{d:`M -54 -8 Q -22 32 0 30 Q 22 32 54 -8`,fill:`url(#ddBill)`,stroke:`rgb(200,110,0)`,strokeWidth:`2`,filter:`url(#ddYellow)`}),(0,i.jsx)(`path`,{d:`M -54 -8 Q -22 -44 0 -46 Q 22 -44 54 -8`,fill:`rgb(255,210,60)`,stroke:`rgb(200,110,0)`,strokeWidth:`2`,filter:`url(#ddYellow)`}),(0,i.jsx)(`path`,{d:`M -42 -8 Q 0 -6 42 -8`,fill:`none`,stroke:`rgb(180,90,0)`,strokeWidth:`1.5`,opacity:`0.55`}),(0,i.jsx)(`ellipse`,{cx:`-14`,cy:`-28`,rx:`4`,ry:`3`,fill:`rgba(180,90,0,0.4)`}),(0,i.jsx)(`ellipse`,{cx:`14`,cy:`-28`,rx:`4`,ry:`3`,fill:`rgba(180,90,0,0.4)`}),(0,i.jsx)(`ellipse`,{cx:`-62`,cy:`-26`,rx:`17`,ry:`11`,fill:`rgba(255,150,150,0.3)`}),(0,i.jsx)(`ellipse`,{cx:`62`,cy:`-26`,rx:`17`,ry:`11`,fill:`rgba(255,150,150,0.3)`}),(0,i.jsx)(`circle`,{cx:`-28`,cy:`-60`,r:`19`,fill:`white`,stroke:`rgb(0,180,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`circle`,{cx:`-24`,cy:`-57`,r:`10`,fill:`rgb(15,15,55)`}),(0,i.jsx)(`circle`,{cx:`-21`,cy:`-61`,r:`3.5`,fill:`white`}),(0,i.jsx)(`circle`,{cx:`28`,cy:`-60`,r:`19`,fill:`white`,stroke:`rgb(0,180,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`circle`,{cx:`32`,cy:`-57`,r:`10`,fill:`rgb(15,15,55)`}),(0,i.jsx)(`circle`,{cx:`35`,cy:`-61`,r:`3.5`,fill:`white`}),(0,i.jsx)(`rect`,{x:`-48`,y:`-85`,width:`34`,height:`8`,rx:`4`,fill:`rgb(15,15,55)`,transform:`rotate(-22,-31,-81)`}),(0,i.jsx)(`rect`,{x:`14`,y:`-85`,width:`34`,height:`8`,rx:`4`,fill:`rgb(15,15,55)`,transform:`rotate(22,31,-81)`}),(0,i.jsx)(`ellipse`,{cx:`-28`,cy:`-60`,rx:`19`,ry:`0`,fill:`url(#ddHead)`,stroke:`rgb(0,180,255)`,strokeWidth:`1`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;19;0`,keyTimes:`0;0.04;0.08`,dur:`5s`,repeatCount:`indefinite`,begin:`2s`})}),(0,i.jsx)(`ellipse`,{cx:`28`,cy:`-60`,rx:`19`,ry:`0`,fill:`url(#ddHead)`,stroke:`rgb(0,180,255)`,strokeWidth:`1`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;19;0`,keyTimes:`0;0.04;0.08`,dur:`5s`,repeatCount:`indefinite`,begin:`2s`})})]})]})},{id:`K-05`,title:`Mickey Mouse — The Classic`,goal:`Draw Mickey's unmistakable silhouette: round head with two perfect ear circles, big eyes, tiny button nose, wide smile and four-fingered gloved hand wave. Practise exact circle placement and Bézier smiles.`,hint:`Mickey's secret: everything is circles!
• Head: large circle (black fill in classic, neon-outlined here)
• Ears: two circles of the same radius, placed upper-left and upper-right; they overlap the head circle slightly
• Eyes: white ovals, pupils: black circles
• Nose: small black oval at centre
• Smile: a wide arc path (A command) or two Q curves
• Cheeks: subtle blush ellipses
• Signature gloves: white-filled ellipse base, four finger-sausages (ellipses) fanning out
• Neon yellow halo ring around each ear for the glow effect`,code:`<svg width="420" height="380" viewBox="0 0 420 380">
  <defs>
    <filter id="mmGlow">
      <feDropShadow dx="0" dy="0" stdDeviation="7"
        floodColor="rgb(255,211,0)" floodOpacity="0.9"/>
    </filter>
    <filter id="mmWhite">
      <feDropShadow dx="0" dy="0" stdDeviation="5"
        floodColor="white" floodOpacity="0.8"/>
    </filter>
  </defs>

  <g transform="translate(210,200)">
    {/* left ear */}
    <circle cx="-68" cy="-130" r="55"
      fill="rgb(10,10,10)"
      stroke="rgb(255,211,0)" strokeWidth="3"
      filter="url(#mmGlow)"/>

    {/* right ear */}
    <circle cx="68" cy="-130" r="55"
      fill="rgb(10,10,10)"
      stroke="rgb(255,211,0)" strokeWidth="3"
      filter="url(#mmGlow)"/>

    {/* head */}
    <circle cx="0" cy="0" r="105"
      fill="rgb(10,10,10)"
      stroke="rgb(255,211,0)" strokeWidth="3"
      filter="url(#mmGlow)"/>

    {/* face patch */}
    <ellipse cx="0" cy="28" rx="72" ry="62"
      fill="rgba(255,220,180,0.92)"/>

    {/* eyes */}
    <ellipse cx="-34" cy="-28" rx="22" ry="26"
      fill="white"/>
    <circle cx="-28" cy="-24" r="13"
      fill="rgb(10,10,10)"/>
    <circle cx="-24" cy="-29" r="5"
      fill="white"/>

    <ellipse cx="34" cy="-28" rx="22" ry="26"
      fill="white"/>
    <circle cx="28" cy="-24" r="13"
      fill="rgb(10,10,10)"/>
    <circle cx="32" cy="-29" r="5"
      fill="white"/>

    {/* nose */}
    <ellipse cx="0" cy="14" rx="14" ry="10"
      fill="rgb(10,10,10)"/>

    {/* smile */}
    <path d="M -50 38 Q 0 88 50 38"
      fill="none"
      stroke="rgb(10,10,10)" strokeWidth="4"
      strokeLinecap="round"/>

    {/* cheeks */}
    <ellipse cx="-62" cy="28" rx="20" ry="13"
      fill="rgba(255,160,140,0.5)"/>
    <ellipse cx="62" cy="28" rx="20" ry="13"
      fill="rgba(255,160,140,0.5)"/>
  </g>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`420`,height:`370`,viewBox:`0 0 420 370`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`mmGlow`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`8`,floodColor:`rgb(255,211,0)`,floodOpacity:`0.9`})}),(0,i.jsx)(`filter`,{id:`mmWhiteGlow`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`white`,floodOpacity:`0.7`})}),(0,i.jsx)(`filter`,{id:`mmPink`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`4`,floodColor:`rgb(255,160,200)`,floodOpacity:`0.6`})}),(0,i.jsxs)(`radialGradient`,{id:`mmFace`,cx:`45%`,cy:`40%`,r:`65%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(255,235,200,0.98)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(240,200,160,0.92)`})]}),(0,i.jsxs)(`radialGradient`,{id:`mmGlove`,cx:`50%`,cy:`40%`,r:`60%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(255,255,255,0.98)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(220,225,240,0.9)`})]})]}),(0,i.jsxs)(`g`,{transform:`translate(210,195)`,children:[(0,i.jsx)(`circle`,{cx:`-70`,cy:`-128`,r:`60`,fill:`none`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,opacity:`0.3`}),(0,i.jsx)(`circle`,{cx:`-70`,cy:`-128`,r:`55`,fill:`rgb(12,12,12)`,stroke:`rgb(255,211,0)`,strokeWidth:`3`,filter:`url(#mmGlow)`}),(0,i.jsx)(`circle`,{cx:`70`,cy:`-128`,r:`60`,fill:`none`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,opacity:`0.3`}),(0,i.jsx)(`circle`,{cx:`70`,cy:`-128`,r:`55`,fill:`rgb(12,12,12)`,stroke:`rgb(255,211,0)`,strokeWidth:`3`,filter:`url(#mmGlow)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`0`,r:`108`,fill:`rgb(12,12,12)`,stroke:`rgb(255,211,0)`,strokeWidth:`3`,filter:`url(#mmGlow)`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`30`,rx:`74`,ry:`65`,fill:`url(#mmFace)`}),(0,i.jsx)(`ellipse`,{cx:`-34`,cy:`-30`,rx:`23`,ry:`27`,fill:`white`,filter:`url(#mmWhiteGlow)`}),(0,i.jsx)(`circle`,{cx:`-28`,cy:`-26`,r:`14`,fill:`rgb(12,12,12)`}),(0,i.jsx)(`circle`,{cx:`-23`,cy:`-32`,r:`5.5`,fill:`white`}),(0,i.jsx)(`ellipse`,{cx:`34`,cy:`-30`,rx:`23`,ry:`27`,fill:`white`,filter:`url(#mmWhiteGlow)`}),(0,i.jsx)(`circle`,{cx:`28`,cy:`-26`,r:`14`,fill:`rgb(12,12,12)`}),(0,i.jsx)(`circle`,{cx:`33`,cy:`-32`,r:`5.5`,fill:`white`}),(0,i.jsx)(`ellipse`,{cx:`-34`,cy:`-30`,rx:`23`,ry:`0`,fill:`rgb(12,12,12)`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;27;0`,keyTimes:`0;0.04;0.08`,dur:`4.5s`,repeatCount:`indefinite`,begin:`0.5s`})}),(0,i.jsx)(`ellipse`,{cx:`34`,cy:`-30`,rx:`23`,ry:`0`,fill:`rgb(12,12,12)`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;27;0`,keyTimes:`0;0.04;0.08`,dur:`4.5s`,repeatCount:`indefinite`,begin:`0.5s`})}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`14`,rx:`15`,ry:`11`,fill:`rgb(12,12,12)`}),(0,i.jsx)(`path`,{d:`M -52 40 Q -26 88 0 90 Q 26 88 52 40`,fill:`none`,stroke:`rgb(12,12,12)`,strokeWidth:`4.5`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`-65`,cy:`30`,rx:`21`,ry:`14`,fill:`rgba(255,150,130,0.45)`,filter:`url(#mmPink)`}),(0,i.jsx)(`ellipse`,{cx:`65`,cy:`30`,rx:`21`,ry:`14`,fill:`rgba(255,150,130,0.45)`,filter:`url(#mmPink)`}),(0,i.jsxs)(`g`,{transform:`translate(-130, 80)`,children:[(0,i.jsx)(`ellipse`,{cx:`0`,cy:`0`,rx:`34`,ry:`28`,fill:`url(#mmGlove)`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,filter:`url(#mmGlow)`,children:(0,i.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`-10;10;-10`,dur:`1.8s`,repeatCount:`indefinite`})}),[[-22,-22,-30,-40],[-8,-26,-10,-46],[8,-26,10,-46],[22,-22,30,-40]].map(([e,t],n)=>(0,i.jsx)(`ellipse`,{cx:e,cy:t,rx:`9`,ry:`14`,fill:`url(#mmGlove)`,stroke:`rgb(255,211,0)`,strokeWidth:`1.5`,transform:`rotate(${(n-1.5)*18} ${e} ${t})`,filter:`url(#mmGlow)`,children:(0,i.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`${(n-1.5)*18-10} ${e} ${t};${(n-1.5)*18+10} ${e} ${t};${(n-1.5)*18-10} ${e} ${t}`,dur:`1.8s`,repeatCount:`indefinite`})},n))]}),(0,i.jsxs)(`g`,{transform:`translate(130, 80)`,children:[(0,i.jsx)(`ellipse`,{cx:`0`,cy:`0`,rx:`34`,ry:`28`,fill:`url(#mmGlove)`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,filter:`url(#mmGlow)`}),[[-22,-22,-30,-40],[-8,-26,-10,-46],[8,-26,10,-46],[22,-22,30,-40]].map(([e,t],n)=>(0,i.jsx)(`ellipse`,{cx:e,cy:t,rx:`9`,ry:`14`,fill:`url(#mmGlove)`,stroke:`rgb(255,211,0)`,strokeWidth:`1.5`,transform:`rotate(${(n-1.5)*18} ${e} ${t})`,filter:`url(#mmGlow)`},n))]}),(0,i.jsx)(`ellipse`,{cx:`-70`,cy:`148`,rx:`46`,ry:`24`,fill:`rgb(12,12,12)`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,filter:`url(#mmGlow)`}),(0,i.jsx)(`ellipse`,{cx:`70`,cy:`148`,rx:`46`,ry:`24`,fill:`rgb(12,12,12)`,stroke:`rgb(255,211,0)`,strokeWidth:`2`,filter:`url(#mmGlow)`})]})]})},{id:`K-06`,title:`Tom & Jerry — The Chase`,goal:`Draw Tom (the cat) and Jerry (the mouse) in a classic chase scene side-by-side. Practise character sizing, expression, speed lines, and layered neon glow for a dynamic composition.`,hint:`Two characters, one SVG canvas:
JERRY (mouse — left side, smaller):
• Head: circle, large round ears (two circles on top)
• Eyes: big whites with black pupils
• Nose: tiny oval, whiskers: 4 short lines
• Body: oval, tail: long S-curve path
• Colour palette: brown/tan with neon-pink accents

TOM (cat — right side, larger, angry):
• Head: rounder than Jerry's, pointy ears (triangles)
• Eyes: squinting/angry (half-ellipses cut with a line)
• Nose: upturned path
• Whiskers: long lines each side
• Body: larger oval, striped fur: thin paths
• Colour palette: blue-grey with neon-cyan accents

Speed lines: radiating lines behind Jerry to show motion.
Expression marks: little sweat drops, stars near Tom's head.`,code:`<svg width="520" height="320" viewBox="0 0 520 320">
  <defs>
    <filter id="tnjCyan">
      <feDropShadow dx="0" dy="0" stdDeviation="5"
        floodColor="rgb(0,245,255)" floodOpacity="0.8"/>
    </filter>
    <filter id="tnjPink">
      <feDropShadow dx="0" dy="0" stdDeviation="5"
        floodColor="rgb(255,80,180)" floodOpacity="0.8"/>
    </filter>
  </defs>

  {/* Speed lines behind Jerry */}
  {[[-120,-30],[-130,0],[-125,30],[-115,60]].map(
    ([dx,dy],i) => (
      <line key={i}
        x1={130+dx} y1={160+dy}
        x2={130+dx+50} y2={160+dy}
        stroke="rgb(255,211,0)"
        strokeWidth="2" opacity="0.5"/>
  ))}

  {/* JERRY */}
  <g transform="translate(150,160)">
    {/* ears */}
    <circle cx="-28" cy="-85" r="28"
      fill="rgb(180,110,60)"
      stroke="rgb(255,80,180)" strokeWidth="2"
      filter="url(#tnjPink)"/>
    <circle cx="-28" cy="-85" r="16"
      fill="rgb(255,180,160)"/>
    <circle cx="28" cy="-85" r="28"
      fill="rgb(180,110,60)"
      stroke="rgb(255,80,180)" strokeWidth="2"
      filter="url(#tnjPink)"/>
    <circle cx="28" cy="-85" r="16"
      fill="rgb(255,180,160)"/>

    {/* head */}
    <circle cx="0" cy="-40" r="52"
      fill="rgb(180,110,60)"
      stroke="rgb(255,80,180)" strokeWidth="2.5"/>

    {/* eyes */}
    <ellipse cx="-16" cy="-50" rx="13" ry="15"
      fill="white"/>
    <circle cx="-12" cy="-47" r="7"
      fill="rgb(20,20,60)"/>
    <circle cx="-10" cy="-51" r="2.5"
      fill="white"/>

    <ellipse cx="16" cy="-50" rx="13" ry="15"
      fill="white"/>
    <circle cx="20" cy="-47" r="7"
      fill="rgb(20,20,60)"/>
    <circle cx="22" cy="-51" r="2.5"
      fill="white"/>

    {/* nose + mouth */}
    <ellipse cx="0" cy="-28" rx="6" ry="4"
      fill="rgb(255,80,180)"
      filter="url(#tnjPink)"/>
    <path d="M -10 -22 Q 0 -14 10 -22"
      fill="none" stroke="rgb(180,80,40)"
      strokeWidth="2" strokeLinecap="round"/>

    {/* body */}
    <ellipse cx="0" cy="50" rx="42" ry="55"
      fill="rgb(180,110,60)"
      stroke="rgb(255,80,180)" strokeWidth="2"/>

    {/* tail */}
    <path d="M 30 80 Q 90 60 100 100
             Q 110 140 70 130"
      fill="none"
      stroke="rgb(255,80,180)" strokeWidth="4"
      strokeLinecap="round"
      filter="url(#tnjPink)"/>
  </g>

  {/* TOM */}
  <g transform="translate(360,155)">
    {/* ears */}
    <polygon points="-50,-95 -72,-148 -18,-100"
      fill="rgb(100,130,170)"
      stroke="rgb(0,245,255)" strokeWidth="2.5"
      filter="url(#tnjCyan)"/>
    <polygon points="50,-95 72,-148 18,-100"
      fill="rgb(100,130,170)"
      stroke="rgb(0,245,255)" strokeWidth="2.5"
      filter="url(#tnjCyan)"/>

    {/* head */}
    <circle cx="0" cy="-30" r="80"
      fill="rgb(100,130,170)"
      stroke="rgb(0,245,255)" strokeWidth="2.5"
      filter="url(#tnjCyan)"/>

    {/* face patch */}
    <ellipse cx="0" cy="-10" rx="52" ry="55"
      fill="rgba(200,215,240,0.85)"/>

    {/* angry eyes */}
    <ellipse cx="-30" cy="-52" rx="20" ry="22"
      fill="white"/>
    <ellipse cx="-30" cy="-52" rx="20" ry="11"
      fill="white" transform="translate(0,-11)"/>
    <circle cx="-25" cy="-48" r="11"
      fill="rgb(20,80,20)"/>
    <circle cx="-21" cy="-53" r="4"
      fill="white"/>
    <line x1="-52" y1="-68" x2="-10" y2="-56"
      stroke="rgb(20,20,60)" strokeWidth="4"
      strokeLinecap="round"/>

    <ellipse cx="30" cy="-52" rx="20" ry="22"
      fill="white"/>
    <ellipse cx="30" cy="-52" rx="20" ry="11"
      fill="white" transform="translate(0,-11)"/>
    <circle cx="25" cy="-48" r="11"
      fill="rgb(20,80,20)"/>
    <circle cx="29" cy="-53" r="4"
      fill="white"/>
    <line x1="52" y1="-68" x2="10" y2="-56"
      stroke="rgb(20,20,60)" strokeWidth="4"
      strokeLinecap="round"/>

    {/* nose */}
    <path d="M -12 -12 Q 0 -8 12 -12"
      fill="rgb(255,160,140)"
      stroke="rgb(180,80,60)" strokeWidth="1.5"/>

    {/* whiskers */}
    {[[-18,-2,-95,-12],[-18,4,-95,4],[-18,10,-95,20],
      [18,-2,95,-12],[18,4,95,4],[18,10,95,20]].map(
      ([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgb(0,245,255)" strokeWidth="1.5"
        opacity="0.8" filter="url(#tnjCyan)"/>
    ))}

    {/* body */}
    <ellipse cx="0" cy="100" rx="85" ry="90"
      fill="rgb(100,130,170)"
      stroke="rgb(0,245,255)" strokeWidth="2.5"/>

    {/* fur stripes */}
    {/* fur stripes */}
    {[[-30,55],[-15,65],[0,60],[15,65],[30,55]].map(
      ([x,y],i)=>(
        <path
          key={i}
          d={"M " + x + " " + y + " Q " + (x+5) + " " + (y+30) + " " + x + " " + (y+55)}
          fill="none"
          stroke="rgba(60,90,130,0.4)"
          strokeWidth="2.5"
        />
    ))}
  </g>

  {/* VS label */}
  <text x="260" y="175"
    textAnchor="middle" fontSize="28"
    fontWeight="900" fill="rgb(255,211,0)"
    filter="url(#tnjCyan)">VS</text>
</svg>`,render:()=>(0,i.jsxs)(`svg`,{width:`520`,height:`320`,viewBox:`0 0 520 320`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`tnjCyan`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(0,245,255)`,floodOpacity:`0.8`})}),(0,i.jsx)(`filter`,{id:`tnjPink`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(255,80,180)`,floodOpacity:`0.8`})}),(0,i.jsx)(`filter`,{id:`tnjGold`,children:(0,i.jsx)(`feDropShadow`,{dx:`0`,dy:`0`,stdDeviation:`5`,floodColor:`rgb(255,211,0)`,floodOpacity:`0.9`})}),(0,i.jsxs)(`radialGradient`,{id:`tnjJerryHead`,cx:`40%`,cy:`35%`,r:`65%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(210,140,80)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(160,90,45)`})]}),(0,i.jsxs)(`radialGradient`,{id:`tnjTomHead`,cx:`40%`,cy:`35%`,r:`65%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`rgb(130,160,200)`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`rgb(85,115,160)`})]})]}),[[-118,-28],[-132,-2],[-124,26],[-112,54]].map(([e,t],n)=>(0,i.jsx)(`line`,{x1:148+e,y1:158+t,x2:148+e+55,y2:158+t,stroke:`rgb(255,211,0)`,strokeWidth:`2.5`,opacity:`0.55`,strokeLinecap:`round`},n)),(0,i.jsxs)(`g`,{transform:`translate(148,158)`,children:[(0,i.jsx)(`path`,{d:`M 32 75 Q 95 55 106 98 Q 116 138 72 128`,fill:`none`,stroke:`rgb(255,80,180)`,strokeWidth:`4.5`,strokeLinecap:`round`,filter:`url(#tnjPink)`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`52`,rx:`43`,ry:`56`,fill:`url(#tnjJerryHead)`,stroke:`rgb(255,80,180)`,strokeWidth:`2`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`58`,rx:`26`,ry:`36`,fill:`rgba(255,200,170,0.7)`}),(0,i.jsx)(`circle`,{cx:`-28`,cy:`-86`,r:`29`,fill:`rgb(175,105,55)`,stroke:`rgb(255,80,180)`,strokeWidth:`2`,filter:`url(#tnjPink)`}),(0,i.jsx)(`circle`,{cx:`-28`,cy:`-86`,r:`17`,fill:`rgb(255,175,155)`}),(0,i.jsx)(`circle`,{cx:`28`,cy:`-86`,r:`29`,fill:`rgb(175,105,55)`,stroke:`rgb(255,80,180)`,strokeWidth:`2`,filter:`url(#tnjPink)`}),(0,i.jsx)(`circle`,{cx:`28`,cy:`-86`,r:`17`,fill:`rgb(255,175,155)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`-40`,r:`53`,fill:`url(#tnjJerryHead)`,stroke:`rgb(255,80,180)`,strokeWidth:`2.5`}),(0,i.jsx)(`ellipse`,{cx:`-40`,cy:`-28`,rx:`14`,ry:`9`,fill:`rgba(255,160,160,0.4)`}),(0,i.jsx)(`ellipse`,{cx:`40`,cy:`-28`,rx:`14`,ry:`9`,fill:`rgba(255,160,160,0.4)`}),(0,i.jsx)(`ellipse`,{cx:`-16`,cy:`-52`,rx:`14`,ry:`16`,fill:`white`}),(0,i.jsx)(`circle`,{cx:`-12`,cy:`-49`,r:`8`,fill:`rgb(15,15,55)`}),(0,i.jsx)(`circle`,{cx:`-9`,cy:`-53`,r:`3`,fill:`white`}),(0,i.jsx)(`ellipse`,{cx:`16`,cy:`-52`,rx:`14`,ry:`16`,fill:`white`}),(0,i.jsx)(`circle`,{cx:`20`,cy:`-49`,r:`8`,fill:`rgb(15,15,55)`}),(0,i.jsx)(`circle`,{cx:`23`,cy:`-53`,r:`3`,fill:`white`}),(0,i.jsx)(`ellipse`,{cx:`-16`,cy:`-52`,rx:`14`,ry:`0`,fill:`url(#tnjJerryHead)`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;16;0`,keyTimes:`0;0.04;0.08`,dur:`3.5s`,repeatCount:`indefinite`,begin:`0.8s`})}),(0,i.jsx)(`ellipse`,{cx:`16`,cy:`-52`,rx:`14`,ry:`0`,fill:`url(#tnjJerryHead)`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;16;0`,keyTimes:`0;0.04;0.08`,dur:`3.5s`,repeatCount:`indefinite`,begin:`0.8s`})}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`-30`,rx:`6`,ry:`4.5`,fill:`rgb(255,80,180)`,filter:`url(#tnjPink)`}),(0,i.jsx)(`path`,{d:`M -10 -24 Q 0 -15 10 -24`,fill:`none`,stroke:`rgb(150,70,30)`,strokeWidth:`2`,strokeLinecap:`round`}),[[-10,-32,-55,-38],[-10,-28,-55,-28],[10,-32,55,-38],[10,-28,55,-28]].map(([e,t,n,r],a)=>(0,i.jsx)(`line`,{x1:e,y1:t,x2:n,y2:r,stroke:`rgb(255,80,180)`,strokeWidth:`1.5`,opacity:`0.8`},a)),(0,i.jsx)(`path`,{d:`M -43 30 Q -75 0 -62 -25`,fill:`none`,stroke:`url(#tnjJerryHead)`,strokeWidth:`12`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M -43 30 Q -75 0 -62 -25`,fill:`none`,stroke:`rgb(255,80,180)`,strokeWidth:`1.5`}),(0,i.jsx)(`path`,{d:`M 43 30 Q 70 5 60 -20`,fill:`none`,stroke:`url(#tnjJerryHead)`,strokeWidth:`12`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M 43 30 Q 70 5 60 -20`,fill:`none`,stroke:`rgb(255,80,180)`,strokeWidth:`1.5`}),(0,i.jsx)(`path`,{d:`M -20 104 Q -35 130 -20 152`,fill:`none`,stroke:`url(#tnjJerryHead)`,strokeWidth:`14`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M 20 104 Q 38 128 24 152`,fill:`none`,stroke:`url(#tnjJerryHead)`,strokeWidth:`14`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`-20`,cy:`155`,rx:`18`,ry:`9`,fill:`rgb(160,90,40)`,stroke:`rgb(255,80,180)`,strokeWidth:`1.5`}),(0,i.jsx)(`ellipse`,{cx:`24`,cy:`155`,rx:`18`,ry:`9`,fill:`rgb(160,90,40)`,stroke:`rgb(255,80,180)`,strokeWidth:`1.5`})]}),(0,i.jsx)(`text`,{x:`262`,y:`175`,textAnchor:`middle`,fontSize:`30`,fontWeight:`900`,fill:`rgb(255,211,0)`,filter:`url(#tnjGold)`,children:`VS`}),(0,i.jsx)(`animateTransform`,{xlinkHref:`tnj-vs`,attributeName:`transform`,type:`scale`,values:`1;1.15;1`,dur:`0.9s`,repeatCount:`indefinite`}),(0,i.jsxs)(`g`,{transform:`translate(370,155)`,children:[(0,i.jsx)(`polygon`,{points:`-50,-96 -74,-150 -18,-102`,fill:`url(#tnjTomHead)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#tnjCyan)`}),(0,i.jsx)(`polygon`,{points:`-46,-98 -62,-136 -24,-104`,fill:`rgba(200,215,240,0.7)`}),(0,i.jsx)(`polygon`,{points:`50,-96 74,-150 18,-102`,fill:`url(#tnjTomHead)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#tnjCyan)`}),(0,i.jsx)(`polygon`,{points:`46,-98 62,-136 24,-104`,fill:`rgba(200,215,240,0.7)`}),(0,i.jsx)(`circle`,{cx:`0`,cy:`-30`,r:`82`,fill:`url(#tnjTomHead)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`,filter:`url(#tnjCyan)`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`-8`,rx:`53`,ry:`57`,fill:`rgba(210,225,248,0.88)`}),(0,i.jsx)(`ellipse`,{cx:`-30`,cy:`-54`,rx:`21`,ry:`23`,fill:`white`}),(0,i.jsx)(`circle`,{cx:`-25`,cy:`-50`,r:`12`,fill:`rgb(20,80,20)`}),(0,i.jsx)(`circle`,{cx:`-21`,cy:`-55`,r:`4.5`,fill:`white`}),(0,i.jsx)(`line`,{x1:`-54`,y1:`-72`,x2:`-8`,y2:`-58`,stroke:`rgb(15,15,55)`,strokeWidth:`5`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`30`,cy:`-54`,rx:`21`,ry:`23`,fill:`white`}),(0,i.jsx)(`circle`,{cx:`25`,cy:`-50`,r:`12`,fill:`rgb(20,80,20)`}),(0,i.jsx)(`circle`,{cx:`29`,cy:`-55`,r:`4.5`,fill:`white`}),(0,i.jsx)(`line`,{x1:`54`,y1:`-72`,x2:`8`,y2:`-58`,stroke:`rgb(15,15,55)`,strokeWidth:`5`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`-30`,cy:`-54`,rx:`21`,ry:`0`,fill:`url(#tnjTomHead)`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;23;0`,keyTimes:`0;0.04;0.08`,dur:`4s`,repeatCount:`indefinite`,begin:`1.5s`})}),(0,i.jsx)(`ellipse`,{cx:`30`,cy:`-54`,rx:`21`,ry:`0`,fill:`url(#tnjTomHead)`,children:(0,i.jsx)(`animate`,{attributeName:`ry`,values:`0;23;0`,keyTimes:`0;0.04;0.08`,dur:`4s`,repeatCount:`indefinite`,begin:`1.5s`})}),(0,i.jsx)(`path`,{d:`M -13 -14 Q 0 -9 13 -14`,fill:`rgb(255,170,150)`,stroke:`rgb(180,80,60)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M -28 8 Q -14 2 0 6 Q 14 10 28 4`,fill:`none`,stroke:`rgb(80,40,30)`,strokeWidth:`2.5`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`-62`,cy:`-18`,rx:`18`,ry:`12`,fill:`rgba(255,160,160,0.3)`}),(0,i.jsx)(`ellipse`,{cx:`62`,cy:`-18`,rx:`18`,ry:`12`,fill:`rgba(255,160,160,0.3)`}),[[-18,-8,-95,-18],[-18,0,-95,0],[-18,8,-95,18],[18,-8,95,-18],[18,0,95,0],[18,8,95,18]].map(([e,t,n,r],a)=>(0,i.jsx)(`line`,{x1:e,y1:t,x2:n,y2:r,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`,opacity:`0.8`,filter:`url(#tnjCyan)`},a)),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`108`,rx:`86`,ry:`88`,fill:`url(#tnjTomHead)`,stroke:`rgb(0,245,255)`,strokeWidth:`2.5`}),(0,i.jsx)(`ellipse`,{cx:`0`,cy:`114`,rx:`52`,ry:`60`,fill:`rgba(190,210,240,0.6)`}),[[-32,58],[-16,68],[0,62],[16,68],[32,58]].map(([e,t],n)=>(0,i.jsx)(`path`,{d:`M ${e} ${t} Q ${e+5} ${t+32} ${e} ${t+58}`,fill:`none`,stroke:`rgba(50,80,125,0.35)`,strokeWidth:`3`},n)),(0,i.jsx)(`path`,{d:`M -86 80 Q -130 50 -120 20`,fill:`none`,stroke:`url(#tnjTomHead)`,strokeWidth:`18`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M -86 80 Q -130 50 -120 20`,fill:`none`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`ellipse`,{cx:`-122`,cy:`18`,rx:`20`,ry:`16`,fill:`url(#tnjTomHead)`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`path`,{d:`M -40 190 Q -55 220 -38 248`,fill:`none`,stroke:`url(#tnjTomHead)`,strokeWidth:`20`,strokeLinecap:`round`}),(0,i.jsx)(`path`,{d:`M 40 190 Q 58 218 42 248`,fill:`none`,stroke:`url(#tnjTomHead)`,strokeWidth:`20`,strokeLinecap:`round`}),(0,i.jsx)(`ellipse`,{cx:`-38`,cy:`252`,rx:`30`,ry:`14`,fill:`rgb(80,110,155)`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`}),(0,i.jsx)(`ellipse`,{cx:`42`,cy:`252`,rx:`30`,ry:`14`,fill:`rgb(80,110,155)`,stroke:`rgb(0,245,255)`,strokeWidth:`1.5`}),[[55,-80],[75,-68]].map(([e,t],n)=>(0,i.jsxs)(`text`,{x:e,y:t,fontSize:`18`,textAnchor:`middle`,fill:`rgb(255,211,0)`,filter:`url(#tnjGold)`,children:[`★`,(0,i.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${e} ${t};360 ${e} ${t}`,dur:`${.8+n*.3}s`,repeatCount:`indefinite`})]},n))]})]})}]}];function d(){let[e,t]=(0,r.useState)(`beginner`),n=u.find(t=>t.id===e);return(0,i.jsxs)(`div`,{className:`svg-lab`,children:[(0,i.jsx)(`header`,{className:`svg-lab__header`,children:(0,i.jsxs)(`div`,{className:`svg-lab__header-inner`,children:[(0,i.jsxs)(`h1`,{className:`svg-lab__title`,children:[(0,i.jsx)(`span`,{className:`svg-lab__title-svg`,style:{color:`rgb(0,245,255)`},children:`SVG`}),(0,i.jsx)(`span`,{className:`svg-lab__title-exercises`,style:{color:`rgb(255,0,255)`},children:`Exercises`}),(0,i.jsx)(`span`,{className:`svg-lab__title-lab`,style:{color:`rgb(57,255,20)`},children:`Lab`})]}),(0,i.jsx)(`p`,{className:`svg-lab__subtitle`,children:`Beginner → Advanced → 3D Charts → Cartoons · neon colors · React TypeScript + SCSS`})]})}),(0,i.jsx)(`nav`,{className:`svg-lab__tabs`,children:u.map(n=>(0,i.jsxs)(`button`,{className:`svg-lab__tab ${e===n.id?`svg-lab__tab--active`:``}`,style:e===n.id?{borderColor:n.color,color:n.color,background:n.accentBg,boxShadow:`0 0 12px ${n.color}40`}:{},onClick:()=>t(n.id),children:[(0,i.jsx)(`span`,{children:n.emoji}),(0,i.jsx)(`span`,{children:n.label}),(0,i.jsx)(`span`,{className:`svg-lab__tab-count`,style:e===n.id?{background:n.color}:{},children:n.exercises.length})]},n.id))}),(0,i.jsxs)(`main`,{className:`svg-lab__content`,children:[(0,i.jsxs)(`div`,{className:`svg-lab__section-header`,style:{borderColor:`${n.color}40`},children:[(0,i.jsx)(`span`,{className:`svg-lab__section-emoji`,children:n.emoji}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{className:`svg-lab__section-title`,style:{color:n.color},children:n.label}),(0,i.jsxs)(`p`,{className:`svg-lab__section-desc`,children:[n.exercises.length,` exercises · click to expand · toggle preview / code`]})]})]}),(0,i.jsx)(`div`,{className:`svg-lab__exercises`,children:n.exercises.map(e=>(0,i.jsx)(o,{ex:e,color:n.color,accentBg:n.accentBg},e.id))})]})]})}export{d as default};