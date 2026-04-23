import { useState } from "react";

const filters = [
  {
    name: "feBlend",
    description: "Combines two graphics by a blending mode",
    category: "Compositing",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-blend">
            <feFlood floodColor="#4facfe" floodOpacity="1" result="flood1" />
            <feComposite in="flood1" in2="SourceGraphic" operator="in" result="colored" />
            <feFlood floodColor="#f97316" floodOpacity="0.85" result="flood2" />
            <feBlend in="colored" in2="flood2" mode="multiply" />
          </filter>
        </defs>
        <circle cx="60" cy="60" r="50" fill="#4facfe" filter="url(#f-blend)" />
        <rect x="30" y="30" width="60" height="60" rx="8" fill="#f97316" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "feColorMatrix",
    description: "Transforms colors using a 5×4 matrix",
    category: "Color",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-colormatrix">
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0    0    0    1 0"
            />
          </filter>
          <linearGradient id="cm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e11d48" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <circle cx="35" cy="60" r="28" fill="url(#cm-grad)" />
        <circle cx="85" cy="60" r="28" fill="url(#cm-grad)" filter="url(#f-colormatrix)" />
        <text x="60" y="112" textAnchor="middle" fontSize="9" fill="#888">original · grayscale</text>
      </svg>
    ),
  },
  {
    name: "feComponentTransfer",
    description: "Remaps each color channel independently",
    category: "Color",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-comptransfer">
            <feComponentTransfer>
              <feFuncR type="gamma" amplitude="1" exponent="0.4" offset="0" />
              <feFuncG type="gamma" amplitude="1" exponent="1.2" offset="0.1" />
              <feFuncB type="linear" slope="1.5" intercept="-0.1" />
            </feComponentTransfer>
          </filter>
          <linearGradient id="ct-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <circle cx="35" cy="60" r="28" fill="url(#ct-grad)" />
        <circle cx="85" cy="60" r="28" fill="url(#ct-grad)" filter="url(#f-comptransfer)" />
        <text x="60" y="112" textAnchor="middle" fontSize="9" fill="#888">original · adjusted</text>
      </svg>
    ),
  },
  {
    name: "feComposite",
    description: "Combines two images pixel-wise using compositing operators",
    category: "Compositing",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-composite" x="0%" y="0%" width="100%" height="100%">
            <feFlood floodColor="#6366f1" result="flood" />
            <feComposite in="flood" in2="SourceGraphic" operator="xor" />
          </filter>
        </defs>
        <circle cx="45" cy="55" r="30" fill="#6366f1" opacity="0.9" />
        <circle cx="75" cy="55" r="30" fill="#f43f5e" opacity="0.9" />
        <circle cx="45" cy="55" r="30" fill="#6366f1" filter="url(#f-composite)" />
        <circle cx="75" cy="55" r="30" fill="#f43f5e" filter="url(#f-composite)" />
        <text x="60" y="100" textAnchor="middle" fontSize="9" fill="#888">xor operator</text>
      </svg>
    ),
  },
  {
    name: "feConvolveMatrix",
    description: "Applies matrix convolution — blur, sharpen, emboss, edge detect",
    category: "Matrix",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-convolve-emboss">
            <feConvolveMatrix
              order="3"
              kernelMatrix="-2 -1 0
                            -1  1 1
                             0  1 2"
              bias="0.5"
            />
          </filter>
          <filter id="f-convolve-edge">
            <feConvolveMatrix
              order="3"
              kernelMatrix="-1 -1 -1
                            -1  8 -1
                            -1 -1 -1"
            />
          </filter>
        </defs>
        <rect x="5" y="5" width="50" height="50" rx="4" fill="#818cf8" />
        <circle cx="30" cy="30" r="15" fill="#f472b6" />
        <text x="30" y="68" textAnchor="middle" fontSize="8" fill="#888">original</text>

        <rect x="63" y="5" width="50" height="50" rx="4" fill="#818cf8" filter="url(#f-convolve-emboss)" />
        <circle cx="88" cy="30" r="15" fill="#f472b6" filter="url(#f-convolve-emboss)" />
        <text x="88" y="68" textAnchor="middle" fontSize="8" fill="#888">embossed</text>
      </svg>
    ),
  },
  {
    name: "feDiffuseLighting",
    description: "Simulates diffuse (matte) lighting using alpha as bump map",
    category: "Lighting",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-diffuse" x="-20%" y="-20%" width="140%" height="140%">
            <feDiffuseLighting in="SourceGraphic" lightingColor="#fff" diffuseConstant="1.5" surfaceScale="6">
              <fePointLight x="30" y="20" z="60" />
            </feDiffuseLighting>
          </filter>
        </defs>
        <circle cx="60" cy="58" r="46" fill="#7c3aed" />
        <circle cx="60" cy="58" r="46" fill="#e0e7ff" filter="url(#f-diffuse)" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: "feDisplacementMap",
    description: "Distorts an image using pixel values from another image",
    category: "Distortion",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-displacement">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <circle cx="35" cy="60" r="26" fill="#14b8a6" />
        <circle cx="85" cy="60" r="26" fill="#14b8a6" filter="url(#f-displacement)" />
        <text x="60" y="106" textAnchor="middle" fontSize="9" fill="#888">original · distorted</text>
      </svg>
    ),
  },
  {
    name: "feDistantLight",
    description: "Defines a directional (sun-like) light source for lighting filters",
    category: "Lighting",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-distantlight" x="-10%" y="-10%" width="120%" height="120%">
            <feDiffuseLighting in="SourceGraphic" lightingColor="#fde68a" diffuseConstant="1.2" surfaceScale="5">
              <feDistantLight azimuth="45" elevation="55" />
            </feDiffuseLighting>
          </filter>
        </defs>
        <circle cx="60" cy="58" r="46" fill="#4ade80" />
        <circle cx="60" cy="58" r="46" fill="#ecfdf5" filter="url(#f-distantlight)" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: "feDropShadow",
    description: "Adds a drop shadow behind the graphic",
    category: "Shadow",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-dropshadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="6" dy="6" stdDeviation="4" floodColor="#1e40af" floodOpacity="0.5" />
          </filter>
        </defs>
        <rect x="20" y="20" width="80" height="65" rx="10" fill="#60a5fa" filter="url(#f-dropshadow)" />
        <text x="60" y="57" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Shadow</text>
      </svg>
    ),
  },
  {
    name: "feFlood",
    description: "Fills the filter region with a solid color and opacity",
    category: "Input",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-flood">
            <feFlood floodColor="#f59e0b" floodOpacity="0.75" result="flood" />
            <feComposite in="flood" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <text x="60" y="38" textAnchor="middle" fontSize="30" fontWeight="900" fill="#1c1917">FLOOD</text>
        <text x="60" y="38" textAnchor="middle" fontSize="30" fontWeight="900" fill="transparent" stroke="#1c1917" strokeWidth="1" filter="url(#f-flood)">FLOOD</text>
        <polygon points="60,55 80,88 40,88" fill="#6366f1" filter="url(#f-flood)" />
        <circle cx="60" cy="90" r="18" fill="#e11d48" filter="url(#f-flood)" />
      </svg>
    ),
  },
  {
    name: "feGaussianBlur",
    description: "Blurs the graphic using a Gaussian function",
    category: "Blur",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-blur-sm"><feGaussianBlur stdDeviation="1.5" /></filter>
          <filter id="f-blur-md"><feGaussianBlur stdDeviation="3" /></filter>
          <filter id="f-blur-lg"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>
        <circle cx="20" cy="60" r="14" fill="#f97316" />
        <circle cx="48" cy="60" r="14" fill="#f97316" filter="url(#f-blur-sm)" />
        <circle cx="76" cy="60" r="14" fill="#f97316" filter="url(#f-blur-md)" />
        <circle cx="104" cy="60" r="14" fill="#f97316" filter="url(#f-blur-lg)" />
        <text x="20" y="84" textAnchor="middle" fontSize="8" fill="#888">0</text>
        <text x="48" y="84" textAnchor="middle" fontSize="8" fill="#888">1.5</text>
        <text x="76" y="84" textAnchor="middle" fontSize="8" fill="#888">3</text>
        <text x="104" y="84" textAnchor="middle" fontSize="8" fill="#888">5</text>
        <text x="60" y="100" textAnchor="middle" fontSize="9" fill="#888">stdDeviation →</text>
      </svg>
    ),
  },
  {
    name: "feImage",
    description: "Brings an external image into the filter pipeline as input",
    category: "Input",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="checker" patternUnits="userSpaceOnUse" width="16" height="16">
            <rect width="8" height="8" fill="#d1d5db" />
            <rect x="8" y="8" width="8" height="8" fill="#d1d5db" />
            <rect x="8" y="0" width="8" height="8" fill="#f9fafb" />
            <rect x="0" y="8" width="8" height="8" fill="#f9fafb" />
          </pattern>
          <filter id="f-image">
            <feImage href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='%23818cf8'/%3E%3Ccircle cx='60' cy='60' r='40' fill='%23f472b6'/%3E%3C/svg%3E" result="ext" preserveAspectRatio="xMidYMid slice" />
            <feComposite in="ext" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <rect x="10" y="10" width="100" height="100" fill="url(#checker)" rx="8" />
        <ellipse cx="60" cy="60" r="45" ry="45" fill="white" filter="url(#f-image)" />
      </svg>
    ),
  },
  {
    name: "feMerge",
    description: "Stacks multiple filter results concurrently (not sequentially)",
    category: "Compositing",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-merge" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feFlood floodColor="#4f46e5" floodOpacity="0.6" result="flood" />
            <feComposite in="flood" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="60" cy="55" r="38" fill="#f9a8d4" filter="url(#f-merge)" />
        <text x="60" y="59" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Merge</text>
        <text x="60" y="74" textAnchor="middle" fontSize="9" fill="#9d174d">layers</text>
      </svg>
    ),
  },
  {
    name: "feMergeNode",
    description: "Specifies one input layer within an feMerge element",
    category: "Compositing",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-mergenode" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blurred" />
            <feOffset in="blurred" dx="4" dy="4" result="shifted" />
            <feFlood floodColor="#7c3aed" floodOpacity="0.5" result="tint" />
            <feComposite in="tint" in2="shifted" operator="in" result="coloredShadow" />
            <feMerge>
              <feMergeNode in="coloredShadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="22" y="22" width="76" height="55" rx="8" fill="#a78bfa" filter="url(#f-mergenode)" />
        <text x="60" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3b0764">MergeNode</text>
        <text x="60" y="66" textAnchor="middle" fontSize="8" fill="#4c1d95">2 nodes stacked</text>
      </svg>
    ),
  },
  {
    name: "feMorphology",
    description: "Erodes (thins) or dilates (fattens) the graphic",
    category: "Morphology",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-erode"><feMorphology operator="erode" radius="2" /></filter>
          <filter id="f-dilate"><feMorphology operator="dilate" radius="2" /></filter>
        </defs>
        <circle cx="20" cy="60" r="14" fill="#10b981" />
        <circle cx="60" cy="60" r="14" fill="#10b981" filter="url(#f-erode)" />
        <circle cx="100" cy="60" r="14" fill="#10b981" filter="url(#f-dilate)" />
        <text x="20" y="84" textAnchor="middle" fontSize="8" fill="#888">base</text>
        <text x="60" y="84" textAnchor="middle" fontSize="8" fill="#888">erode</text>
        <text x="100" y="84" textAnchor="middle" fontSize="8" fill="#888">dilate</text>
      </svg>
    ),
  },
  {
    name: "feOffset",
    description: "Shifts the input graphic by dx/dy pixels",
    category: "Geometry",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-offset" x="-20%" y="-20%" width="160%" height="160%">
            <feOffset dx="10" dy="10" result="shifted" />
            <feFlood floodColor="#f59e0b" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="shifted" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="52" cy="52" r="36" fill="#3b82f6" filter="url(#f-offset)" />
      </svg>
    ),
  },
  {
    name: "fePointLight",
    description: "Defines a point light source (like a light bulb) for lighting effects",
    category: "Lighting",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-pointlight" x="-5%" y="-5%" width="110%" height="110%">
            <feDiffuseLighting in="SourceGraphic" lightingColor="#fef3c7" diffuseConstant="1.8" surfaceScale="8">
              <fePointLight x="30" y="25" z="80" />
            </feDiffuseLighting>
          </filter>
        </defs>
        <circle cx="60" cy="62" r="46" fill="#f97316" />
        <circle cx="60" cy="62" r="46" fill="#fff7ed" filter="url(#f-pointlight)" opacity="0.9" />
        <circle cx="30" cy="25" r="4" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="40" y="22" fontSize="9" fill="#92400e">light source</text>
      </svg>
    ),
  },
  {
    name: "feSpecularLighting",
    description: "Simulates specular (shiny) lighting using alpha as a bump map",
    category: "Lighting",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-specular" x="-5%" y="-5%" width="110%" height="110%">
            <feSpecularLighting
              in="SourceGraphic"
              surfaceScale="5"
              specularConstant="1.5"
              specularExponent="20"
              lightingColor="white"
              result="specOut"
            >
              <fePointLight x="50" y="20" z="90" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <circle cx="60" cy="62" r="46" fill="#94a3b8" />
        <circle cx="60" cy="62" r="46" fill="#334155" filter="url(#f-specular)" />
      </svg>
    ),
  },
  {
    name: "feSpotLight",
    description: "Defines a spotlight source with direction and cone angle",
    category: "Lighting",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-spotlight" x="-5%" y="-5%" width="110%" height="110%">
            <feDiffuseLighting in="SourceGraphic" lightingColor="#fde68a" diffuseConstant="1.5" surfaceScale="6">
              <feSpotLight x="30" y="10" z="80" pointsAtX="60" pointsAtY="65" limitingConeAngle="30" specularExponent="5" />
            </feDiffuseLighting>
          </filter>
        </defs>
        <rect x="10" y="18" width="100" height="90" rx="8" fill="#1e293b" />
        <rect x="10" y="18" width="100" height="90" rx="8" fill="#e2e8f0" filter="url(#f-spotlight)" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "feTile",
    description: "Tiles the input graphic to fill the filter region",
    category: "Texture",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-tile" x="0%" y="0%" width="100%" height="100%">
            <feImage
              href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Crect width='30' height='30' fill='%23dbeafe'/%3E%3Ccircle cx='15' cy='15' r='10' fill='%233b82f6'/%3E%3C/svg%3E"
              x="0" y="0" width="30" height="30"
              result="tile-src"
            />
            <feTile in="tile-src" result="tiled" />
            <feComposite in="tiled" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <circle cx="60" cy="60" r="52" fill="white" filter="url(#f-tile)" />
      </svg>
    ),
  },
  {
    name: "feTurbulence",
    description: "Generates Perlin noise / fractal turbulence textures",
    category: "Texture",
    demo: () => (
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f-turbulence-water" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="turbulence" baseFrequency="0.015 0.04" numOctaves="4" seed="5" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.1
                      0 0 0 0 0.5
                      0 0 0 0 0.9
                      0 0 0 1 0"
              in="noise"
            />
          </filter>
          <filter id="f-turbulence-fire" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05 0.1" numOctaves="3" seed="12" result="noise" />
            <feColorMatrix
              type="matrix"
              values="2 0 0 0 0
                      0.5 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              in="noise"
            />
          </filter>
        </defs>
        <rect x="5" y="5" width="52" height="110" rx="6" filter="url(#f-turbulence-water)" />
        <rect x="63" y="5" width="52" height="110" rx="6" filter="url(#f-turbulence-fire)" />
        <text x="31" y="118" textAnchor="middle" fontSize="8" fill="#888">water</text>
        <text x="89" y="118" textAnchor="middle" fontSize="8" fill="#888">fire</text>
      </svg>
    ),
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Compositing: { bg: "#ede9fe", text: "#5b21b6" },
  Color:       { bg: "#fce7f3", text: "#9d174d" },
  Matrix:      { bg: "#dbeafe", text: "#1e40af" },
  Lighting:    { bg: "#fef3c7", text: "#92400e" },
  Distortion:  { bg: "#d1fae5", text: "#065f46" },
  Shadow:      { bg: "#e0e7ff", text: "#3730a3" },
  Input:       { bg: "#fee2e2", text: "#991b1b" },
  Morphology:  { bg: "#ccfbf1", text: "#0f766e" },
  Geometry:    { bg: "#fff7ed", text: "#9a3412" },
  Texture:     { bg: "#f3f4f6", text: "#374151" },
  Blur:        { bg: "#eff6ff", text: "#1e40af" },
};

const SVGFilters = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(filters.map((f) => f.category)))];
  const visible = filter === "All" ? filters : filters.filter((f) => f.category === filter);
  const activeFilter = selected !== null ? filters[selected] : null;

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#0f172a",
      minHeight: "100vh",
      color: "#e2e8f0",
      padding: "24px",
    }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: "#f8fafc", letterSpacing: "-0.5px" }}>
          SVG Filter Primitives
        </h1>
        <p style={{ fontSize: 14, color: "#94a3b8", margin: "6px 0 0" }}>
          All 21 filter primitives — click any card for details &amp; code
        </p>
      </div>

      {/* Category pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              border: "1px solid",
              borderColor: filter === cat ? "#818cf8" : "#334155",
              background: filter === cat ? "#4f46e5" : "transparent",
              color: filter === cat ? "#fff" : "#94a3b8",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 500,
              transition: "all 0.15s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 14,
      }}>
        {visible.map((f) => {
          const idx = filters.indexOf(f);
          const isActive = selected === idx;
          const catStyle = categoryColors[f.category] || { bg: "#f3f4f6", text: "#374151" };
          return (
            <div
              key={f.name}
              onClick={() => setSelected(isActive ? null : idx)}
              style={{
                background: isActive ? "#1e293b" : "#1e293b",
                border: isActive ? "1.5px solid #818cf8" : "1.5px solid #334155",
                borderRadius: 14,
                padding: "16px 14px 12px",
                cursor: "pointer",
                transition: "all 0.15s",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{
                background: "#0f172a",
                borderRadius: 10,
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <f.demo />
              </div>
              <div style={{ width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: "#a5b4fc" }}>
                    {f.name}
                  </span>
                  <span style={{
                    fontSize: 10,
                    padding: "2px 7px",
                    borderRadius: 20,
                    background: catStyle.bg,
                    color: catStyle.text,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}>
                    {f.category}
                  </span>
                </div>
                <p style={{ fontSize: 11.5, color: "#94a3b8", margin: "5px 0 0", lineHeight: 1.5 }}>
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Panel */}
      {activeFilter && (
        <div style={{
          marginTop: 24,
          background: "#1e293b",
          border: "1.5px solid #334155",
          borderRadius: 16,
          padding: 24,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <span style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 700, color: "#818cf8" }}>
                &lt;{activeFilter.name}&gt;
              </span>
              <p style={{ fontSize: 13, color: "#94a3b8", margin: "4px 0 0" }}>{activeFilter.description}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{
                background: "transparent", border: "1px solid #475569", borderRadius: 8,
                color: "#94a3b8", padding: "4px 12px", cursor: "pointer", fontSize: 12,
              }}
            >
              close ✕
            </button>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{
              background: "#0f172a", borderRadius: 12, padding: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              minWidth: 150,
            }}>
              <activeFilter.demo />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Example Usage
              </p>
              <FilterCodeExample name={activeFilter.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const codeExamples: Record<string, string> = {
  feBlend: `<filter id="blend-filter">
  <feFlood floodColor="orange" result="flood" />
  <feComposite in="flood" in2="SourceGraphic"
    operator="in" result="colored" />
  <feBlend in="SourceGraphic"
    in2="colored" mode="multiply" />
</filter>`,
  feColorMatrix: `<filter id="grayscale">
  <feColorMatrix type="matrix"
    values="0.33 0.33 0.33 0 0
            0.33 0.33 0.33 0 0
            0.33 0.33 0.33 0 0
            0    0    0    1 0" />
</filter>
{/* type: matrix | saturate | hueRotate | luminanceToAlpha */}`,
  feComponentTransfer: `<filter id="brightness-contrast">
  <feComponentTransfer>
    <feFuncR type="gamma" amplitude="1"
      exponent="0.4" offset="0" />
    <feFuncG type="linear" slope="1.2"
      intercept="0.05" />
    <feFuncB type="linear" slope="0.8" />
    <feFuncA type="identity" />
  </feComponentTransfer>
</filter>`,
  feComposite: `<filter id="xor-composite">
  <feFlood floodColor="#6366f1" result="flood" />
  <feComposite in="flood" in2="SourceGraphic"
    operator="xor" />
</filter>
{/* operators: over|in|out|atop|xor|arithmetic */}`,
  feConvolveMatrix: `<filter id="emboss">
  <feConvolveMatrix order="3"
    kernelMatrix="-2 -1 0
                  -1  1 1
                   0  1 2"
    bias="0.5" />
</filter>
{/* Edge detect, sharpen, blur via kernel */}`,
  feDiffuseLighting: `<filter id="diffuse-light">
  <feDiffuseLighting lightingColor="white"
    diffuseConstant="1.5" surfaceScale="5">
    <fePointLight x="50" y="30" z="80" />
  </feDiffuseLighting>
</filter>
{/* Matte/flat surface appearance */}`,
  feDisplacementMap: `<filter id="displace">
  <feTurbulence baseFrequency="0.05"
    numOctaves="2" result="noise" />
  <feDisplacementMap in="SourceGraphic"
    in2="noise" scale="20"
    xChannelSelector="R"
    yChannelSelector="G" />
</filter>`,
  feDistantLight: `<filter id="sun-light">
  <feDiffuseLighting lightingColor="#fde68a"
    diffuseConstant="1.2" surfaceScale="5">
    <feDistantLight azimuth="45"
      elevation="55" />
  </feDiffuseLighting>
</filter>
{/* azimuth: compass °, elevation: height ° */}`,
  feDropShadow: `<filter id="shadow">
  <feDropShadow
    dx="6" dy="6"
    stdDeviation="4"
    floodColor="#1e40af"
    floodOpacity="0.5" />
</filter>
{/* Shorthand for blur+offset+merge shadow */}`,
  feFlood: `<filter id="tint">
  <feFlood floodColor="#f59e0b"
    floodOpacity="0.75" result="flood" />
  <feComposite in="flood"
    in2="SourceGraphic" operator="in" />
</filter>
{/* Used as color source in pipelines */}`,
  feGaussianBlur: `<filter id="blur">
  <feGaussianBlur stdDeviation="4" />
</filter>
{/* stdDeviation: blur radius (x y or single) */}
{/* edgeMode: duplicate|wrap|none */}`,
  feImage: `<filter id="image-texture">
  <feImage href="./texture.png"
    result="img"
    preserveAspectRatio="xMidYMid slice" />
  <feComposite in="img"
    in2="SourceGraphic" operator="in" />
</filter>`,
  feMerge: `<filter id="layered">
  <feGaussianBlur stdDeviation="4"
    result="blur" />
  <feOffset in="blur" dx="4" dy="4"
    result="shadow" />
  <feMerge>
    <feMergeNode in="shadow" />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>`,
  feMergeNode: `{/* feMergeNode is a child of feMerge */}
<feMerge>
  <feMergeNode in="shadow" />
  <feMergeNode in="colorOverlay" />
  <feMergeNode in="SourceGraphic" />
</feMerge>
{/* Each node = one layer in the stack */}`,
  feMorphology: `<filter id="fatten">
  <feMorphology operator="dilate"
    radius="2" />
</filter>
<filter id="thin">
  <feMorphology operator="erode"
    radius="2" />
</filter>
{/* operator: erode | dilate */}`,
  feOffset: `<filter id="offset-shadow">
  <feOffset dx="10" dy="10"
    result="shifted" />
  <feFlood floodColor="gold"
    floodOpacity="0.6" result="color" />
  <feComposite in="color" in2="shifted"
    operator="in" result="shadow" />
  <feMerge>
    <feMergeNode in="shadow" />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>`,
  fePointLight: `<filter id="point-light">
  <feDiffuseLighting lightingColor="white"
    diffuseConstant="1.5" surfaceScale="6">
    <fePointLight x="50" y="30" z="80" />
  </feDiffuseLighting>
</filter>
{/* x y z: 3D position in filter space */}`,
  feSpecularLighting: `<filter id="shiny">
  <feSpecularLighting surfaceScale="5"
    specularConstant="1.5"
    specularExponent="20"
    lightingColor="white">
    <fePointLight x="50" y="20" z="90" />
  </feSpecularLighting>
</filter>
{/* Higher exponent = tighter highlight */}`,
  feSpotLight: `<filter id="spotlight">
  <feDiffuseLighting lightingColor="#fde68a"
    diffuseConstant="1.5" surfaceScale="6">
    <feSpotLight x="30" y="10" z="80"
      pointsAtX="60" pointsAtY="65"
      limitingConeAngle="30"
      specularExponent="5" />
  </feDiffuseLighting>
</filter>`,
  feTile: `<filter id="tile-pattern">
  <feImage href="./tile.svg"
    x="0" y="0" width="30" height="30"
    result="tile-src" />
  <feTile in="tile-src" result="tiled" />
  <feComposite in="tiled"
    in2="SourceGraphic" operator="in" />
</filter>`,
  feTurbulence: `<filter id="noise">
  <feTurbulence
    type="turbulence"
    baseFrequency="0.015 0.04"
    numOctaves="4"
    seed="5" />
</filter>
{/* type: turbulence | fractalNoise */}
{/* seed: changes the noise pattern */}`,
};

const FilterCodeExample = ({ name }: { name: string }) => {
  const [copied, setCopied] = useState(false);
  const code = codeExamples[name] || "// No example available";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: "relative" }}>
      <pre style={{
        background: "#0f172a",
        border: "1px solid #334155",
        borderRadius: 10,
        padding: "14px 16px",
        fontSize: 12,
        lineHeight: 1.65,
        color: "#7dd3fc",
        overflowX: "auto",
        margin: 0,
        whiteSpace: "pre-wrap",
      }}>
        {code}
      </pre>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute", top: 10, right: 10,
          background: copied ? "#16a34a" : "#334155",
          border: "none", borderRadius: 6,
          color: "#e2e8f0", fontSize: 11, padding: "3px 10px",
          cursor: "pointer", transition: "background 0.2s",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default SVGFilters;