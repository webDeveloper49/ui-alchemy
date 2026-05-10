import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{t as n}from"./react-BRPyh-lz.js";var r=e(n(),1),i=t(),a={background:`#0a0f1e`,borderRadius:12,padding:12,display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:200,border:`1px solid #1e293b`},o=[{id:`paths`,label:`Path Commands`,icon:`✏`,color:`#f97316`,demos:[{title:`M / L / H / V / Z — Line commands`,desc:`M moves the pen, L draws a line to absolute coordinates, H draws horizontal, V draws vertical. Z closes the path back to start.`,code:`<path
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
/>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 220 160`,width:`280`,height:`200`,children:[(0,i.jsx)(`path`,{d:`M 20 80 L 80 20 H 150 V 80 L 200 140 H 20 Z`,fill:`#4f46e5`,stroke:`#818cf8`,strokeWidth:`2`}),[{x:20,y:80,l:`M`},{x:80,y:20,l:`L`},{x:150,y:20,l:`H`},{x:150,y:80,l:`V`},{x:200,y:140,l:`L`},{x:20,y:140,l:`H`}].map((e,t)=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`circle`,{cx:e.x,cy:e.y,r:`4`,fill:`#f472b6`}),(0,i.jsxs)(`text`,{x:e.x+6,y:e.y-4,fontSize:`9`,fill:`#f9a8d4`,children:[e.l,`(`,e.x,`,`,e.y,`)`]})]},t))]})},{title:`C — Cubic Bézier curve`,desc:`C x1 y1, x2 y2, x y — two control points shape the curve. The control point handles (tangents) control how the curve bends in and out.`,code:`<path
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
  strokeWidth="1.5" />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 200 150`,width:`280`,height:`210`,children:[(0,i.jsx)(`line`,{x1:`30`,y1:`120`,x2:`30`,y2:`30`,stroke:`#f97316`,strokeDasharray:`4 3`,strokeWidth:`1.5`}),(0,i.jsx)(`line`,{x1:`170`,y1:`120`,x2:`170`,y2:`30`,stroke:`#f97316`,strokeDasharray:`4 3`,strokeWidth:`1.5`}),(0,i.jsx)(`path`,{d:`M 30 120 C 30 30, 170 30, 170 120`,fill:`none`,stroke:`#10b981`,strokeWidth:`3`}),[{x:30,y:30,c:`#f97316`,l:`CP1`},{x:170,y:30,c:`#f97316`,l:`CP2`}].map((e,t)=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`circle`,{cx:e.x,cy:e.y,r:`5`,fill:e.c}),(0,i.jsx)(`text`,{x:e.x+7,y:e.y+4,fontSize:`9`,fill:`#fdba74`,children:e.l})]},t)),[{x:30,y:120,l:`start`},{x:170,y:120,l:`end`}].map((e,t)=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`circle`,{cx:e.x,cy:e.y,r:`5`,fill:`#10b981`}),(0,i.jsx)(`text`,{x:e.x+7,y:e.y-4,fontSize:`9`,fill:`#6ee7b7`,children:e.l})]},t))]})},{title:`Q — Quadratic Bézier`,desc:`Q x1 y1, x y — one shared control point. Simpler than cubic. S and T commands let you chain smooth Béziers automatically.`,code:`<path
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
/>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 200 145`,width:`280`,height:`200`,children:[(0,i.jsx)(`line`,{x1:`20`,y1:`120`,x2:`100`,y2:`10`,stroke:`#6366f1`,strokeDasharray:`4 3`,strokeWidth:`1`}),(0,i.jsx)(`line`,{x1:`180`,y1:`120`,x2:`100`,y2:`10`,stroke:`#6366f1`,strokeDasharray:`4 3`,strokeWidth:`1`}),(0,i.jsx)(`path`,{d:`M 20 120 Q 100 10, 180 120`,fill:`none`,stroke:`#a78bfa`,strokeWidth:`3`}),(0,i.jsx)(`path`,{d:`M 20 80 Q 60 20, 100 80 T 180 80`,fill:`none`,stroke:`#f472b6`,strokeWidth:`2`}),(0,i.jsx)(`circle`,{cx:`100`,cy:`10`,r:`5`,fill:`#facc15`}),(0,i.jsx)(`text`,{x:`107`,y:`13`,fontSize:`9`,fill:`#fde68a`,children:`Q control point`}),(0,i.jsx)(`text`,{x:`55`,y:`97`,fontSize:`9`,fill:`#f9a8d4`,children:`T chained`})]})},{title:`A — Arc command`,desc:`A rx ry x-rotation large-arc-flag sweep-flag x y. The arc draws an ellipse section between two points. large-arc and sweep flags select which of 4 possible arcs to draw.`,code:`{/* sweep=0: counter-clockwise */}
<path d="M 50 100 A 60 40 0 0 0 150 100"
  fill="none" stroke="#f97316" strokeWidth="2"/>

{/* sweep=1: clockwise */}
<path d="M 50 100 A 60 40 0 0 1 150 100"
  fill="none" stroke="#10b981" strokeWidth="2"/>

{/* large-arc=1: the longer arc */}
<path d="M 50 100 A 60 40 0 1 0 150 100"
  fill="none" stroke="#a78bfa" strokeWidth="2"/>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 200 155`,width:`280`,height:`210`,children:[(0,i.jsx)(`path`,{d:`M 50 100 A 60 40 0 0 0 150 100`,fill:`none`,stroke:`#f97316`,strokeWidth:`2.5`}),(0,i.jsx)(`path`,{d:`M 50 100 A 60 40 0 0 1 150 100`,fill:`none`,stroke:`#10b981`,strokeWidth:`2.5`}),(0,i.jsx)(`path`,{d:`M 50 100 A 60 40 0 1 0 150 100`,fill:`none`,stroke:`#a78bfa`,strokeWidth:`2.5`}),(0,i.jsx)(`path`,{d:`M 50 100 A 60 40 0 1 1 150 100`,fill:`none`,stroke:`#f472b6`,strokeWidth:`2.5`}),(0,i.jsx)(`circle`,{cx:`50`,cy:`100`,r:`4`,fill:`white`}),(0,i.jsx)(`circle`,{cx:`150`,cy:`100`,r:`4`,fill:`white`}),[{c:`#f97316`,l:`sweep=0, large=0`,y:145},{c:`#10b981`,l:`sweep=1, large=0`,y:155},{c:`#a78bfa`,l:`sweep=0, large=1`,y:165},{c:`#f472b6`,l:`sweep=1, large=1`,y:175}].map((e,t)=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`rect`,{x:`10`,y:e.y-8,width:`8`,height:`8`,fill:e.c,rx:`1`}),(0,i.jsx)(`text`,{x:`21`,y:e.y,fontSize:`8`,fill:`#94a3b8`,children:e.l})]},t))]})}]},{id:`coords`,label:`Coordinate Systems`,icon:`⊞`,color:`#818cf8`,demos:[{title:`viewBox & preserveAspectRatio`,desc:`viewBox='minX minY width height' sets the internal coordinate space. preserveAspectRatio controls alignment when the SVG aspect ratio differs from the viewport.`,code:`{/* viewBox: internal coords 0-200 x 0-100 */}
<svg width="300" height="150"
  viewBox="0 0 200 100"
  preserveAspectRatio="xMidYMid meet">

  {/* This circle at cx=100 cy=50 r=40 */}
  {/* auto-scales to fit the viewport   */}
  <circle cx="100" cy="50" r="40"
    fill="#4f46e5" />
</svg>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 320 200`,width:`300`,height:`190`,children:[(0,i.jsx)(`rect`,{x:`5`,y:`5`,width:`310`,height:`190`,fill:`none`,stroke:`#334155`,strokeWidth:`1`,rx:`4`}),(0,i.jsx)(`text`,{x:`10`,y:`22`,fontSize:`9`,fill:`#64748b`,children:`viewport: 300×150`}),(0,i.jsxs)(`svg`,{x:`5`,y:`30`,width:`310`,height:`150`,viewBox:`0 0 200 100`,preserveAspectRatio:`xMidYMid meet`,children:[(0,i.jsx)(`rect`,{x:`0`,y:`0`,width:`200`,height:`100`,fill:`#0f172a`}),(0,i.jsx)(`circle`,{cx:`100`,cy:`50`,r:`40`,fill:`#4f46e5`,opacity:`0.9`}),(0,i.jsx)(`text`,{x:`100`,y:`55`,textAnchor:`middle`,fontSize:`11`,fill:`#e0e7ff`,children:`viewBox`}),(0,i.jsx)(`rect`,{x:`0`,y:`0`,width:`200`,height:`100`,fill:`none`,stroke:`#334155`,strokeWidth:`1`,strokeDasharray:`4 3`}),(0,i.jsx)(`text`,{x:`2`,y:`9`,fontSize:`7`,fill:`#475569`,children:`0,0`}),(0,i.jsx)(`text`,{x:`170`,y:`98`,fontSize:`7`,fill:`#475569`,children:`200,100`})]})]})},{title:`Nested SVGs & coordinate spaces`,desc:`You can nest <svg> inside <svg>. Each nested SVG creates its own coordinate system with its own viewBox — great for reusable sub-components.`,code:`<svg width="300" height="200" viewBox="0 0 300 200">
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
</svg>`,svg:()=>(0,i.jsxs)(`svg`,{width:`280`,height:`180`,viewBox:`0 0 300 200`,children:[(0,i.jsx)(`rect`,{width:`300`,height:`200`,fill:`#1e1b4b`,rx:`8`}),(0,i.jsx)(`text`,{x:`10`,y:`20`,fontSize:`9`,fill:`#4c1d95`,children:`outer SVG (300×200)`}),(0,i.jsx)(`rect`,{x:`50`,y:`40`,width:`200`,height:`120`,fill:`none`,stroke:`#7c3aed`,strokeDasharray:`5 3`,strokeWidth:`1.5`}),(0,i.jsxs)(`svg`,{x:`50`,y:`40`,width:`200`,height:`120`,viewBox:`0 0 100 60`,children:[(0,i.jsx)(`rect`,{width:`100`,height:`60`,fill:`#2e1065`}),(0,i.jsx)(`circle`,{cx:`50`,cy:`30`,r:`26`,fill:`#7c3aed`}),(0,i.jsx)(`text`,{x:`50`,y:`28`,textAnchor:`middle`,fontSize:`9`,fill:`white`,children:`inner SVG`}),(0,i.jsx)(`text`,{x:`50`,y:`40`,textAnchor:`middle`,fontSize:`7`,fill:`#c4b5fd`,children:`viewBox 0 0 100 60`})]}),(0,i.jsx)(`text`,{x:`55`,y:`38`,fontSize:`8`,fill:`#7c3aed`,children:`x=50, y=40`})]})},{title:`transform — translate, rotate, scale, skew, matrix`,desc:`SVG elements support transform attribute with 6 functions. Transforms compose (multiply) — order matters! Applied right to left.`,code:`{/* translate: move */}
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
</g>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 300 200`,width:`300`,height:`200`,children:[(0,i.jsxs)(`g`,{transform:`translate(30, 90)`,children:[(0,i.jsx)(`rect`,{x:`0`,y:`-20`,width:`40`,height:`40`,fill:`#f97316`,opacity:`0.3`,rx:`4`}),(0,i.jsx)(`rect`,{x:`0`,y:`-20`,width:`40`,height:`40`,fill:`#f97316`,rx:`4`,transform:`translate(10,10)`}),(0,i.jsx)(`text`,{x:`0`,y:`32`,fontSize:`9`,fill:`#fdba74`,children:`translate`})]}),(0,i.jsxs)(`g`,{transform:`translate(115, 90)`,children:[(0,i.jsx)(`rect`,{x:`-20`,y:`-20`,width:`40`,height:`40`,fill:`#10b981`,opacity:`0.3`,rx:`4`}),(0,i.jsx)(`rect`,{x:`-20`,y:`-20`,width:`40`,height:`40`,fill:`#10b981`,rx:`4`,transform:`rotate(35 0 0)`}),(0,i.jsx)(`text`,{x:`-18`,y:`32`,fontSize:`9`,fill:`#6ee7b7`,children:`rotate`})]}),(0,i.jsxs)(`g`,{transform:`translate(195, 90)`,children:[(0,i.jsx)(`rect`,{x:`-15`,y:`-20`,width:`30`,height:`40`,fill:`#a78bfa`,opacity:`0.3`,rx:`4`}),(0,i.jsx)(`rect`,{x:`-15`,y:`-20`,width:`30`,height:`40`,fill:`#a78bfa`,rx:`4`,transform:`scale(1 0.6)`}),(0,i.jsx)(`text`,{x:`-10`,y:`32`,fontSize:`9`,fill:`#c4b5fd`,children:`scale`})]}),(0,i.jsxs)(`g`,{transform:`translate(255, 90)`,children:[(0,i.jsx)(`rect`,{x:`-15`,y:`-20`,width:`30`,height:`40`,fill:`#f472b6`,opacity:`0.3`,rx:`4`}),(0,i.jsx)(`rect`,{x:`-15`,y:`-20`,width:`30`,height:`40`,fill:`#f472b6`,rx:`4`,transform:`skewX(20)`}),(0,i.jsx)(`text`,{x:`-10`,y:`32`,fontSize:`9`,fill:`#f9a8d4`,children:`skew`})]}),(0,i.jsx)(`text`,{x:`150`,y:`160`,textAnchor:`middle`,fontSize:`10`,fill:`#94a3b8`,children:`orange = before · color = after transform`})]})}]},{id:`gradients`,label:`Gradients`,icon:`◐`,color:`#f472b6`,demos:[{title:`linearGradient — stops, units, gradientTransform`,desc:`gradientUnits='userSpaceOnUse' pins coordinates to the SVG canvas; 'objectBoundingBox' (default) uses 0–1 relative to the shape. gradientTransform rotates/skews.`,code:`<defs>
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
<rect fill="url(#lg2)" ... />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`linearGradient`,{id:`adv-lg1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#e11d48`}),(0,i.jsx)(`stop`,{offset:`50%`,stopColor:`#7c3aed`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#0ea5e9`})]}),(0,i.jsxs)(`linearGradient`,{id:`adv-lg2`,gradientTransform:`rotate(45)`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#f59e0b`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#10b981`})]}),(0,i.jsxs)(`linearGradient`,{id:`adv-lg3`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#1e293b`}),(0,i.jsx)(`stop`,{offset:`40%`,stopColor:`#6366f1`}),(0,i.jsx)(`stop`,{offset:`70%`,stopColor:`#ec4899`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`})]})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`250`,height:`44`,rx:`8`,fill:`url(#adv-lg1)`}),(0,i.jsx)(`text`,{x:`135`,y:`37`,textAnchor:`middle`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`horizontal`}),(0,i.jsx)(`rect`,{x:`10`,y:`64`,width:`250`,height:`44`,rx:`8`,fill:`url(#adv-lg2)`}),(0,i.jsx)(`text`,{x:`135`,y:`91`,textAnchor:`middle`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`rotated 45°`}),(0,i.jsx)(`rect`,{x:`10`,y:`118`,width:`250`,height:`44`,rx:`8`,fill:`url(#adv-lg3)`}),(0,i.jsx)(`text`,{x:`135`,y:`145`,textAnchor:`middle`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`multi-stop diagonal`})]})},{title:`radialGradient — cx, cy, r, fx, fy (focal point)`,desc:`cx/cy sets the gradient center, r is the radius. fx/fy is the focal point — shifting it off-center creates a 3D sphere effect.`,code:`<defs>
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
  fill="url(#rg-sphere)" />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`radialGradient`,{id:`adv-rg1`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#a78bfa`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#1e1b4b`})]}),(0,i.jsxs)(`radialGradient`,{id:`adv-rg2`,cx:`35%`,cy:`35%`,r:`60%`,fx:`30%`,fy:`30%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#fde68a`}),(0,i.jsx)(`stop`,{offset:`60%`,stopColor:`#f97316`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#7c2d12`})]}),(0,i.jsxs)(`radialGradient`,{id:`adv-rg3`,cx:`50%`,cy:`100%`,r:`80%`,fx:`50%`,fy:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#6ee7b7`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#064e3b`})]})]}),(0,i.jsx)(`circle`,{cx:`60`,cy:`90`,r:`55`,fill:`url(#adv-rg1)`}),(0,i.jsx)(`text`,{x:`60`,y:`156`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`center focal`}),(0,i.jsx)(`circle`,{cx:`170`,cy:`90`,r:`55`,fill:`url(#adv-rg2)`}),(0,i.jsx)(`text`,{x:`170`,y:`156`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`off-center focal`}),(0,i.jsx)(`circle`,{cx:`252`,cy:`90`,r:`28`,fill:`url(#adv-rg3)`}),(0,i.jsx)(`text`,{x:`252`,y:`130`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`bottom focal`})]})},{title:`spreadMethod — pad, reflect, repeat`,desc:`Controls what happens outside the gradient region. 'pad' extends last stop, 'reflect' mirrors back and forth, 'repeat' tiles.`,code:`<linearGradient id="lg-repeat"
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
</linearGradient>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 175`,width:`280`,height:`175`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`linearGradient`,{id:`adv-pad`,x1:`0%`,y1:`0%`,x2:`25%`,y2:`0%`,spreadMethod:`pad`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#4f46e5`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#06b6d4`})]}),(0,i.jsxs)(`linearGradient`,{id:`adv-reflect`,x1:`0%`,y1:`0%`,x2:`25%`,y2:`0%`,spreadMethod:`reflect`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#4f46e5`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#06b6d4`})]}),(0,i.jsxs)(`linearGradient`,{id:`adv-repeat`,x1:`0%`,y1:`0%`,x2:`25%`,y2:`0%`,spreadMethod:`repeat`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#4f46e5`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#06b6d4`})]})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`260`,height:`40`,rx:`6`,fill:`url(#adv-pad)`}),(0,i.jsx)(`text`,{x:`140`,y:`34`,textAnchor:`middle`,fontSize:`11`,fill:`white`,children:`pad (default)`}),(0,i.jsx)(`rect`,{x:`10`,y:`65`,width:`260`,height:`40`,rx:`6`,fill:`url(#adv-reflect)`}),(0,i.jsx)(`text`,{x:`140`,y:`89`,textAnchor:`middle`,fontSize:`11`,fill:`white`,children:`reflect`}),(0,i.jsx)(`rect`,{x:`10`,y:`120`,width:`260`,height:`40`,rx:`6`,fill:`url(#adv-repeat)`}),(0,i.jsx)(`text`,{x:`140`,y:`144`,textAnchor:`middle`,fontSize:`11`,fill:`white`,children:`repeat`})]})}]},{id:`patterns`,label:`Patterns`,icon:`⊟`,color:`#fbbf24`,demos:[{title:`Basic pattern — patternUnits`,desc:`patternUnits='userSpaceOnUse' uses SVG coords for size. 'objectBoundingBox' (0–1) scales with the shape. patternTransform rotates/scales the tile.`,code:`<defs>
  <pattern id="dots"
    x="0" y="0"
    width="20" height="20"
    patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="4"
      fill="#6366f1"/>
  </pattern>
</defs>
<rect width="200" height="120"
  fill="url(#dots)" />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 170`,width:`280`,height:`170`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`pattern`,{id:`adv-dots`,x:`0`,y:`0`,width:`20`,height:`20`,patternUnits:`userSpaceOnUse`,children:(0,i.jsx)(`circle`,{cx:`10`,cy:`10`,r:`4`,fill:`#6366f1`})}),(0,i.jsx)(`pattern`,{id:`adv-stripes`,x:`0`,y:`0`,width:`16`,height:`16`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`,children:(0,i.jsx)(`rect`,{width:`8`,height:`16`,fill:`#10b981`})}),(0,i.jsxs)(`pattern`,{id:`adv-grid`,x:`0`,y:`0`,width:`20`,height:`20`,patternUnits:`userSpaceOnUse`,children:[(0,i.jsx)(`rect`,{width:`20`,height:`20`,fill:`none`,stroke:`#f97316`,strokeWidth:`0.5`}),(0,i.jsx)(`rect`,{width:`10`,height:`10`,fill:`#f97316`,opacity:`0.15`})]})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`80`,height:`70`,rx:`6`,fill:`url(#adv-dots)`}),(0,i.jsx)(`text`,{x:`50`,y:`94`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`dots`}),(0,i.jsx)(`rect`,{x:`100`,y:`10`,width:`80`,height:`70`,rx:`6`,fill:`url(#adv-stripes)`}),(0,i.jsx)(`text`,{x:`140`,y:`94`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`diagonal stripes`}),(0,i.jsx)(`rect`,{x:`190`,y:`10`,width:`80`,height:`70`,rx:`6`,fill:`url(#adv-grid)`}),(0,i.jsx)(`text`,{x:`230`,y:`94`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`grid`})]})},{title:`Complex patterns — nesting & SVG shapes as tiles`,desc:`Patterns can contain any SVG — paths, text, gradients, even other patterns. Combine with patternTransform for rich textures.`,code:`<defs>
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
  fill="url(#hex)" />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 150`,width:`280`,height:`150`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`pattern`,{id:`adv-hex`,width:`36`,height:`42`,patternUnits:`userSpaceOnUse`,children:(0,i.jsx)(`polygon`,{points:`18,1 33,10 33,31 18,40 3,31 3,10`,fill:`#1e1b4b`,stroke:`#7c3aed`,strokeWidth:`1.5`})}),(0,i.jsx)(`pattern`,{id:`adv-hextile`,width:`36`,height:`42`,patternUnits:`userSpaceOnUse`,x:`18`,y:`21`,children:(0,i.jsx)(`polygon`,{points:`18,1 33,10 33,31 18,40 3,31 3,10`,fill:`#1e1b4b`,stroke:`#4f46e5`,strokeWidth:`1`})})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`260`,height:`130`,rx:`8`,fill:`url(#adv-hex)`}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`260`,height:`130`,rx:`8`,fill:`url(#adv-hextile)`})]})}]},{id:`clip`,label:`Clip & Mask`,icon:`⚄`,color:`#10b981`,demos:[{title:`clipPath — hard-edged clipping`,desc:`clipPath masks content with binary transparency — pixels are either fully visible or fully hidden. The clipping shape can be any SVG element.`,code:`<defs>
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
  width="200" height="200" />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 185`,width:`280`,height:`185`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`linearGradient`,{id:`adv-clip-g`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`}),(0,i.jsx)(`stop`,{offset:`50%`,stopColor:`#ec4899`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#8b5cf6`})]}),(0,i.jsx)(`clipPath`,{id:`adv-clip-star`,children:(0,i.jsx)(`polygon`,{points:`100,10 118,60 172,60 128,90 145,140 100,110 55,140 72,90 28,60 82,60`})}),(0,i.jsx)(`clipPath`,{id:`adv-clip-text`,children:(0,i.jsx)(`text`,{x:`200`,y:`100`,fontSize:`52`,fontWeight:`900`,textAnchor:`middle`,children:`SVG`})})]}),(0,i.jsx)(`rect`,{x:`28`,y:`10`,width:`144`,height:`144`,fill:`url(#adv-clip-g)`,clipPath:`url(#adv-clip-star)`}),(0,i.jsx)(`polygon`,{points:`100,10 118,60 172,60 128,90 145,140 100,110 55,140 72,90 28,60 82,60`,fill:`none`,stroke:`#f97316`,strokeWidth:`1`,strokeDasharray:`3 3`}),(0,i.jsx)(`rect`,{x:`145`,y:`30`,width:`120`,height:`110`,fill:`url(#adv-clip-g)`,clipPath:`url(#adv-clip-text)`}),(0,i.jsx)(`text`,{x:`205`,y:`175`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`text clipPath`}),(0,i.jsx)(`text`,{x:`100`,y:`175`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:`star clipPath`})]})},{title:`mask — alpha/luminance masking`,desc:`mask uses the luminance (brightness) of the mask shape for transparency — white = fully visible, black = fully hidden, gray = partial. Much more flexible than clipPath.`,code:`<defs>
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
  href="./photo.jpg" ... />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`linearGradient`,{id:`adv-mask-g1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#e11d48`}),(0,i.jsx)(`stop`,{offset:`50%`,stopColor:`#7c3aed`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#0ea5e9`})]}),(0,i.jsxs)(`linearGradient`,{id:`adv-mfade`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`white`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`black`})]}),(0,i.jsx)(`mask`,{id:`adv-mask-fade`,children:(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`260`,height:`80`,fill:`url(#adv-mfade)`})}),(0,i.jsxs)(`radialGradient`,{id:`adv-mask-rg`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`white`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`black`})]}),(0,i.jsx)(`mask`,{id:`adv-mask-radial`,children:(0,i.jsx)(`rect`,{x:`10`,y:`100`,width:`260`,height:`70`,fill:`url(#adv-mask-rg)`})})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`260`,height:`80`,rx:`6`,fill:`url(#adv-mask-g1)`,mask:`url(#adv-mask-fade)`}),(0,i.jsx)(`text`,{x:`60`,y:`58`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`Horizontal fade mask`}),(0,i.jsx)(`rect`,{x:`10`,y:`100`,width:`260`,height:`70`,rx:`6`,fill:`url(#adv-mask-g1)`,mask:`url(#adv-mask-radial)`}),(0,i.jsx)(`text`,{x:`140`,y:`140`,textAnchor:`middle`,fontSize:`11`,fill:`white`,fontWeight:`bold`,children:`Radial fade mask`})]})}]},{id:`text`,label:`Text & textPath`,icon:`T`,color:`#a78bfa`,demos:[{title:`textPath — text on a curve`,desc:`Place text along any SVG path using <textPath href='#path-id'>. startOffset controls where text begins (0%–100% of path length).`,code:`<defs>
  <path id="arc-path"
    d="M 20 120 A 100 80 0 0 1 230 120"
    fill="none"/>
</defs>
<text fontSize="14" fill="#a78bfa">
  <textPath href="#arc-path"
    startOffset="10%">
    Text flowing along a curved path!
  </textPath>
</text>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 260 200`,width:`280`,height:`200`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`path`,{id:`adv-arc-path`,d:`M 20 140 A 110 90 0 0 1 240 140`}),(0,i.jsx)(`path`,{id:`adv-wave-path`,d:`M 10 100 Q 65 40, 130 100 T 250 100`}),(0,i.jsx)(`path`,{id:`adv-circle-path`,d:`M 130 170 A 60 60 0 1 1 129.9 170`})]}),(0,i.jsx)(`path`,{d:`M 20 140 A 110 90 0 0 1 240 140`,fill:`none`,stroke:`#334155`,strokeDasharray:`3 3`,strokeWidth:`1`}),(0,i.jsx)(`text`,{fontSize:`12`,fill:`#a78bfa`,fontWeight:`bold`,children:(0,i.jsx)(`textPath`,{href:`#adv-arc-path`,startOffset:`5%`,children:`Text on an arc path — textPath!`})}),(0,i.jsx)(`path`,{d:`M 10 100 Q 65 40, 130 100 T 250 100`,fill:`none`,stroke:`#334155`,strokeDasharray:`3 3`,strokeWidth:`1`}),(0,i.jsx)(`text`,{fontSize:`10`,fill:`#f472b6`,children:(0,i.jsx)(`textPath`,{href:`#adv-wave-path`,startOffset:`2%`,children:`Flowing on a wave  ~  `})}),(0,i.jsx)(`path`,{d:`M 130 170 A 60 60 0 1 1 129.9 170`,fill:`none`,stroke:`#334155`,strokeDasharray:`3 3`,strokeWidth:`1`}),(0,i.jsx)(`text`,{fontSize:`9`,fill:`#10b981`,children:(0,i.jsx)(`textPath`,{href:`#adv-circle-path`,startOffset:`0%`,children:`◆ Circular text going around ◆ `})})]})},{title:`tspan — inline text formatting`,desc:`tspan lets you apply styles (fill, fontSize, fontWeight) and positioning (dx, dy, x, y) to spans of text within a <text> element — like a styled <span> in HTML.`,code:`<text x="20" y="40" fontSize="16">
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
</text>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsxs)(`text`,{x:`15`,y:`40`,fontSize:`16`,fill:`#e2e8f0`,children:[`Normal`,(0,i.jsx)(`tspan`,{fill:`#f97316`,fontWeight:`bold`,children:` bold orange`}),(0,i.jsx)(`tspan`,{fill:`#a78bfa`,children:` purple`})]}),(0,i.jsxs)(`text`,{x:`15`,y:`75`,fontSize:`13`,fill:`#94a3b8`,children:[`Line one with`,(0,i.jsx)(`tspan`,{dy:`22`,x:`15`,fill:`#10b981`,fontSize:`15`,fontWeight:`bold`,children:` dy shifts down`}),(0,i.jsx)(`tspan`,{dy:`22`,x:`15`,fill:`#f472b6`,fontSize:`12`,textDecoration:`underline`,children:` underlined on next line`})]}),(0,i.jsxs)(`text`,{x:`15`,y:`155`,fontSize:`28`,fontWeight:`900`,children:[(0,i.jsx)(`tspan`,{fill:`#f97316`,children:`S`}),(0,i.jsx)(`tspan`,{fill:`#facc15`,children:`V`}),(0,i.jsx)(`tspan`,{fill:`#10b981`,children:`G`}),(0,i.jsx)(`tspan`,{fill:`#818cf8`,dx:`8`,fontSize:`14`,dy:`-8`,children:`advanced`})]})]})}]},{id:`symbols`,label:`Symbols & Use`,icon:`⊕`,color:`#34d399`,demos:[{title:`symbol + use — SVG component system`,desc:`Define a shape once in <symbol> inside <defs>, then stamp it anywhere with <use>. Each use instance can have different position, size, color (via currentColor), and transform.`,code:`<defs>
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
  color="#a78bfa"/>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`symbol`,{id:`adv-star`,viewBox:`0 0 24 24`,children:(0,i.jsx)(`polygon`,{points:`12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9`,fill:`currentColor`})}),(0,i.jsx)(`symbol`,{id:`adv-heart`,viewBox:`0 0 24 24`,children:(0,i.jsx)(`path`,{d:`M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z`,fill:`currentColor`})}),(0,i.jsx)(`symbol`,{id:`adv-hex-sym`,viewBox:`0 0 24 24`,children:(0,i.jsx)(`polygon`,{points:`12,2 21,7 21,17 12,22 3,17 3,7`,fill:`currentColor`})})]}),[{id:`adv-star`,colors:[`#f97316`,`#facc15`,`#fde68a`],y:20,sizes:[36,50,28]},{id:`adv-heart`,colors:[`#f43f5e`,`#fb7185`,`#fda4af`],y:90,sizes:[32,46,24]},{id:`adv-hex-sym`,colors:[`#818cf8`,`#a78bfa`,`#c4b5fd`],y:150,sizes:[30,42,22]}].map((e,t)=>{let n=15;return e.colors.map((r,a)=>{let o=(0,i.jsx)(`use`,{href:`#${e.id}`,x:n,y:e.y,width:e.sizes[a],height:e.sizes[a],color:r},`${t}-${a}`);return n+=e.sizes[a]+10,o})}),(0,i.jsx)(`text`,{x:`200`,y:`50`,fontSize:`11`,fill:`#64748b`,children:`Same symbol`}),(0,i.jsx)(`text`,{x:`200`,y:`64`,fontSize:`11`,fill:`#64748b`,children:`different`}),(0,i.jsx)(`text`,{x:`200`,y:`78`,fontSize:`11`,fill:`#64748b`,children:`size + color`})]})}]},{id:`markers`,label:`Markers`,icon:`→`,color:`#fb923c`,demos:[{title:`marker — arrowheads and custom line decorations`,desc:`Markers attach shapes to the start, mid, or end of a stroke. Define in <defs>, then apply via marker-start, marker-mid, marker-end attributes.`,code:`<defs>
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
  marker-end="url(#arrow)" .../>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 200`,width:`280`,height:`200`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`marker`,{id:`adv-arrow`,viewBox:`0 0 10 10`,refX:`9`,refY:`5`,markerWidth:`6`,markerHeight:`6`,orient:`auto-start-reverse`,children:(0,i.jsx)(`path`,{d:`M 0 0 L 10 5 L 0 10 z`,fill:`#f97316`})}),(0,i.jsx)(`marker`,{id:`adv-arrow-blue`,viewBox:`0 0 10 10`,refX:`9`,refY:`5`,markerWidth:`6`,markerHeight:`6`,orient:`auto-start-reverse`,children:(0,i.jsx)(`path`,{d:`M 0 0 L 10 5 L 0 10 z`,fill:`#818cf8`})}),(0,i.jsx)(`marker`,{id:`adv-dot`,viewBox:`0 0 10 10`,refX:`5`,refY:`5`,markerWidth:`5`,markerHeight:`5`,children:(0,i.jsx)(`circle`,{cx:`5`,cy:`5`,r:`4`,fill:`#10b981`})}),(0,i.jsx)(`marker`,{id:`adv-square`,viewBox:`0 0 10 10`,refX:`5`,refY:`5`,markerWidth:`5`,markerHeight:`5`,children:(0,i.jsx)(`rect`,{x:`1`,y:`1`,width:`8`,height:`8`,fill:`#f472b6`,rx:`2`})})]}),(0,i.jsx)(`line`,{x1:`20`,y1:`30`,x2:`250`,y2:`30`,stroke:`#f97316`,strokeWidth:`2`,markerEnd:`url(#adv-arrow)`}),(0,i.jsx)(`text`,{x:`15`,y:`52`,fontSize:`9`,fill:`#64748b`,children:`marker-end (arrowhead)`}),(0,i.jsx)(`line`,{x1:`20`,y1:`80`,x2:`250`,y2:`80`,stroke:`#818cf8`,strokeWidth:`2`,markerStart:`url(#adv-arrow-blue)`,markerEnd:`url(#adv-arrow-blue)`}),(0,i.jsx)(`text`,{x:`15`,y:`100`,fontSize:`9`,fill:`#64748b`,children:`marker-start + marker-end (double arrow)`}),(0,i.jsx)(`polyline`,{points:`20,140 90,115 160,140 230,115 260,140`,fill:`none`,stroke:`#10b981`,strokeWidth:`2`,markerStart:`url(#adv-dot)`,markerMid:`url(#adv-dot)`,markerEnd:`url(#adv-dot)`}),(0,i.jsx)(`text`,{x:`15`,y:`163`,fontSize:`9`,fill:`#64748b`,children:`marker-mid (dots at each vertex)`}),(0,i.jsx)(`path`,{d:`M 20 185 Q 140 150 260 185`,fill:`none`,stroke:`#f472b6`,strokeWidth:`2`,markerEnd:`url(#adv-square)`,markerStart:`url(#adv-dot)`}),(0,i.jsx)(`text`,{x:`15`,y:`200`,fontSize:`9`,fill:`#64748b`,children:`curved path with mixed markers`})]})}]},{id:`strokes`,label:`Stroke Techniques`,icon:`—`,color:`#38bdf8`,demos:[{title:`stroke-dasharray & stroke-dashoffset`,desc:`dasharray='dash gap' creates dashed lines. Animating dashoffset from path-length to 0 creates the popular 'draw-on' effect.`,code:`{/* fixed dashes */}
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
  strokeWidth="3"/>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 200`,width:`280`,height:`200`,children:[(0,i.jsx)(`style`,{children:`
          @keyframes advDraw { to { stroke-dashoffset: 0; } }
          .adv-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: advDraw 2.5s ease infinite; }
          @keyframes advDash { to { stroke-dashoffset: -30; } }
          .adv-march { animation: advDash 0.8s linear infinite; }
        `}),(0,i.jsx)(`line`,{x1:`15`,y1:`25`,x2:`265`,y2:`25`,stroke:`#6366f1`,strokeWidth:`3`,strokeDasharray:`4 4`}),(0,i.jsx)(`text`,{x:`15`,y:`42`,fontSize:`9`,fill:`#64748b`,children:`dasharray: 4 4 (equal)`}),(0,i.jsx)(`line`,{x1:`15`,y1:`60`,x2:`265`,y2:`60`,stroke:`#f97316`,strokeWidth:`3`,strokeDasharray:`12 4`}),(0,i.jsx)(`text`,{x:`15`,y:`77`,fontSize:`9`,fill:`#64748b`,children:`dasharray: 12 4 (long dash)`}),(0,i.jsx)(`line`,{x1:`15`,y1:`95`,x2:`265`,y2:`95`,stroke:`#10b981`,strokeWidth:`3`,strokeDasharray:`2 8`}),(0,i.jsx)(`text`,{x:`15`,y:`112`,fontSize:`9`,fill:`#64748b`,children:`dasharray: 2 8 (dotted)`}),(0,i.jsx)(`line`,{x1:`15`,y1:`130`,x2:`265`,y2:`130`,stroke:`#f472b6`,strokeWidth:`3`,strokeDasharray:`15 4 4 4`,className:`adv-march`}),(0,i.jsx)(`text`,{x:`15`,y:`147`,fontSize:`9`,fill:`#64748b`,children:`marching ants (animated offset)`}),(0,i.jsx)(`path`,{d:`M 15 175 C 80 130 200 130 265 175`,fill:`none`,stroke:`#a78bfa`,strokeWidth:`3`,className:`adv-draw`}),(0,i.jsx)(`text`,{x:`15`,y:`198`,fontSize:`9`,fill:`#64748b`,children:`draw-on animation (dashoffset 600→0)`})]})},{title:`stroke-linecap & stroke-linejoin`,desc:`linecap controls how line ends look (butt/round/square). linejoin controls corners (miter/round/bevel). These are crucial for icon design.`,code:`{/* linecap */}
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
  strokeMiterlimit="2" .../>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 200`,width:`280`,height:`200`,children:[[{cap:`butt`,x:15,col:`#f97316`},{cap:`round`,x:105,col:`#10b981`},{cap:`square`,x:195,col:`#818cf8`}].map(e=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`line`,{x1:e.x,y1:`30`,x2:e.x+60,y2:`30`,stroke:e.col,strokeWidth:`12`,strokeLinecap:e.cap}),(0,i.jsx)(`line`,{x1:e.x,y1:`30`,x2:e.x+60,y2:`30`,stroke:`white`,strokeWidth:`1`,strokeDasharray:`2 2`}),(0,i.jsx)(`text`,{x:e.x+30,y:`55`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:e.cap})]},e.cap)),(0,i.jsx)(`text`,{x:`10`,y:`76`,fontSize:`9`,fill:`#64748b`,children:`stroke-linecap ↑`}),[{join:`miter`,x:25,col:`#f472b6`},{join:`round`,x:115,col:`#fbbf24`},{join:`bevel`,x:205,col:`#34d399`}].map(e=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`polyline`,{points:`${e.x},150 ${e.x+30},95 ${e.x+60},150`,fill:`none`,stroke:e.col,strokeWidth:`10`,strokeLinejoin:e.join}),(0,i.jsx)(`text`,{x:e.x+30,y:`172`,textAnchor:`middle`,fontSize:`9`,fill:`#94a3b8`,children:e.join})]},e.join)),(0,i.jsx)(`text`,{x:`10`,y:`195`,fontSize:`9`,fill:`#64748b`,children:`stroke-linejoin ↑`})]})}]},{id:`anim`,label:`Animations`,icon:`▶`,color:`#e879f9`,demos:[{title:`SMIL animate — attribute animation`,desc:`The <animate> element animates any SVG attribute over time. attributeName targets the property, values lists keyframes, keyTimes syncs them, calcMode sets easing.`,code:`{/* animate fill color */}
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
</circle>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsx)(`circle`,{cx:`50`,cy:`90`,r:`30`,children:(0,i.jsx)(`animate`,{attributeName:`fill`,values:`#f97316;#a78bfa;#10b981;#f97316`,keyTimes:`0;0.33;0.66;1`,dur:`3s`,repeatCount:`indefinite`})}),(0,i.jsx)(`text`,{x:`50`,y:`135`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`fill`}),(0,i.jsxs)(`circle`,{cx:`150`,cy:`90`,r:`25`,fill:`#f472b6`,children:[(0,i.jsx)(`animate`,{attributeName:`r`,values:`20;38;20`,dur:`1.5s`,repeatCount:`indefinite`,calcMode:`spline`,keySplines:`0.4 0 0.6 1;0.4 0 0.6 1`}),(0,i.jsx)(`animate`,{attributeName:`opacity`,values:`1;0.5;1`,dur:`1.5s`,repeatCount:`indefinite`})]}),(0,i.jsx)(`text`,{x:`150`,y:`135`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`pulse`}),(0,i.jsxs)(`rect`,{x:`215`,y:`70`,width:`40`,height:`40`,rx:`6`,fill:`#818cf8`,children:[(0,i.jsx)(`animate`,{attributeName:`rx`,values:`4;20;4`,dur:`2s`,repeatCount:`indefinite`}),(0,i.jsx)(`animate`,{attributeName:`fill`,values:`#818cf8;#f97316;#818cf8`,dur:`2s`,repeatCount:`indefinite`})]}),(0,i.jsx)(`text`,{x:`235`,y:`135`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`rx + fill`})]})},{title:`animateTransform — rotation, scale, translate`,desc:`<animateTransform> animates the transform attribute. type='rotate' takes 'angle cx cy' as values for rotating around a point.`,code:`{/* spin around center */}
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
</circle>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsx)(`g`,{transform:`translate(50,90)`,children:(0,i.jsx)(`rect`,{x:`-22`,y:`-22`,width:`44`,height:`44`,fill:`#f97316`,rx:`4`,children:(0,i.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,from:`0 0 0`,to:`360 0 0`,dur:`3s`,repeatCount:`indefinite`})})}),(0,i.jsx)(`text`,{x:`50`,y:`130`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`rotate`}),(0,i.jsx)(`g`,{transform:`translate(150,90)`,children:(0,i.jsx)(`circle`,{r:`26`,fill:`#10b981`,children:(0,i.jsx)(`animateTransform`,{attributeName:`transform`,type:`scale`,values:`1;1.35;1`,dur:`1.2s`,repeatCount:`indefinite`,additive:`sum`})})}),(0,i.jsx)(`text`,{x:`150`,y:`130`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`scale`}),(0,i.jsx)(`g`,{transform:`translate(235,90)`,children:(0,i.jsx)(`rect`,{x:`-20`,y:`-20`,width:`40`,height:`40`,fill:`#a78bfa`,rx:`4`,children:(0,i.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0;15;0;-15;0`,dur:`0.6s`,repeatCount:`indefinite`})})}),(0,i.jsx)(`text`,{x:`235`,y:`130`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`wobble`})]})},{title:`animateMotion — path-based movement`,desc:`animateMotion moves an element along an SVG path. mpath links to an existing path element. rotate='auto' keeps the element aligned with the path direction.`,code:`<defs>
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
</circle>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 200`,width:`280`,height:`200`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`path`,{id:`adv-orbit`,d:`M 140 100 m -100 0 a 100 50 0 1 1 200 0 a 100 50 0 1 1 -200 0`}),(0,i.jsx)(`path`,{id:`adv-wave-motion`,d:`M 10 150 Q 70 90 140 150 T 270 150`})]}),(0,i.jsx)(`ellipse`,{cx:`140`,cy:`100`,rx:`100`,ry:`50`,fill:`none`,stroke:`#1e293b`,strokeWidth:`1.5`}),(0,i.jsx)(`circle`,{cx:`140`,cy:`100`,r:`16`,fill:`#fbbf24`,stroke:`#f59e0b`,strokeWidth:`2`}),(0,i.jsx)(`circle`,{r:`10`,fill:`#818cf8`,children:(0,i.jsx)(`animateMotion`,{dur:`4s`,repeatCount:`indefinite`,children:(0,i.jsx)(`mpath`,{href:`#adv-orbit`})})}),(0,i.jsx)(`path`,{d:`M 10 150 Q 70 90 140 150 T 270 150`,fill:`none`,stroke:`#1e293b`,strokeWidth:`1.5`}),(0,i.jsx)(`polygon`,{points:`0,-7 6,7 -6,7`,fill:`#f472b6`,children:(0,i.jsx)(`animateMotion`,{dur:`3s`,repeatCount:`indefinite`,rotate:`auto`,children:(0,i.jsx)(`mpath`,{href:`#adv-wave-motion`})})}),(0,i.jsx)(`text`,{x:`140`,y:`195`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`orbit + wave path (rotate=auto aligns element to path)`})]})},{title:`CSS animations on SVG`,desc:`SVG elements fully support CSS animations and transitions. You can animate transforms, opacity, fill, stroke, and more with standard @keyframes.`,code:`<style>
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
<circle className="fade-ring" ... />`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 180`,width:`280`,height:`180`,children:[(0,i.jsx)(`style`,{children:`
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
        `}),(0,i.jsx)(`circle`,{cx:`50`,cy:`90`,r:`28`,fill:`none`,stroke:`#1e293b`,strokeWidth:`2`}),(0,i.jsx)(`path`,{d:`M 50 62 A 28 28 0 1 1 22 90`,fill:`none`,stroke:`#f97316`,strokeWidth:`5`,strokeLinecap:`round`,className:`adv-spinner`}),(0,i.jsx)(`text`,{x:`50`,y:`132`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`CSS spin`}),(0,i.jsx)(`circle`,{cx:`150`,cy:`90`,r:`20`,fill:`#818cf8`,className:`adv-ping`}),(0,i.jsx)(`circle`,{cx:`150`,cy:`90`,r:`14`,fill:`#818cf8`}),(0,i.jsx)(`text`,{x:`150`,y:`147`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`ping pulse`}),(0,i.jsx)(`rect`,{x:`215`,y:`72`,width:`40`,height:`36`,rx:`6`,fill:`#10b981`,className:`adv-bouncer adv-color`}),(0,i.jsx)(`text`,{x:`235`,y:`143`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:`bounce + color`})]})}]},{id:`foreign`,label:`foreignObject`,icon:`⊞`,color:`#4ade80`,demos:[{title:`foreignObject — embed HTML inside SVG`,desc:`foreignObject lets you embed arbitrary HTML inside an SVG. Useful for rich text, HTML forms, or components that are hard to express in SVG primitives.`,code:`<svg width="400" height="300">
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
</svg>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 200`,width:`280`,height:`200`,children:[(0,i.jsx)(`rect`,{width:`280`,height:`200`,fill:`#0f172a`,rx:`10`}),(0,i.jsx)(`circle`,{cx:`50`,cy:`50`,r:`28`,fill:`#7c3aed`}),(0,i.jsx)(`polygon`,{points:`120,22 138,50 102,50`,fill:`#f97316`}),(0,i.jsx)(`ellipse`,{cx:`200`,cy:`48`,rx:`35`,ry:`20`,fill:`#10b981`,opacity:`0.8`}),(0,i.jsx)(`text`,{x:`10`,y:`90`,fontSize:`9`,fill:`#475569`,children:`↑ SVG shapes`}),(0,i.jsx)(`foreignObject`,{x:`10`,y:`98`,width:`260`,height:`90`,children:(0,i.jsxs)(`div`,{style:{padding:`10px 12px`,background:`rgba(99,102,241,0.15)`,borderRadius:`8px`,border:`1px solid rgba(99,102,241,0.3)`,fontFamily:`system-ui`},children:[(0,i.jsx)(`div`,{style:{color:`#a5b4fc`,fontSize:`11px`,fontWeight:`bold`,marginBottom:`4px`},children:`HTML inside SVG via foreignObject`}),(0,i.jsx)(`div`,{style:{color:`#94a3b8`,fontSize:`10px`,lineHeight:1.5},children:`Full HTML rendering — use for rich text, forms, or any HTML content that's hard to do in SVG.`}),(0,i.jsxs)(`div`,{style:{marginTop:`6px`,display:`flex`,gap:`6px`},children:[(0,i.jsx)(`span`,{style:{background:`#7c3aed`,color:`white`,fontSize:`9px`,padding:`2px 6px`,borderRadius:`4px`},children:`tag`}),(0,i.jsx)(`span`,{style:{background:`#0f766e`,color:`white`,fontSize:`9px`,padding:`2px 6px`,borderRadius:`4px`},children:`another`})]})]})})]})}]},{id:`a11y`,label:`Accessibility`,icon:`◎`,color:`#f9a8d4`,demos:[{title:`SVG accessibility — title, desc, role, aria`,desc:`SVGs need accessibility metadata for screen readers. Use <title> (short name) and <desc> (long description) inside the SVG. Set role='img' and aria-labelledby pointing to the title.`,code:`<svg
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
</svg>`,svg:()=>(0,i.jsxs)(`svg`,{viewBox:`0 0 280 200`,width:`280`,height:`200`,role:`img`,"aria-labelledby":`adv-title adv-desc`,children:[(0,i.jsx)(`title`,{id:`adv-title`,children:`SVG Accessibility Demo`}),(0,i.jsx)(`desc`,{id:`adv-desc`,children:`Bar chart showing revenue for 4 months, with April as the highest bar.`}),(0,i.jsx)(`text`,{x:`15`,y:`20`,fontSize:`11`,fontWeight:`bold`,fill:`#e2e8f0`,children:`Monthly Revenue`}),(0,i.jsx)(`line`,{x1:`30`,y1:`25`,x2:`30`,y2:`160`,stroke:`#334155`,strokeWidth:`1`,"aria-hidden":`true`}),(0,i.jsx)(`line`,{x1:`30`,y1:`160`,x2:`270`,y2:`160`,stroke:`#334155`,strokeWidth:`1`,"aria-hidden":`true`}),[{month:`Jan`,val:28e3,h:67,x:50},{month:`Feb`,val:34e3,h:82,x:110},{month:`Mar`,val:3e4,h:72,x:170},{month:`Apr`,val:42e3,h:100,x:230}].map(e=>(0,i.jsxs)(`g`,{children:[(0,i.jsx)(`rect`,{x:e.x,y:160-e.h,width:`40`,height:e.h,rx:`4`,fill:`#6366f1`,role:`button`,tabIndex:0,"aria-label":`${e.month}: $${e.val.toLocaleString()}`,children:(0,i.jsx)(`animate`,{attributeName:`fill`,values:`#6366f1;#818cf8;#6366f1`,dur:`2s`,begin:`mouseover`,end:`mouseout`})}),(0,i.jsxs)(`text`,{x:e.x+20,y:155-e.h,textAnchor:`middle`,fontSize:`9`,fill:`#a5b4fc`,children:[`$`,(e.val/1e3).toFixed(0),`k`]}),(0,i.jsx)(`text`,{x:e.x+20,y:`174`,textAnchor:`middle`,fontSize:`9`,fill:`#64748b`,children:e.month})]},e.month)),(0,i.jsx)(`rect`,{x:`10`,y:`180`,width:`260`,height:`18`,rx:`4`,fill:`#1e293b`,stroke:`#334155`,strokeWidth:`0.5`}),(0,i.jsx)(`text`,{x:`15`,y:`192`,fontSize:`8`,fill:`#475569`,children:`role="img"  title  desc  role="button"  tabIndex  aria-label`})]})}]}],s=({code:e})=>{let[t,n]=(0,r.useState)(!1);return(0,i.jsxs)(`div`,{style:{position:`relative`,marginTop:8},children:[(0,i.jsx)(`pre`,{style:{background:`#020817`,border:`1px solid #1e293b`,borderRadius:10,padding:`14px 16px`,fontSize:11.5,lineHeight:1.7,color:`#7dd3fc`,overflowX:`auto`,margin:0,whiteSpace:`pre-wrap`,fontFamily:`'Fira Code', 'Cascadia Code', monospace`},children:e}),(0,i.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)},style:{position:`absolute`,top:8,right:8,background:t?`#15803d`:`#1e293b`,border:`1px solid #334155`,borderRadius:6,color:`#94a3b8`,fontSize:10,padding:`3px 10px`,cursor:`pointer`,transition:`all 0.2s`},children:t?`Copied ✓`:`Copy`})]})},c=()=>{let[e,t]=(0,r.useState)(`paths`),[n,c]=(0,r.useState)(null),[l,u]=(0,r.useState)({}),d=o.find(t=>t.id===e);return(0,i.jsxs)(`div`,{style:{fontFamily:`'Segoe UI', system-ui, sans-serif`,background:`#030712`,minHeight:`100vh`,color:`#e2e8f0`,display:`flex`,flexDirection:`column`},children:[(0,i.jsx)(`div`,{style:{padding:`18px 24px 14px`,borderBottom:`1px solid #0f172a`,background:`#050d1a`},children:(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12},children:[(0,i.jsx)(`span`,{style:{fontSize:24,fontWeight:800,color:`#f8fafc`,letterSpacing:`-0.5px`},children:`SVG Advanced`}),(0,i.jsxs)(`span`,{style:{fontSize:13,color:`#475569`},children:[`12 concepts · `,o.reduce((e,t)=>e+t.demos.length,0),` live demos · code for each`]})]})}),(0,i.jsxs)(`div`,{style:{display:`flex`,flex:1},children:[(0,i.jsx)(`div`,{style:{width:210,background:`#050d1a`,borderRight:`1px solid #0f172a`,padding:`12px 8px`,flexShrink:0,overflowY:`auto`},children:o.map(n=>(0,i.jsxs)(`button`,{onClick:()=>{t(n.id),c(null)},style:{width:`100%`,textAlign:`left`,padding:`9px 12px`,borderRadius:8,border:`none`,background:e===n.id?`${n.color}18`:`transparent`,color:e===n.id?n.color:`#64748b`,fontSize:12.5,fontWeight:e===n.id?600:400,cursor:`pointer`,marginBottom:2,display:`flex`,alignItems:`center`,gap:8,transition:`all 0.15s`,borderLeft:e===n.id?`3px solid ${n.color}`:`3px solid transparent`},children:[(0,i.jsx)(`span`,{style:{fontSize:14,width:20,textAlign:`center`},children:n.icon}),n.label]},n.id))}),(0,i.jsxs)(`div`,{style:{flex:1,overflowY:`auto`,padding:`20px 24px`},children:[(0,i.jsxs)(`div`,{style:{marginBottom:20},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,i.jsx)(`span`,{style:{fontSize:22,background:`${d.color}20`,borderRadius:8,padding:`4px 10px`},children:d.icon}),(0,i.jsx)(`h2`,{style:{margin:0,fontSize:20,fontWeight:700,color:`#f1f5f9`},children:d.label})]}),(0,i.jsxs)(`p`,{style:{margin:`6px 0 0 0`,fontSize:13,color:`#475569`},children:[d.demos.length,` concept`,d.demos.length>1?`s`:``,` — click any card to expand code`]})]}),(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:d.demos.map((e,t)=>{let r=n===t,o=l[t];return(0,i.jsxs)(`div`,{style:{background:`#0a1628`,border:r?`1.5px solid ${d.color}55`:`1.5px solid #0f172a`,borderRadius:14,overflow:`hidden`,transition:`border-color 0.2s`},children:[(0,i.jsxs)(`div`,{onClick:()=>c(r?null:t),style:{padding:`14px 18px`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,borderBottom:r?`1px solid #0f172a`:`none`},children:[(0,i.jsx)(`div`,{children:(0,i.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#f1f5f9`},children:e.title})}),(0,i.jsx)(`span`,{style:{color:d.color,fontSize:18,transition:`transform 0.2s`,transform:r?`rotate(90deg)`:`none`},children:`›`})]}),r&&(0,i.jsxs)(`div`,{style:{padding:`16px 18px`},children:[(0,i.jsx)(`p`,{style:{fontSize:13,color:`#94a3b8`,margin:`0 0 16px`,lineHeight:1.65},children:e.desc}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,i.jsx)(`div`,{style:{...a,flex:`0 0 auto`},children:(0,i.jsx)(e.svg,{})}),(0,i.jsxs)(`div`,{style:{flex:1,minWidth:260},children:[(0,i.jsx)(`div`,{style:{display:`flex`,gap:8,marginBottom:6},children:(0,i.jsx)(`button`,{onClick:()=>u(e=>({...e,[t]:!e[t]})),style:{background:o?d.color:`transparent`,border:`1px solid ${o?d.color:`#1e293b`}`,borderRadius:6,color:o?`#fff`:`#64748b`,fontSize:11,padding:`4px 12px`,cursor:`pointer`,fontWeight:500},children:o?`Hide Code`:`Show Code`})}),o&&(0,i.jsx)(s,{code:e.code}),!o&&(0,i.jsxs)(`div`,{style:{background:`#020817`,borderRadius:10,border:`1px solid #0f172a`,padding:`20px`,color:`#1e293b`,fontSize:12,fontFamily:`monospace`,userSelect:`none`},children:[(0,i.jsxs)(`div`,{style:{color:`#1e3a5f`,lineHeight:1.8},children:[e.code.split(`
`).slice(0,5).map((e,t)=>(0,i.jsx)(`div`,{children:e||` `},t)),(0,i.jsx)(`div`,{style:{color:`#1e3a5f`},children:`…`})]}),(0,i.jsx)(`div`,{style:{marginTop:12,color:`#334155`,fontSize:11,textAlign:`center`,fontFamily:`system-ui`},children:`Click "Show Code" to reveal`})]})]})]})]})]},t)})})]})]})]})};export{c as default};