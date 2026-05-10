import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{t as n}from"./react-BRPyh-lz.js";var r=e(n(),1),i=t(),a=[{name:`feBlend`,description:`Combines two graphics by a blending mode`,category:`Compositing`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-blend`,children:[(0,i.jsx)(`feFlood`,{floodColor:`#4facfe`,floodOpacity:`1`,result:`flood1`}),(0,i.jsx)(`feComposite`,{in:`flood1`,in2:`SourceGraphic`,operator:`in`,result:`colored`}),(0,i.jsx)(`feFlood`,{floodColor:`#f97316`,floodOpacity:`0.85`,result:`flood2`}),(0,i.jsx)(`feBlend`,{in:`colored`,in2:`flood2`,mode:`multiply`})]})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`60`,r:`50`,fill:`#4facfe`,filter:`url(#f-blend)`}),(0,i.jsx)(`rect`,{x:`30`,y:`30`,width:`60`,height:`60`,rx:`8`,fill:`#f97316`,opacity:`0.6`})]})},{name:`feColorMatrix`,description:`Transforms colors using a 5×4 matrix`,category:`Color`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`f-colormatrix`,children:(0,i.jsx)(`feColorMatrix`,{type:`matrix`,values:`0.33 0.33 0.33 0 0\r
                      0.33 0.33 0.33 0 0\r
                      0.33 0.33 0.33 0 0\r
                      0    0    0    1 0`})}),(0,i.jsxs)(`linearGradient`,{id:`cm-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#e11d48`}),(0,i.jsx)(`stop`,{offset:`50%`,stopColor:`#7c3aed`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#0ea5e9`})]})]}),(0,i.jsx)(`circle`,{cx:`35`,cy:`60`,r:`28`,fill:`url(#cm-grad)`}),(0,i.jsx)(`circle`,{cx:`85`,cy:`60`,r:`28`,fill:`url(#cm-grad)`,filter:`url(#f-colormatrix)`}),(0,i.jsx)(`text`,{x:`60`,y:`112`,textAnchor:`middle`,fontSize:`9`,fill:`#888`,children:`original · grayscale`})]})},{name:`feComponentTransfer`,description:`Remaps each color channel independently`,category:`Color`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`f-comptransfer`,children:(0,i.jsxs)(`feComponentTransfer`,{children:[(0,i.jsx)(`feFuncR`,{type:`gamma`,amplitude:`1`,exponent:`0.4`,offset:`0`}),(0,i.jsx)(`feFuncG`,{type:`gamma`,amplitude:`1`,exponent:`1.2`,offset:`0.1`}),(0,i.jsx)(`feFuncB`,{type:`linear`,slope:`1.5`,intercept:`-0.1`})]})}),(0,i.jsxs)(`linearGradient`,{id:`ct-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,i.jsx)(`stop`,{offset:`0%`,stopColor:`#f59e0b`}),(0,i.jsx)(`stop`,{offset:`100%`,stopColor:`#10b981`})]})]}),(0,i.jsx)(`circle`,{cx:`35`,cy:`60`,r:`28`,fill:`url(#ct-grad)`}),(0,i.jsx)(`circle`,{cx:`85`,cy:`60`,r:`28`,fill:`url(#ct-grad)`,filter:`url(#f-comptransfer)`}),(0,i.jsx)(`text`,{x:`60`,y:`112`,textAnchor:`middle`,fontSize:`9`,fill:`#888`,children:`original · adjusted`})]})},{name:`feComposite`,description:`Combines two images pixel-wise using compositing operators`,category:`Compositing`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-composite`,x:`0%`,y:`0%`,width:`100%`,height:`100%`,children:[(0,i.jsx)(`feFlood`,{floodColor:`#6366f1`,result:`flood`}),(0,i.jsx)(`feComposite`,{in:`flood`,in2:`SourceGraphic`,operator:`xor`})]})}),(0,i.jsx)(`circle`,{cx:`45`,cy:`55`,r:`30`,fill:`#6366f1`,opacity:`0.9`}),(0,i.jsx)(`circle`,{cx:`75`,cy:`55`,r:`30`,fill:`#f43f5e`,opacity:`0.9`}),(0,i.jsx)(`circle`,{cx:`45`,cy:`55`,r:`30`,fill:`#6366f1`,filter:`url(#f-composite)`}),(0,i.jsx)(`circle`,{cx:`75`,cy:`55`,r:`30`,fill:`#f43f5e`,filter:`url(#f-composite)`}),(0,i.jsx)(`text`,{x:`60`,y:`100`,textAnchor:`middle`,fontSize:`9`,fill:`#888`,children:`xor operator`})]})},{name:`feConvolveMatrix`,description:`Applies matrix convolution — blur, sharpen, emboss, edge detect`,category:`Matrix`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`f-convolve-emboss`,children:(0,i.jsx)(`feConvolveMatrix`,{order:`3`,kernelMatrix:`-2 -1 0\r
                            -1  1 1\r
                             0  1 2`,bias:`0.5`})}),(0,i.jsx)(`filter`,{id:`f-convolve-edge`,children:(0,i.jsx)(`feConvolveMatrix`,{order:`3`,kernelMatrix:`-1 -1 -1\r
                            -1  8 -1\r
                            -1 -1 -1`})})]}),(0,i.jsx)(`rect`,{x:`5`,y:`5`,width:`50`,height:`50`,rx:`4`,fill:`#818cf8`}),(0,i.jsx)(`circle`,{cx:`30`,cy:`30`,r:`15`,fill:`#f472b6`}),(0,i.jsx)(`text`,{x:`30`,y:`68`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`original`}),(0,i.jsx)(`rect`,{x:`63`,y:`5`,width:`50`,height:`50`,rx:`4`,fill:`#818cf8`,filter:`url(#f-convolve-emboss)`}),(0,i.jsx)(`circle`,{cx:`88`,cy:`30`,r:`15`,fill:`#f472b6`,filter:`url(#f-convolve-emboss)`}),(0,i.jsx)(`text`,{x:`88`,y:`68`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`embossed`})]})},{name:`feDiffuseLighting`,description:`Simulates diffuse (matte) lighting using alpha as bump map`,category:`Lighting`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsx)(`filter`,{id:`f-diffuse`,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`,children:(0,i.jsx)(`feDiffuseLighting`,{in:`SourceGraphic`,lightingColor:`#fff`,diffuseConstant:`1.5`,surfaceScale:`6`,children:(0,i.jsx)(`fePointLight`,{x:`30`,y:`20`,z:`60`})})})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`58`,r:`46`,fill:`#7c3aed`}),(0,i.jsx)(`circle`,{cx:`60`,cy:`58`,r:`46`,fill:`#e0e7ff`,filter:`url(#f-diffuse)`,opacity:`0.85`})]})},{name:`feDisplacementMap`,description:`Distorts an image using pixel values from another image`,category:`Distortion`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-displacement`,children:[(0,i.jsx)(`feTurbulence`,{type:`turbulence`,baseFrequency:`0.05`,numOctaves:`2`,result:`noise`,seed:`2`}),(0,i.jsx)(`feDisplacementMap`,{in:`SourceGraphic`,in2:`noise`,scale:`20`,xChannelSelector:`R`,yChannelSelector:`G`})]})}),(0,i.jsx)(`circle`,{cx:`35`,cy:`60`,r:`26`,fill:`#14b8a6`}),(0,i.jsx)(`circle`,{cx:`85`,cy:`60`,r:`26`,fill:`#14b8a6`,filter:`url(#f-displacement)`}),(0,i.jsx)(`text`,{x:`60`,y:`106`,textAnchor:`middle`,fontSize:`9`,fill:`#888`,children:`original · distorted`})]})},{name:`feDistantLight`,description:`Defines a directional (sun-like) light source for lighting filters`,category:`Lighting`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsx)(`filter`,{id:`f-distantlight`,x:`-10%`,y:`-10%`,width:`120%`,height:`120%`,children:(0,i.jsx)(`feDiffuseLighting`,{in:`SourceGraphic`,lightingColor:`#fde68a`,diffuseConstant:`1.2`,surfaceScale:`5`,children:(0,i.jsx)(`feDistantLight`,{azimuth:`45`,elevation:`55`})})})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`58`,r:`46`,fill:`#4ade80`}),(0,i.jsx)(`circle`,{cx:`60`,cy:`58`,r:`46`,fill:`#ecfdf5`,filter:`url(#f-distantlight)`,opacity:`0.85`})]})},{name:`feDropShadow`,description:`Adds a drop shadow behind the graphic`,category:`Shadow`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsx)(`filter`,{id:`f-dropshadow`,x:`-30%`,y:`-30%`,width:`160%`,height:`160%`,children:(0,i.jsx)(`feDropShadow`,{dx:`6`,dy:`6`,stdDeviation:`4`,floodColor:`#1e40af`,floodOpacity:`0.5`})})}),(0,i.jsx)(`rect`,{x:`20`,y:`20`,width:`80`,height:`65`,rx:`10`,fill:`#60a5fa`,filter:`url(#f-dropshadow)`}),(0,i.jsx)(`text`,{x:`60`,y:`57`,textAnchor:`middle`,fontSize:`13`,fontWeight:`bold`,fill:`#1e3a8a`,children:`Shadow`})]})},{name:`feFlood`,description:`Fills the filter region with a solid color and opacity`,category:`Input`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-flood`,children:[(0,i.jsx)(`feFlood`,{floodColor:`#f59e0b`,floodOpacity:`0.75`,result:`flood`}),(0,i.jsx)(`feComposite`,{in:`flood`,in2:`SourceGraphic`,operator:`in`})]})}),(0,i.jsx)(`text`,{x:`60`,y:`38`,textAnchor:`middle`,fontSize:`30`,fontWeight:`900`,fill:`#1c1917`,children:`FLOOD`}),(0,i.jsx)(`text`,{x:`60`,y:`38`,textAnchor:`middle`,fontSize:`30`,fontWeight:`900`,fill:`transparent`,stroke:`#1c1917`,strokeWidth:`1`,filter:`url(#f-flood)`,children:`FLOOD`}),(0,i.jsx)(`polygon`,{points:`60,55 80,88 40,88`,fill:`#6366f1`,filter:`url(#f-flood)`}),(0,i.jsx)(`circle`,{cx:`60`,cy:`90`,r:`18`,fill:`#e11d48`,filter:`url(#f-flood)`})]})},{name:`feGaussianBlur`,description:`Blurs the graphic using a Gaussian function`,category:`Blur`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`f-blur-sm`,children:(0,i.jsx)(`feGaussianBlur`,{stdDeviation:`1.5`})}),(0,i.jsx)(`filter`,{id:`f-blur-md`,children:(0,i.jsx)(`feGaussianBlur`,{stdDeviation:`3`})}),(0,i.jsx)(`filter`,{id:`f-blur-lg`,children:(0,i.jsx)(`feGaussianBlur`,{stdDeviation:`5`})})]}),(0,i.jsx)(`circle`,{cx:`20`,cy:`60`,r:`14`,fill:`#f97316`}),(0,i.jsx)(`circle`,{cx:`48`,cy:`60`,r:`14`,fill:`#f97316`,filter:`url(#f-blur-sm)`}),(0,i.jsx)(`circle`,{cx:`76`,cy:`60`,r:`14`,fill:`#f97316`,filter:`url(#f-blur-md)`}),(0,i.jsx)(`circle`,{cx:`104`,cy:`60`,r:`14`,fill:`#f97316`,filter:`url(#f-blur-lg)`}),(0,i.jsx)(`text`,{x:`20`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`0`}),(0,i.jsx)(`text`,{x:`48`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`1.5`}),(0,i.jsx)(`text`,{x:`76`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`3`}),(0,i.jsx)(`text`,{x:`104`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`5`}),(0,i.jsx)(`text`,{x:`60`,y:`100`,textAnchor:`middle`,fontSize:`9`,fill:`#888`,children:`stdDeviation →`})]})},{name:`feImage`,description:`Brings an external image into the filter pipeline as input`,category:`Input`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`pattern`,{id:`checker`,patternUnits:`userSpaceOnUse`,width:`16`,height:`16`,children:[(0,i.jsx)(`rect`,{width:`8`,height:`8`,fill:`#d1d5db`}),(0,i.jsx)(`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,fill:`#d1d5db`}),(0,i.jsx)(`rect`,{x:`8`,y:`0`,width:`8`,height:`8`,fill:`#f9fafb`}),(0,i.jsx)(`rect`,{x:`0`,y:`8`,width:`8`,height:`8`,fill:`#f9fafb`})]}),(0,i.jsxs)(`filter`,{id:`f-image`,children:[(0,i.jsx)(`feImage`,{href:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='%23818cf8'/%3E%3Ccircle cx='60' cy='60' r='40' fill='%23f472b6'/%3E%3C/svg%3E`,result:`ext`,preserveAspectRatio:`xMidYMid slice`}),(0,i.jsx)(`feComposite`,{in:`ext`,in2:`SourceGraphic`,operator:`in`})]})]}),(0,i.jsx)(`rect`,{x:`10`,y:`10`,width:`100`,height:`100`,fill:`url(#checker)`,rx:`8`}),(0,i.jsx)(`ellipse`,{cx:`60`,cy:`60`,r:`45`,ry:`45`,fill:`white`,filter:`url(#f-image)`})]})},{name:`feMerge`,description:`Stacks multiple filter results concurrently (not sequentially)`,category:`Compositing`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-merge`,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`,children:[(0,i.jsx)(`feGaussianBlur`,{in:`SourceGraphic`,stdDeviation:`5`,result:`blur`}),(0,i.jsx)(`feFlood`,{floodColor:`#4f46e5`,floodOpacity:`0.6`,result:`flood`}),(0,i.jsx)(`feComposite`,{in:`flood`,in2:`blur`,operator:`in`,result:`shadow`}),(0,i.jsxs)(`feMerge`,{children:[(0,i.jsx)(`feMergeNode`,{in:`shadow`}),(0,i.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`55`,r:`38`,fill:`#f9a8d4`,filter:`url(#f-merge)`}),(0,i.jsx)(`text`,{x:`60`,y:`59`,textAnchor:`middle`,fontSize:`12`,fontWeight:`bold`,fill:`#9d174d`,children:`Merge`}),(0,i.jsx)(`text`,{x:`60`,y:`74`,textAnchor:`middle`,fontSize:`9`,fill:`#9d174d`,children:`layers`})]})},{name:`feMergeNode`,description:`Specifies one input layer within an feMerge element`,category:`Compositing`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-mergenode`,x:`-10%`,y:`-10%`,width:`120%`,height:`120%`,children:[(0,i.jsx)(`feGaussianBlur`,{stdDeviation:`3`,result:`blurred`}),(0,i.jsx)(`feOffset`,{in:`blurred`,dx:`4`,dy:`4`,result:`shifted`}),(0,i.jsx)(`feFlood`,{floodColor:`#7c3aed`,floodOpacity:`0.5`,result:`tint`}),(0,i.jsx)(`feComposite`,{in:`tint`,in2:`shifted`,operator:`in`,result:`coloredShadow`}),(0,i.jsxs)(`feMerge`,{children:[(0,i.jsx)(`feMergeNode`,{in:`coloredShadow`}),(0,i.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,i.jsx)(`rect`,{x:`22`,y:`22`,width:`76`,height:`55`,rx:`8`,fill:`#a78bfa`,filter:`url(#f-mergenode)`}),(0,i.jsx)(`text`,{x:`60`,y:`52`,textAnchor:`middle`,fontSize:`10`,fontWeight:`bold`,fill:`#3b0764`,children:`MergeNode`}),(0,i.jsx)(`text`,{x:`60`,y:`66`,textAnchor:`middle`,fontSize:`8`,fill:`#4c1d95`,children:`2 nodes stacked`})]})},{name:`feMorphology`,description:`Erodes (thins) or dilates (fattens) the graphic`,category:`Morphology`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsx)(`filter`,{id:`f-erode`,children:(0,i.jsx)(`feMorphology`,{operator:`erode`,radius:`2`})}),(0,i.jsx)(`filter`,{id:`f-dilate`,children:(0,i.jsx)(`feMorphology`,{operator:`dilate`,radius:`2`})})]}),(0,i.jsx)(`circle`,{cx:`20`,cy:`60`,r:`14`,fill:`#10b981`}),(0,i.jsx)(`circle`,{cx:`60`,cy:`60`,r:`14`,fill:`#10b981`,filter:`url(#f-erode)`}),(0,i.jsx)(`circle`,{cx:`100`,cy:`60`,r:`14`,fill:`#10b981`,filter:`url(#f-dilate)`}),(0,i.jsx)(`text`,{x:`20`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`base`}),(0,i.jsx)(`text`,{x:`60`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`erode`}),(0,i.jsx)(`text`,{x:`100`,y:`84`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`dilate`})]})},{name:`feOffset`,description:`Shifts the input graphic by dx/dy pixels`,category:`Geometry`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-offset`,x:`-20%`,y:`-20%`,width:`160%`,height:`160%`,children:[(0,i.jsx)(`feOffset`,{dx:`10`,dy:`10`,result:`shifted`}),(0,i.jsx)(`feFlood`,{floodColor:`#f59e0b`,floodOpacity:`0.6`,result:`color`}),(0,i.jsx)(`feComposite`,{in:`color`,in2:`shifted`,operator:`in`,result:`shadow`}),(0,i.jsxs)(`feMerge`,{children:[(0,i.jsx)(`feMergeNode`,{in:`shadow`}),(0,i.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,i.jsx)(`circle`,{cx:`52`,cy:`52`,r:`36`,fill:`#3b82f6`,filter:`url(#f-offset)`})]})},{name:`fePointLight`,description:`Defines a point light source (like a light bulb) for lighting effects`,category:`Lighting`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsx)(`filter`,{id:`f-pointlight`,x:`-5%`,y:`-5%`,width:`110%`,height:`110%`,children:(0,i.jsx)(`feDiffuseLighting`,{in:`SourceGraphic`,lightingColor:`#fef3c7`,diffuseConstant:`1.8`,surfaceScale:`8`,children:(0,i.jsx)(`fePointLight`,{x:`30`,y:`25`,z:`80`})})})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`62`,r:`46`,fill:`#f97316`}),(0,i.jsx)(`circle`,{cx:`60`,cy:`62`,r:`46`,fill:`#fff7ed`,filter:`url(#f-pointlight)`,opacity:`0.9`}),(0,i.jsx)(`circle`,{cx:`30`,cy:`25`,r:`4`,fill:`#fde68a`,stroke:`#f59e0b`,strokeWidth:`1.5`}),(0,i.jsx)(`text`,{x:`40`,y:`22`,fontSize:`9`,fill:`#92400e`,children:`light source`})]})},{name:`feSpecularLighting`,description:`Simulates specular (shiny) lighting using alpha as a bump map`,category:`Lighting`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-specular`,x:`-5%`,y:`-5%`,width:`110%`,height:`110%`,children:[(0,i.jsx)(`feSpecularLighting`,{in:`SourceGraphic`,surfaceScale:`5`,specularConstant:`1.5`,specularExponent:`20`,lightingColor:`white`,result:`specOut`,children:(0,i.jsx)(`fePointLight`,{x:`50`,y:`20`,z:`90`})}),(0,i.jsx)(`feComposite`,{in:`specOut`,in2:`SourceGraphic`,operator:`in`})]})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`62`,r:`46`,fill:`#94a3b8`}),(0,i.jsx)(`circle`,{cx:`60`,cy:`62`,r:`46`,fill:`#334155`,filter:`url(#f-specular)`})]})},{name:`feSpotLight`,description:`Defines a spotlight source with direction and cone angle`,category:`Lighting`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsx)(`filter`,{id:`f-spotlight`,x:`-5%`,y:`-5%`,width:`110%`,height:`110%`,children:(0,i.jsx)(`feDiffuseLighting`,{in:`SourceGraphic`,lightingColor:`#fde68a`,diffuseConstant:`1.5`,surfaceScale:`6`,children:(0,i.jsx)(`feSpotLight`,{x:`30`,y:`10`,z:`80`,pointsAtX:`60`,pointsAtY:`65`,limitingConeAngle:`30`,specularExponent:`5`})})})}),(0,i.jsx)(`rect`,{x:`10`,y:`18`,width:`100`,height:`90`,rx:`8`,fill:`#1e293b`}),(0,i.jsx)(`rect`,{x:`10`,y:`18`,width:`100`,height:`90`,rx:`8`,fill:`#e2e8f0`,filter:`url(#f-spotlight)`,opacity:`0.9`})]})},{name:`feTile`,description:`Tiles the input graphic to fill the filter region`,category:`Texture`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsx)(`defs`,{children:(0,i.jsxs)(`filter`,{id:`f-tile`,x:`0%`,y:`0%`,width:`100%`,height:`100%`,children:[(0,i.jsx)(`feImage`,{href:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Crect width='30' height='30' fill='%23dbeafe'/%3E%3Ccircle cx='15' cy='15' r='10' fill='%233b82f6'/%3E%3C/svg%3E`,x:`0`,y:`0`,width:`30`,height:`30`,result:`tile-src`}),(0,i.jsx)(`feTile`,{in:`tile-src`,result:`tiled`}),(0,i.jsx)(`feComposite`,{in:`tiled`,in2:`SourceGraphic`,operator:`in`})]})}),(0,i.jsx)(`circle`,{cx:`60`,cy:`60`,r:`52`,fill:`white`,filter:`url(#f-tile)`})]})},{name:`feTurbulence`,description:`Generates Perlin noise / fractal turbulence textures`,category:`Texture`,demo:()=>(0,i.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 120 120`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,i.jsxs)(`defs`,{children:[(0,i.jsxs)(`filter`,{id:`f-turbulence-water`,x:`0%`,y:`0%`,width:`100%`,height:`100%`,children:[(0,i.jsx)(`feTurbulence`,{type:`turbulence`,baseFrequency:`0.015 0.04`,numOctaves:`4`,seed:`5`,result:`noise`}),(0,i.jsx)(`feColorMatrix`,{type:`matrix`,values:`0 0 0 0 0.1\r
                      0 0 0 0 0.5\r
                      0 0 0 0 0.9\r
                      0 0 0 1 0`,in:`noise`})]}),(0,i.jsxs)(`filter`,{id:`f-turbulence-fire`,x:`0%`,y:`0%`,width:`100%`,height:`100%`,children:[(0,i.jsx)(`feTurbulence`,{type:`fractalNoise`,baseFrequency:`0.05 0.1`,numOctaves:`3`,seed:`12`,result:`noise`}),(0,i.jsx)(`feColorMatrix`,{type:`matrix`,values:`2 0 0 0 0\r
                      0.5 0 0 0 0\r
                      0 0 0 0 0\r
                      0 0 0 1 0`,in:`noise`})]})]}),(0,i.jsx)(`rect`,{x:`5`,y:`5`,width:`52`,height:`110`,rx:`6`,filter:`url(#f-turbulence-water)`}),(0,i.jsx)(`rect`,{x:`63`,y:`5`,width:`52`,height:`110`,rx:`6`,filter:`url(#f-turbulence-fire)`}),(0,i.jsx)(`text`,{x:`31`,y:`118`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`water`}),(0,i.jsx)(`text`,{x:`89`,y:`118`,textAnchor:`middle`,fontSize:`8`,fill:`#888`,children:`fire`})]})}],o={Compositing:{bg:`#ede9fe`,text:`#5b21b6`},Color:{bg:`#fce7f3`,text:`#9d174d`},Matrix:{bg:`#dbeafe`,text:`#1e40af`},Lighting:{bg:`#fef3c7`,text:`#92400e`},Distortion:{bg:`#d1fae5`,text:`#065f46`},Shadow:{bg:`#e0e7ff`,text:`#3730a3`},Input:{bg:`#fee2e2`,text:`#991b1b`},Morphology:{bg:`#ccfbf1`,text:`#0f766e`},Geometry:{bg:`#fff7ed`,text:`#9a3412`},Texture:{bg:`#f3f4f6`,text:`#374151`},Blur:{bg:`#eff6ff`,text:`#1e40af`}},s=()=>{let[e,t]=(0,r.useState)(null),[n,s]=(0,r.useState)(`All`),c=[`All`,...Array.from(new Set(a.map(e=>e.category)))],u=n===`All`?a:a.filter(e=>e.category===n),d=e===null?null:a[e];return(0,i.jsxs)(`div`,{style:{fontFamily:`'Segoe UI', system-ui, sans-serif`,background:`#0f172a`,minHeight:`100vh`,color:`#e2e8f0`,padding:`24px`},children:[(0,i.jsxs)(`div`,{style:{marginBottom:28},children:[(0,i.jsx)(`h1`,{style:{fontSize:28,fontWeight:700,margin:0,color:`#f8fafc`,letterSpacing:`-0.5px`},children:`SVG Filter Primitives`}),(0,i.jsx)(`p`,{style:{fontSize:14,color:`#94a3b8`,margin:`6px 0 0`},children:`All 21 filter primitives — click any card for details & code`})]}),(0,i.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,marginBottom:20},children:c.map(e=>(0,i.jsx)(`button`,{onClick:()=>s(e),style:{padding:`5px 14px`,borderRadius:20,border:`1px solid`,borderColor:n===e?`#818cf8`:`#334155`,background:n===e?`#4f46e5`:`transparent`,color:n===e?`#fff`:`#94a3b8`,fontSize:12,cursor:`pointer`,fontWeight:500,transition:`all 0.15s`},children:e},e))}),(0,i.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:14},children:u.map(n=>{let r=a.indexOf(n),s=e===r,c=o[n.category]||{bg:`#f3f4f6`,text:`#374151`};return(0,i.jsxs)(`div`,{onClick:()=>t(s?null:r),style:{background:`#1e293b`,border:s?`1.5px solid #818cf8`:`1.5px solid #334155`,borderRadius:14,padding:`16px 14px 12px`,cursor:`pointer`,transition:`all 0.15s`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:10},children:[(0,i.jsx)(`div`,{style:{background:`#0f172a`,borderRadius:10,padding:4,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,i.jsx)(n.demo,{})}),(0,i.jsxs)(`div`,{style:{width:`100%`},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:6},children:[(0,i.jsx)(`span`,{style:{fontFamily:`monospace`,fontSize:13,fontWeight:600,color:`#a5b4fc`},children:n.name}),(0,i.jsx)(`span`,{style:{fontSize:10,padding:`2px 7px`,borderRadius:20,background:c.bg,color:c.text,fontWeight:600,whiteSpace:`nowrap`,flexShrink:0},children:n.category})]}),(0,i.jsx)(`p`,{style:{fontSize:11.5,color:`#94a3b8`,margin:`5px 0 0`,lineHeight:1.5},children:n.description})]})]},n.name)})}),d&&(0,i.jsxs)(`div`,{style:{marginTop:24,background:`#1e293b`,border:`1.5px solid #334155`,borderRadius:16,padding:24},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:16},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`span`,{style:{fontFamily:`monospace`,fontSize:20,fontWeight:700,color:`#818cf8`},children:[`<`,d.name,`>`]}),(0,i.jsx)(`p`,{style:{fontSize:13,color:`#94a3b8`,margin:`4px 0 0`},children:d.description})]}),(0,i.jsx)(`button`,{onClick:()=>t(null),style:{background:`transparent`,border:`1px solid #475569`,borderRadius:8,color:`#94a3b8`,padding:`4px 12px`,cursor:`pointer`,fontSize:12},children:`close ✕`})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,i.jsx)(`div`,{style:{background:`#0f172a`,borderRadius:12,padding:16,display:`flex`,alignItems:`center`,justifyContent:`center`,minWidth:150},children:(0,i.jsx)(d.demo,{})}),(0,i.jsxs)(`div`,{style:{flex:1,minWidth:280},children:[(0,i.jsx)(`p`,{style:{fontSize:12,color:`#64748b`,margin:`0 0 8px`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`Example Usage`}),(0,i.jsx)(l,{name:d.name})]})]})]})]})},c={feBlend:`<filter id="blend-filter">
  <feFlood floodColor="orange" result="flood" />
  <feComposite in="flood" in2="SourceGraphic"
    operator="in" result="colored" />
  <feBlend in="SourceGraphic"
    in2="colored" mode="multiply" />
</filter>`,feColorMatrix:`<filter id="grayscale">
  <feColorMatrix type="matrix"
    values="0.33 0.33 0.33 0 0
            0.33 0.33 0.33 0 0
            0.33 0.33 0.33 0 0
            0    0    0    1 0" />
</filter>
{/* type: matrix | saturate | hueRotate | luminanceToAlpha */}`,feComponentTransfer:`<filter id="brightness-contrast">
  <feComponentTransfer>
    <feFuncR type="gamma" amplitude="1"
      exponent="0.4" offset="0" />
    <feFuncG type="linear" slope="1.2"
      intercept="0.05" />
    <feFuncB type="linear" slope="0.8" />
    <feFuncA type="identity" />
  </feComponentTransfer>
</filter>`,feComposite:`<filter id="xor-composite">
  <feFlood floodColor="#6366f1" result="flood" />
  <feComposite in="flood" in2="SourceGraphic"
    operator="xor" />
</filter>
{/* operators: over|in|out|atop|xor|arithmetic */}`,feConvolveMatrix:`<filter id="emboss">
  <feConvolveMatrix order="3"
    kernelMatrix="-2 -1 0
                  -1  1 1
                   0  1 2"
    bias="0.5" />
</filter>
{/* Edge detect, sharpen, blur via kernel */}`,feDiffuseLighting:`<filter id="diffuse-light">
  <feDiffuseLighting lightingColor="white"
    diffuseConstant="1.5" surfaceScale="5">
    <fePointLight x="50" y="30" z="80" />
  </feDiffuseLighting>
</filter>
{/* Matte/flat surface appearance */}`,feDisplacementMap:`<filter id="displace">
  <feTurbulence baseFrequency="0.05"
    numOctaves="2" result="noise" />
  <feDisplacementMap in="SourceGraphic"
    in2="noise" scale="20"
    xChannelSelector="R"
    yChannelSelector="G" />
</filter>`,feDistantLight:`<filter id="sun-light">
  <feDiffuseLighting lightingColor="#fde68a"
    diffuseConstant="1.2" surfaceScale="5">
    <feDistantLight azimuth="45"
      elevation="55" />
  </feDiffuseLighting>
</filter>
{/* azimuth: compass °, elevation: height ° */}`,feDropShadow:`<filter id="shadow">
  <feDropShadow
    dx="6" dy="6"
    stdDeviation="4"
    floodColor="#1e40af"
    floodOpacity="0.5" />
</filter>
{/* Shorthand for blur+offset+merge shadow */}`,feFlood:`<filter id="tint">
  <feFlood floodColor="#f59e0b"
    floodOpacity="0.75" result="flood" />
  <feComposite in="flood"
    in2="SourceGraphic" operator="in" />
</filter>
{/* Used as color source in pipelines */}`,feGaussianBlur:`<filter id="blur">
  <feGaussianBlur stdDeviation="4" />
</filter>
{/* stdDeviation: blur radius (x y or single) */}
{/* edgeMode: duplicate|wrap|none */}`,feImage:`<filter id="image-texture">
  <feImage href="./texture.png"
    result="img"
    preserveAspectRatio="xMidYMid slice" />
  <feComposite in="img"
    in2="SourceGraphic" operator="in" />
</filter>`,feMerge:`<filter id="layered">
  <feGaussianBlur stdDeviation="4"
    result="blur" />
  <feOffset in="blur" dx="4" dy="4"
    result="shadow" />
  <feMerge>
    <feMergeNode in="shadow" />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>`,feMergeNode:`{/* feMergeNode is a child of feMerge */}
<feMerge>
  <feMergeNode in="shadow" />
  <feMergeNode in="colorOverlay" />
  <feMergeNode in="SourceGraphic" />
</feMerge>
{/* Each node = one layer in the stack */}`,feMorphology:`<filter id="fatten">
  <feMorphology operator="dilate"
    radius="2" />
</filter>
<filter id="thin">
  <feMorphology operator="erode"
    radius="2" />
</filter>
{/* operator: erode | dilate */}`,feOffset:`<filter id="offset-shadow">
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
</filter>`,fePointLight:`<filter id="point-light">
  <feDiffuseLighting lightingColor="white"
    diffuseConstant="1.5" surfaceScale="6">
    <fePointLight x="50" y="30" z="80" />
  </feDiffuseLighting>
</filter>
{/* x y z: 3D position in filter space */}`,feSpecularLighting:`<filter id="shiny">
  <feSpecularLighting surfaceScale="5"
    specularConstant="1.5"
    specularExponent="20"
    lightingColor="white">
    <fePointLight x="50" y="20" z="90" />
  </feSpecularLighting>
</filter>
{/* Higher exponent = tighter highlight */}`,feSpotLight:`<filter id="spotlight">
  <feDiffuseLighting lightingColor="#fde68a"
    diffuseConstant="1.5" surfaceScale="6">
    <feSpotLight x="30" y="10" z="80"
      pointsAtX="60" pointsAtY="65"
      limitingConeAngle="30"
      specularExponent="5" />
  </feDiffuseLighting>
</filter>`,feTile:`<filter id="tile-pattern">
  <feImage href="./tile.svg"
    x="0" y="0" width="30" height="30"
    result="tile-src" />
  <feTile in="tile-src" result="tiled" />
  <feComposite in="tiled"
    in2="SourceGraphic" operator="in" />
</filter>`,feTurbulence:`<filter id="noise">
  <feTurbulence
    type="turbulence"
    baseFrequency="0.015 0.04"
    numOctaves="4"
    seed="5" />
</filter>
{/* type: turbulence | fractalNoise */}
{/* seed: changes the noise pattern */}`},l=({name:e})=>{let[t,n]=(0,r.useState)(!1),a=c[e]||`// No example available`;return(0,i.jsxs)(`div`,{style:{position:`relative`},children:[(0,i.jsx)(`pre`,{style:{background:`#0f172a`,border:`1px solid #334155`,borderRadius:10,padding:`14px 16px`,fontSize:12,lineHeight:1.65,color:`#7dd3fc`,overflowX:`auto`,margin:0,whiteSpace:`pre-wrap`},children:a}),(0,i.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(a),n(!0),setTimeout(()=>n(!1),2e3)},style:{position:`absolute`,top:10,right:10,background:t?`#16a34a`:`#334155`,border:`none`,borderRadius:6,color:`#e2e8f0`,fontSize:11,padding:`3px 10px`,cursor:`pointer`,transition:`background 0.2s`},children:t?`Copied!`:`Copy`})]})};export{s as default};