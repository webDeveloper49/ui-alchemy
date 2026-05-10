import{r as e,t}from"./jsx-runtime-DAs1UGHr.js";import{t as n}from"./react-BRPyh-lz.js";import{A as r,C as i,D as a,K as o,L as s,M as c,N as l,O as u,R as d,S as f,T as p,U as m,W as h,_ as g,a as _,d as v,f as y,g as b,i as x,j as S,l as C,m as ee,n as w,o as T,p as te,r as E,s as D,t as O,u as k,v as A,w as ne,y as j,z as M}from"./three.module-Bx2LsOEq.js";var N=e(n(),1),P=t(),F={bg:`#06060f`,surface:`#0c0c1e`,card:`#0f0f22`,border:`#1a1a3a`,cyan:`#00f5ff`,magenta:`#ff00cc`,lime:`#00ff88`,orange:`#ff6d00`,purple:`#9b00ff`,yellow:`#ffe500`,pink:`#ff2d6b`,blue:`#2979ff`,teal:`#00e5cc`,text:`#e8e8ff`,muted:`#6b6b9a`,dim:`#3a3a5c`};function I(e){let t=(0,N.useRef)(null);return(0,N.useEffect)(()=>{if(!t.current)return;let n=t.current,r=n.clientWidth,i=n.clientHeight||220,a=new s,o=new u(60,r/i,.1,100);o.position.z=5;let c=new O({antialias:!0,alpha:!0});c.setSize(r,i),c.setClearColor(0,0),n.appendChild(c.domElement);let l=e(a,o,c,r,i);return()=>{l?.(),c.dispose(),n.contains(c.domElement)&&n.removeChild(c.domElement)}},[e]),t}function L(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(394767),t.position.z=3.5;let r=new E(1.5,1.5,1.5),i=new f(r,new p({color:62975,metalness:.8,roughness:.2,emissive:new T(13124)}));i.add(new j(new v(r),new A({color:65535}))),e.add(i),e.add(new S(62975,3,20)),e.add(new w(1118515));let a,o=()=>{a=requestAnimationFrame(o),i.rotation.x+=.01,i.rotation.y+=.013,n.render(e,t)};return o(),()=>cancelAnimationFrame(a)}),style:{width:`100%`,height:220}})}function R(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(131592),t.position.set(0,2,6);let r=4e3,i=new Float32Array(r*3),a=new Float32Array(r*3);for(let e=0;e<r;e++){let t=Math.random()*4,n=t*3,r=e%3/3*Math.PI*2,o=(Math.random()-.5)*.4;i[e*3]=Math.cos(r+n)*t+o,i[e*3+1]=o*.3,i[e*3+2]=Math.sin(r+n)*t+o;let s=t/4;a[e*3]=1-s*.4,a[e*3+1]=1-s*.7,a[e*3+2]=1}let o=new _;o.setAttribute(`position`,new x(i,3)),o.setAttribute(`color`,new x(a,3));let s=new c(o,new l({size:.025,vertexColors:!0}));e.add(s);let u,d=()=>{u=requestAnimationFrame(d),s.rotation.y+=.001,n.render(e,t)};return d(),()=>cancelAnimationFrame(u)}),style:{width:`100%`,height:220}})}function z(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(197392),e.fog=new y(197392,6,18),t.position.set(0,2,6);let r=new f(new h(1.4,.4,32,100),new p({color:65416,emissive:new T(17442),roughness:.1,metalness:.9}));e.add(r);let i=new ee(20,30,65416,13073);i.position.y=-2,e.add(i),e.add(new S(65416,3,12)),e.add(new w(1122833,.5));let a=0,o,s=()=>{o=requestAnimationFrame(s),a+=.02,r.rotation.x=a*.5,r.rotation.y=a*.3,r.position.y=Math.sin(a)*.5,n.render(e,t)};return s(),()=>cancelAnimationFrame(o)}),style:{width:`100%`,height:220}})}function B(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(328965),t.position.z=4;let r=new ne({shininess:200,specular:new T(16777215)}),i=new f(new M(1.5,64,64),r);e.add(i);let a=new S(16777215,3,20);e.add(a),e.add(new w(1118481));let o=0,s,c=new T,l=()=>{s=requestAnimationFrame(l),o+=.008,c.setHSL(o*.1%1,1,.5),r.color=c,r.emissive.setHSL((o*.1+.5)%1,1,.04),a.color.setHSL((o*.1+.3)%1,1,.5),a.position.x=Math.cos(o)*3,a.position.z=Math.sin(o)*3,i.rotation.y+=.005,n.render(e,t)};return l(),()=>cancelAnimationFrame(s)}),style:{width:`100%`,height:220}})}function V(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(263176),t.position.set(0,0,12);let r=[62975,16711935,65416,16776960,16737792,12517631],i=[new E(1,1,1),new M(.6,16,16),new h(.6,.2,8,24),new D(.6,1.2,8),new a(.7),new m(.8)],o=[];for(let t=0;t<12;t++){let n=new f(i[t%6],new p({color:r[t%6],emissive:new T(r[t%6]),emissiveIntensity:.15,metalness:.7,roughness:.2,wireframe:t%3==0})),a=t/12*Math.PI*2;n.position.set(Math.cos(a)*4,Math.sin(t*1.3)*2,Math.sin(a)*4),n.userData.speed=.01+Math.random()*.02,n.userData.phase=t,e.add(n),o.push(n)}e.add(new w(3355443));let s=new k(16777215,1);s.position.set(5,5,5),e.add(s);let c=0,l,u=()=>{l=requestAnimationFrame(u),c+=.01,o.forEach(e=>{e.rotation.x+=e.userData.speed,e.rotation.y+=e.userData.speed*.7,e.position.y=Math.sin(c+e.userData.phase)*2}),e.rotation.y+=.003,n.render(e,t)};return u(),()=>cancelAnimationFrame(l)}),style:{width:`100%`,height:220}})}function H(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(65800),t.position.set(0,4,14),t.lookAt(0,0,0);let r=[];for(let t=0;t<48;t++){let n=t/48,i=new f(new E(.35,1,.35),new p({color:new T().setHSL(n,1,.5),emissive:new T().setHSL(n,1,.1),metalness:.5,roughness:.3})),a=t/48*Math.PI*2;i.position.x=Math.cos(a)*5,i.position.z=Math.sin(a)*5,i.lookAt(0,0,0),e.add(i),r.push(i)}e.add(new w(2236996)),e.add(new S(62975,2,20));let i=0,a,o=()=>{a=requestAnimationFrame(o),i+=.02,r.forEach((e,t)=>{let n=.2+(.3+.7*Math.abs(Math.sin(i*2+t*.25+Math.sin(i+t*.1))))*4;e.scale.y+=(n-e.scale.y)*.2,e.position.y=e.scale.y/2}),e.rotation.y+=.004,n.render(e,t)};return o(),()=>cancelAnimationFrame(a)}),style:{width:`100%`,height:220}})}function U(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(8),t.position.set(0,10,18),t.lookAt(0,0,0);let r=new f(new M(1.5,32,32),new i({color:16763904}));e.add(r),e.add(new S(16777215,2,100)),e.add(new w(1118498));let a=[{r:.3,dist:3.5,speed:4,color:8947848},{r:.5,dist:5.5,speed:1.6,color:16755268},{r:.55,dist:7.5,speed:1,color:4487167},{r:.35,dist:9.5,speed:.53,color:16729122},{r:1.1,dist:13,speed:.08,color:16768392}].map(t=>{let n=new f(new M(t.r,16,16),new p({color:t.color,roughness:.7})),r=new g(new _().setFromPoints(Array.from({length:128},(e,n)=>{let r=n/127*Math.PI*2;return new o(Math.cos(r)*t.dist,0,Math.sin(r)*t.dist)})),new A({color:2236996}));return e.add(r),e.add(n),{...t,mesh:n,angle:Math.random()*Math.PI*2}}),s=new _,u=new Float32Array(3e3).map(()=>(Math.random()-.5)*200);s.setAttribute(`position`,new x(u,3)),e.add(new c(s,new l({color:16777215,size:.2})));let d,m=()=>{d=requestAnimationFrame(m),a.forEach(e=>{e.angle+=.001*e.speed,e.mesh.position.x=Math.cos(e.angle)*e.dist,e.mesh.position.z=Math.sin(e.angle)*e.dist,e.mesh.rotation.y+=.02}),r.rotation.y+=.002,n.render(e,t)};return m(),()=>cancelAnimationFrame(d)}),style:{width:`100%`,height:220}})}function W(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(328976),t.position.z=8;let r=[],i=[new E(1.2,1.2,1.2),new M(.7,32,32),new D(.7,1.4,32),new h(.7,.25,16,64),new a(.8),new m(.9)];for(let t=0;t<6;t++){let n=new f(i[t],new p({color:3359829,metalness:.6,roughness:.3}));n.position.x=(t%3-1)*3,n.position.y=t<3?1.5:-1.5,e.add(n),r.push(n)}e.add(new w(2236979));let o=new k(16777215,1.5);o.position.set(5,5,5),e.add(o);let s=null,c,l=0,u=setInterval(()=>{s&&(s.material.color.setHex(3359829),s.material.emissive.setHex(0)),s=r[l%r.length],l++,s.material.color.setHex(16711884)},700),d=()=>{c=requestAnimationFrame(d),r.forEach((e,t)=>{e.rotation.y+=.01+t*.002}),n.render(e,t)};return d(),()=>{cancelAnimationFrame(c),clearInterval(u)}}),style:{width:`100%`,height:220}})}function G(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(133136),e.fog=new te(133136,.035),t.position.set(0,5,10),t.lookAt(0,0,0);let i=new r(20,20,80,80);i.rotateX(-Math.PI/2);let a=i.attributes.position,o=new Float32Array(a.count*3),s=new T;for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getZ(e),r=Math.sin(t*.5)*Math.cos(n*.5)*2+Math.sin(t*1.3+.5)*Math.cos(n*1.1)*1+Math.sin(t*2.7)*Math.cos(n*2.3+1)*.5;a.setY(e,r);let i=(r+3)/6;i<.3?s.set(17663):i<.4?s.set(16763972):i<.7?s.set(43554):s.set(16777215),o[e*3]=s.r,o[e*3+1]=s.g,o[e*3+2]=s.b}i.setAttribute(`color`,new x(o,3)),i.computeVertexNormals(),e.add(new f(i,new p({vertexColors:!0,roughness:.8}))),e.add(new k(16772829,2)),e.add(new w(1122867,.8));let c,l=()=>{c=requestAnimationFrame(l),t.position.x=Math.sin(Date.now()*3e-4)*6,t.lookAt(0,1,0),n.render(e,t)};return l(),()=>cancelAnimationFrame(c)}),style:{width:`100%`,height:220}})}function K(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(65800),t.position.set(0,3,6),t.lookAt(0,0,0);let i=new r(10,10,128,128);i.rotateX(-Math.PI/2);let a={uTime:{value:0}},o=new d({uniforms:a,side:2,vertexShader:`uniform float uTime;varying float vElevation;void main(){vec4 mp=modelMatrix*vec4(position,1.0);float e=sin(mp.x*3.0+uTime)*0.3+sin(mp.z*4.0+uTime*1.5)*0.15;mp.y+=e;vElevation=e;gl_Position=projectionMatrix*viewMatrix*mp;}`,fragmentShader:`varying float vElevation;void main(){float t=(vElevation+0.45)/0.9;vec3 a=vec3(0.0,0.1,0.8),b=vec3(0.0,1.0,0.8);gl_FragColor=vec4(mix(a,b,t),1.0);}`});e.add(new f(i,o)),e.add(new w(1118481));let s,c=()=>{s=requestAnimationFrame(c),a.uTime.value+=.03,n.render(e,t)};return c(),()=>cancelAnimationFrame(s)}),style:{width:`100%`,height:220}})}function q(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(131602),t.position.set(4,0,8),t.lookAt(0,0,0);for(let t=0;t<60;t++){let n=t/60*Math.PI*8-Math.PI*4,r=t/60*8-4;if([1,-1].forEach((t,i)=>{let a=new f(new M(.12,12,12),new p({color:i===0?62975:16711884,emissive:new T(i===0?13124:3342370),metalness:.7,roughness:.2}));a.position.set(Math.cos(n)*1.2*t,r,Math.sin(n)*1.2*t),e.add(a)}),t%4==0){let t=new f(new C(.04,.04,2.4,8),new p({color:8947848,metalness:.5}));t.position.set(0,r,0),t.rotation.z=Math.PI/2,t.rotation.x=n,e.add(t)}}e.add(new S(62975,2,20)),e.add(new S(16711884,2,20)),e.add(new w(1118498));let r,i=()=>{r=requestAnimationFrame(i),e.rotation.y+=.005,n.render(e,t)};return i(),()=>cancelAnimationFrame(r)}),style:{width:`100%`,height:220}})}function J(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(524304),t.position.z=4;let r=new b(1.5,5),a=new f(r,new p({color:10158335,emissive:new T(2228292),metalness:.3,roughness:.4}));e.add(a),e.add(new f(r,new i({color:12517631,wireframe:!0,transparent:!0,opacity:.15})));let o=r.attributes.position.array.slice();e.add(new S(10158335,3,15)),e.add(new S(62975,1.5,15)),e.add(new w(1114146));let s=0,c,l=r.attributes.position,u=()=>{c=requestAnimationFrame(u),s+=.015;for(let e=0;e<l.count;e++){let t=o[e*3],n=o[e*3+1],r=o[e*3+2],i=1+Math.sin(t*2+s)*Math.cos(n*2.5+s*1.1)*Math.sin(r*1.8+s*.9)*.25;l.setXYZ(e,t*i,n*i,r*i)}l.needsUpdate=!0,r.computeVertexNormals(),a.rotation.y+=.007,n.render(e,t)};return u(),()=>cancelAnimationFrame(c)}),style:{width:`100%`,height:220}})}function Y(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(2048),t.position.set(0,0,0);let r=Array.from({length:20},(t,n)=>{let r=new f(new h(2+Math.random()*.5,.03+Math.random()*.05,6,60),new i({color:new T().setHSL(.35,1,.3+Math.random()*.4),transparent:!0,opacity:.7}));return r.position.z=-n*3,r.rotation.x=Math.PI/2,r.userData={speed:.02+Math.random()*.01},e.add(r),r}),a=new Float32Array(1e3*3);for(let e=0;e<1e3;e++)a[e*3]=(Math.random()-.5)*4,a[e*3+1]=(Math.random()-.5)*4,a[e*3+2]=Math.random()*-60;let o=new _;o.setAttribute(`position`,new x(a,3)),e.add(new c(o,new l({color:65348,size:.04})));let s,u=()=>{s=requestAnimationFrame(u),r.forEach(e=>{e.position.z+=e.userData.speed,e.rotation.z+=.003,e.position.z>4&&(e.position.z=-55)}),t.rotation.z+=.002,n.render(e,t)};return u(),()=>cancelAnimationFrame(s)}),style:{width:`100%`,height:220}})}function X(){return(0,P.jsx)(`div`,{ref:I((e,t,n)=>{e.background=new T(393224),t.position.set(0,0,12);let r=[62975,16711884,65416,16770304,16739584,10158335],i=Array.from({length:12},(t,n)=>{let i=new f(new M(.3+Math.random()*.3,20,20),new p({color:r[n%6],emissive:new T(r[n%6]),emissiveIntensity:.3,metalness:.7,roughness:.2}));return i.position.set((Math.random()-.5)*8,(Math.random()-.5)*6,(Math.random()-.5)*2),i.userData={vx:(Math.random()-.5)*.04,vy:(Math.random()-.5)*.04,mass:.3+Math.random()*.3},e.add(i),i});e.add(new w(1118481)),e.add(new S(16777215,2,30));let a,o=()=>{a=requestAnimationFrame(o),i.forEach((e,t)=>{let n=e.userData;i.forEach((r,i)=>{if(t===i)return;let a=r.position.x-e.position.x,o=r.position.y-e.position.y,s=Math.sqrt(a*a+o*o)+.5,c=r.userData,l=2e-4*n.mass*c.mass/(s*s);n.vx+=a/s*l,n.vy+=o/s*l}),e.position.x+=n.vx,e.position.y+=n.vy,n.vx*=.999,n.vy*=.999,Math.abs(e.position.x)>5&&(n.vx*=-1),Math.abs(e.position.y)>4&&(n.vy*=-1)}),n.render(e,t)};return o(),()=>cancelAnimationFrame(a)}),style:{width:`100%`,height:220}})}var Z=[{id:1,level:`Beginner`,title:`Spinning Neon Cube`,color:F.cyan,preview:L,tagline:`Your very first Three.js scene — a glowing rotating box with wireframe edges.`,concepts:[`Scene / Camera / Renderer`,`BoxGeometry`,`MeshStandardMaterial`,`EdgesGeometry`,`Animation loop`],steps:[{title:`Mount the canvas`,body:`Create a div with a ref. In useEffect, read its clientWidth / clientHeight to size the renderer correctly to the container.`},{title:`Build the scene stack`,body:`Instantiate Scene (dark background), PerspectiveCamera (fov 75, position z=3.5), and WebGLRenderer (antialias: true). Append renderer.domElement to the ref div.`},{title:`Create the cube`,body:`new THREE.BoxGeometry(1.5,1.5,1.5) + MeshStandardMaterial with cyan color, metalness 0.8, roughness 0.2, and an emissive tint for self-glow.`},{title:`Add wireframe edges`,body:`new THREE.EdgesGeometry(boxGeo) → new THREE.LineSegments(edges, LineBasicMaterial). Call cube.add(wireframe) so it rotates with the parent mesh.`},{title:`Light it`,body:`PointLight (cyan, intensity 3) at (3,3,3) + dim AmbientLight so dark faces aren't pitch black. StandardMaterial requires light to be visible.`},{title:`Animate`,body:`In the requestAnimationFrame loop: cube.rotation.x += 0.01; cube.rotation.y += 0.013; renderer.render(scene, camera). Store the ID and cancel on React unmount.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeonCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00f5ff, emissive: new THREE.Color(0x003344),
      metalness: 0.8, roughness: 0.2,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x00ffff })
    ));

    const point = new THREE.PointLight(0x00f5ff, 3, 20);
    point.position.set(3, 3, 3);
    scene.add(point, new THREE.AmbientLight(0x111133));

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.013;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`},{id:2,level:`Beginner`,title:`Galaxy of Particles`,color:F.magenta,preview:R,tagline:`5,000 particles in a spiral galaxy using BufferGeometry and per-vertex colors.`,concepts:[`BufferGeometry`,`Float32Array`,`Points + PointsMaterial`,`Vertex colors`,`Spiral math`],steps:[{title:`Allocate typed arrays`,body:`Float32Array of size count×3 for positions and colors. Typed arrays are what the GPU understands natively — far faster than regular JS arrays.`},{title:`Spiral galaxy formula`,body:`For each particle: radius = random(0–4). spinAngle = radius×3. branchAngle = (arm/3)*PI*2 (3 arms). x = cos(branch+spin)*radius + scatter.`},{title:`Color gradient`,body:`t = radius/maxRadius. Set RGB so inner stars are white-blue and outer stars are cooler purple-blue. colors are also a Float32Array with r,g,b per vertex.`},{title:`Build BufferGeometry`,body:`geo.setAttribute('position', new THREE.BufferAttribute(positions, 3)). The '3' means 3 floats per vertex. Same for the color attribute.`},{title:`Create Points object`,body:`new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.02, vertexColors: true })). Add to scene.`},{title:`Rotate slowly`,body:`galaxy.rotation.y += 0.001 each frame for a slow, majestic galactic spin.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Galaxy() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020208);
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
    camera.position.set(0, 2, 5);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius      = Math.random() * 4;
      const spinAngle   = radius * 3;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      const scatter     = (Math.random() - 0.5) * 0.4;

      positions[i * 3]     = Math.cos(branchAngle + spinAngle) * radius + scatter;
      positions[i * 3 + 1] = scatter * 0.3;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + scatter;

      const t = radius / 4;
      colors[i * 3] = 1 - t * 0.4;
      colors[i * 3 + 1] = 1 - t * 0.7;
      colors[i * 3 + 2] = 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const galaxy = new THREE.Points(geometry,
      new THREE.PointsMaterial({ size: 0.02, vertexColors: true }));
    scene.add(galaxy);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      galaxy.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`},{id:3,level:`Beginner`,title:`Floating Neon Torus`,color:F.lime,preview:z,tagline:`A glowing donut that bobs and rotates above a neon grid floor with fog.`,concepts:[`TorusGeometry`,`Math.sin() motion`,`GridHelper`,`Fog`,`Emissive glow`],steps:[{title:`Create the torus`,body:`new THREE.TorusGeometry(1.4, 0.4, 32, 100). First arg is ring radius, second is tube thickness. More segments = smoother surface.`},{title:`Add a grid floor`,body:`new THREE.GridHelper(20, 30, primaryColor, secondaryColor). Set grid.position.y = -2 to place it below the torus.`},{title:`Add fog`,body:`scene.fog = new THREE.Fog(bgColor, near=5, far=18). Fog color MUST match scene.background for seamless blending at the horizon.`},{title:`Emissive glow`,body:`material.emissive = 0x004422. The emissive channel glows regardless of external lights — it creates the neon look.`},{title:`Organic float`,body:`Track variable t. Each frame: torus.position.y = Math.sin(t) * 0.5. Sine wave oscillates smoothly between -0.5 and +0.5.`},{title:`Compound rotation`,body:`torus.rotation.x = t * 0.5; torus.rotation.y = t * 0.3. Different multipliers give an interesting non-repeating tumble.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeonTorus() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030310);
    scene.fog = new THREE.Fog(0x030310, 5, 18);

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.set(0, 2, 6);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1.4, 0.4, 32, 100),
      new THREE.MeshStandardMaterial({
        color: 0x00ff88, emissive: new THREE.Color(0x004422),
        roughness: 0.1, metalness: 0.9,
      })
    );
    scene.add(torus);

    const grid = new THREE.GridHelper(20, 30, 0x00ff88, 0x003311);
    grid.position.y = -2;
    scene.add(grid);

    scene.add(new THREE.PointLight(0x00ff88, 3, 12));
    scene.add(new THREE.AmbientLight(0x112211, 0.5));

    let t = 0, animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.02;
      torus.rotation.x = t * 0.5;
      torus.rotation.y = t * 0.3;
      torus.position.y = Math.sin(t) * 0.5;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`},{id:4,level:`Beginner`,title:`Color-Changing Sphere`,color:F.orange,preview:B,tagline:`HSL hue-cycling sphere with an orbiting light that shifts complementary colors.`,concepts:[`SphereGeometry`,`Color.setHSL()`,`MeshPhongMaterial`,`Orbiting lights`,`Dynamic color update`],steps:[{title:`High-res sphere`,body:`new THREE.SphereGeometry(1.5, 64, 64). 64×64 segments give a perfectly smooth sphere that shows specular highlights beautifully.`},{title:`MeshPhongMaterial`,body:`shininess: 200 and specular: new THREE.Color(0xffffff) create a sharp mirror-like highlight that moves as the light orbits.`},{title:`HSL color model`,body:`Hue (0–1) = wheel position. Saturation = vividness. Lightness = brightness. setHSL((t*0.1)%1, 1, 0.5) cycles every color at full saturation.`},{title:`Wrap with modulo`,body:`(t * 0.1) % 1 keeps the hue in 0–1 range. When it hits 1 it wraps back to 0 — seamlessly cycling through the full rainbow.`},{title:`Orbit the light`,body:`pointLight.position.x = cos(t)*3; pointLight.position.z = sin(t)*3. The light circles the sphere, making the specular highlight sweep around.`},{title:`Offset light color`,body:`pointLight.color.setHSL((t*0.1+0.3)%1, 1, 0.5). Offset 0.3 gives a complementary color — the light color and sphere color are always harmonious.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ChromaSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const material = new THREE.MeshPhongMaterial({
      shininess: 200,
      specular: new THREE.Color(0xffffff),
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.5, 64, 64), material));

    const pointLight = new THREE.PointLight(0xffffff, 3, 20);
    scene.add(pointLight, new THREE.AmbientLight(0x111111));

    let t = 0, animId: number;
    const color = new THREE.Color();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.008;
      color.setHSL((t * 0.1) % 1, 1, 0.5);
      material.color = color;
      material.emissive.setHSL((t * 0.1 + 0.5) % 1, 1, 0.04);
      pointLight.color.setHSL((t * 0.1 + 0.3) % 1, 1, 0.5);
      pointLight.position.x = Math.cos(t) * 3;
      pointLight.position.y = Math.sin(t * 0.7) * 2;
      pointLight.position.z = Math.sin(t) * 3;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`},{id:5,level:`Beginner`,title:`3D Shape Field`,color:F.purple,preview:V,tagline:`12 mixed geometries in a circle, each spinning independently with sine-wave height.`,concepts:[`Multiple meshes`,`mesh.userData`,`Mixed geometries`,`Sine wave per-object`,`scene.rotation`],steps:[{title:`Prepare arrays`,body:`Define 6 geometries and 6 neon colors. Loop 12 times, using i%6 to cycle through them.`},{title:`Arrange in a circle`,body:`angle = (i/12)*PI*2. x = cos(angle)*4; z = sin(angle)*4. This places all 12 meshes evenly around a circle of radius 4.`},{title:`Store per-object data`,body:`mesh.userData = { speed: 0.01+random*0.02, phase: i }. userData is a plain {} — you can store any custom data there for animation.`},{title:`Alternate wireframe`,body:`wireframe: i % 3 === 0 makes every third mesh render as wireframe, creating visual variety without extra code.`},{title:`Staggered sine wave`,body:`m.position.y = Math.sin(t + m.userData.phase) * 2. The phase offset staggers each mesh's vertical position, creating a Mexican wave effect.`},{title:`Rotate the whole scene`,body:`scene.rotation.y += 0.003. Cheaper than moving the camera and naturally shows all shapes from all sides.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ShapeUserData {
  speed: number;
  phase: number;
}

export default function ShapeField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040408);
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.set(0, 0, 12);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const colors = [0x00f5ff,0xff00ff,0x00ff88,0xffff00,0xff6600,0xbf00ff];
    const geos: THREE.BufferGeometry[] = [
      new THREE.BoxGeometry(1,1,1), new THREE.SphereGeometry(0.6,16,16),
      new THREE.TorusGeometry(0.6,0.2,8,24), new THREE.ConeGeometry(0.6,1.2,8),
      new THREE.OctahedronGeometry(0.7), new THREE.TetrahedronGeometry(0.8),
    ];
    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(geos[i % 6], new THREE.MeshStandardMaterial({
        color: colors[i%6], emissive: new THREE.Color(colors[i%6]),
        emissiveIntensity: 0.15, metalness: 0.7, roughness: 0.2,
        wireframe: i % 3 === 0,
      }));
      const angle = (i / 12) * Math.PI * 2;
      mesh.position.set(Math.cos(angle)*4, Math.sin(i*1.3)*2, Math.sin(angle)*4);
      mesh.userData = { speed: 0.01 + Math.random()*0.02, phase: i } as ShapeUserData;
      scene.add(mesh); meshes.push(mesh);
    }
    scene.add(new THREE.AmbientLight(0x333333));
    const dl = new THREE.DirectionalLight(0xffffff, 1);
    dl.position.set(5,5,5); scene.add(dl);

    let t = 0, animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate); t += 0.01;
      meshes.forEach(m => {
        const d = m.userData as ShapeUserData;
        m.rotation.x += d.speed; m.rotation.y += d.speed * 0.7;
        m.position.y = Math.sin(t + d.phase) * 2;
      });
      scene.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`},{id:6,level:`Intermediate`,title:`Audio Visualizer`,color:F.cyan,preview:H,tagline:`64 rainbow bars in a ring that pulse to real mic audio or a simulated wave.`,concepts:[`Web Audio API`,`AnalyserNode`,`Circular bar layout`,`Dynamic scale lerp`,`Fallback simulation`],steps:[{title:`64 bars in a ring`,body:`angle = (i/64)*PI*2. bar.position.x = cos(angle)*5; bar.position.z = sin(angle)*5. bar.lookAt(0,0,0) makes each bar face the center.`},{title:`Request microphone`,body:`navigator.mediaDevices.getUserMedia({audio:true}).then(stream => { new AudioContext → createMediaStreamSource → createAnalyser → connect }). analyser.fftSize = 128 gives 64 frequency bins.`},{title:`Read frequency data`,body:`analyser.getByteFrequencyData(dataArray) fills a Uint8Array(64) with 0–255 amplitude values each frame. Index i maps to bar i.`},{title:`Smooth with lerp`,body:`targetH = 0.2 + (data[i]/128)*4. bar.scale.y += (targetH - bar.scale.y) * 0.2. The 0.2 lerp factor makes bars ease toward target height, not snap.`},{title:`Keep base on floor`,body:`bar.position.y = bar.scale.y / 2. Scaling from center would make bars grow in both directions. Adjusting y keeps the base fixed at 0.`},{title:`Fallback simulation`,body:`If mic unavailable: val = 0.3 + 0.7 * |sin(t*2 + i*0.25)|. Creates a rolling wave pattern that looks convincingly audio-reactive.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AudioVisualizer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010108);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.set(0, 4, 14); camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const bars: THREE.Mesh[] = [];
    for (let i = 0; i < 64; i++) {
      const hue = i / 64;
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 1, 0.35),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(hue, 1, 0.5),
          emissive: new THREE.Color().setHSL(hue, 1, 0.1),
          metalness: 0.5, roughness: 0.3,
        })
      );
      const angle = (i / 64) * Math.PI * 2;
      bar.position.x = Math.cos(angle) * 5;
      bar.position.z = Math.sin(angle) * 5;
      bar.lookAt(0, 0, 0);
      scene.add(bar); bars.push(bar);
    }
    scene.add(new THREE.AmbientLight(0x222244), new THREE.PointLight(0x00f5ff, 2, 20));

    let analyser: AnalyserNode | undefined;
    let dataArray: Uint8Array | undefined;
    navigator.mediaDevices?.getUserMedia({ audio: true })
      .then(stream => {
        const ctx = new AudioContext();
        analyser = ctx.createAnalyser(); analyser.fftSize = 128;
        ctx.createMediaStreamSource(stream).connect(analyser);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      }).catch(() => {});

    let t = 0, animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate); t += 0.02;
      if (analyser && dataArray) analyser.getByteFrequencyData(dataArray);
      bars.forEach((bar, i) => {
        const val = analyser && dataArray
          ? dataArray[i % dataArray.length] / 128
          : 0.3 + 0.7 * Math.abs(Math.sin(t*2 + i*0.25));
        const target = 0.2 + val * 4;
        bar.scale.y += (target - bar.scale.y) * 0.2;
        bar.position.y = bar.scale.y / 2;
      });
      scene.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`},{id:7,level:`Intermediate`,title:`Solar System`,color:F.yellow,preview:U,tagline:`5 planets with orbital rings orbiting the sun. Drag to explore with OrbitControls.`,concepts:[`OrbitControls`,`Polar orbit math`,`Procedural ring lines`,`Star field`,`controls.update()`],steps:[{title:`OrbitControls`,body:`import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'. new OrbitControls(camera, renderer.domElement). MUST call controls.update() every frame.`},{title:`Enable damping`,body:`controls.enableDamping = true. This adds inertia — camera eases to a stop instead of stopping instantly. Required call: controls.update() inside animate().`},{title:`Planet data`,body:`Array of { r, dist, speed, color }. Give each a random starting angle so planets don't all start at the same position.`},{title:`Draw orbit rings`,body:`128 Vector3 points in a circle: pts = Array.from({length:128}, (_,i) => { a=(i/127)*PI*2; return new Vector3(cos(a)*dist, 0, sin(a)*dist); }). new THREE.Line(geo.setFromPoints(pts), mat).`},{title:`Orbit animation`,body:`Each frame: planet.angle += 0.001 * planet.speed. mesh.position.x = cos(angle)*dist; mesh.position.z = sin(angle)*dist.`},{title:`Star field background`,body:`3000 random points in ±150 units: Float32Array of random XYZ, BufferGeometry, PointsMaterial. Stars don't move — they form the fixed backdrop.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface PlanetData {
  r: number; dist: number; speed: number; color: number;
  mesh: THREE.Mesh; angle: number;
}

export default function SolarSystem() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 1000);
    camera.position.set(0, 12, 20);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(1.5,32,32),
      new THREE.MeshBasicMaterial({color:0xffcc00})
    );
    scene.add(sun, new THREE.PointLight(0xffffff,2,100), new THREE.AmbientLight(0x111122));

    const planetDefs = [
      {r:.3,dist:3.5,speed:4,color:0x888888},{r:.5,dist:5.5,speed:1.6,color:0xffaa44},
      {r:.55,dist:7.5,speed:1,color:0x4477ff},{r:.35,dist:9.5,speed:.53,color:0xff4422},
      {r:1.1,dist:13,speed:.08,color:0xffdd88},
    ];
    const planets: PlanetData[] = planetDefs.map(p => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(p.r,16,16),
        new THREE.MeshStandardMaterial({color:p.color,roughness:.7})
      );
      const pts = Array.from({length:128},(_,i) => {
        const a=(i/127)*Math.PI*2;
        return new THREE.Vector3(Math.cos(a)*p.dist,0,Math.sin(a)*p.dist);
      });
      scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({color:0x222244})
      ));
      scene.add(mesh);
      return {...p, mesh, angle: Math.random()*Math.PI*2};
    });

    const sv = new Float32Array(3000).map(()=>(Math.random()-.5)*300);
    const sg = new THREE.BufferGeometry();
    sg.setAttribute("position", new THREE.BufferAttribute(sv, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({color:0xffffff,size:.2})));

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      planets.forEach(p => {
        p.angle+=.001*p.speed;
        p.mesh.position.x=Math.cos(p.angle)*p.dist;
        p.mesh.position.z=Math.sin(p.angle)*p.dist;
        p.mesh.rotation.y+=.02;
      });
      sun.rotation.y+=.002; controls.update();
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      controls.dispose();
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:8,level:`Intermediate`,title:`Raycaster Click Detector`,color:F.pink,preview:W,tagline:`Click any 3D shape to highlight it — the foundation of all 3D UI interaction.`,concepts:[`THREE.Raycaster`,`NDC mouse coordinates`,`intersectObjects()`,`Event listeners`,`Selection state management`],steps:[{title:`What is raycasting?`,body:`A mathematical ray is shot from the camera through the pixel you clicked into the 3D scene. Objects that the ray passes through are returned sorted front to back.`},{title:`Normalize mouse to NDC`,body:`NDC = Normalized Device Coordinates (−1 to +1). mouse.x = ((clientX − rect.left) / width) * 2 − 1. Note Y is negated: −((clientY − rect.top) / height) * 2 + 1.`},{title:`Fire the ray`,body:`raycaster.setFromCamera(mouse, camera). const hits = raycaster.intersectObjects(myObjects). hits[0] is the closest hit, hits[0].object is the Mesh.`},{title:`Manage selection state`,body:`Keep a 'selected' ref variable. When a new object is clicked, restore the previous one's color before highlighting the new selection.`},{title:`Exact hit point`,body:`hits[0].point is a Vector3 of the exact 3D position where the ray hit. Useful for placing objects at the click position.`},{title:`Clean up listeners`,body:`Return () => renderer.domElement.removeEventListener('click', onClick) in the useEffect cleanup. Otherwise the handler persists after unmount.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ClickDetector() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geos: THREE.BufferGeometry[] = [
      new THREE.BoxGeometry(1.2,1.2,1.2), new THREE.SphereGeometry(.7,32,32),
      new THREE.ConeGeometry(.7,1.4,32), new THREE.TorusGeometry(.7,.25,16,64),
      new THREE.OctahedronGeometry(.8), new THREE.TetrahedronGeometry(.9),
    ];
    const objects = geos.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        color: 0x334455, metalness: .6, roughness: .3,
      }));
      mesh.position.x = (i%3-1)*3;
      mesh.position.y = i<3 ? 1.5 : -1.5;
      scene.add(mesh); return mesh;
    });
    scene.add(new THREE.AmbientLight(0x222233));
    const dl = new THREE.DirectionalLight(0xffffff, 1.5);
    dl.position.set(5,5,5); scene.add(dl);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let selected: THREE.Mesh | null = null;

    const onClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x =  ((e.clientX - rect.left) / w)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)  / h) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(objects);
      if (selected) {
        (selected.material as THREE.MeshStandardMaterial).color.setHex(0x334455);
        (selected.material as THREE.MeshStandardMaterial).emissive.setHex(0);
      }
      selected = hits.length > 0 ? hits[0].object as THREE.Mesh : null;
      if (selected) {
        (selected.material as THREE.MeshStandardMaterial).color.setHex(0xff00cc);
        (selected.material as THREE.MeshStandardMaterial).emissive.setHex(0x440044);
      }
    };
    renderer.domElement.addEventListener("click", onClick);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      objects.forEach((o, i) => o.rotation.y += .01 + i * .002);
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:9,level:`Intermediate`,title:`Procedural Terrain`,color:F.lime,preview:G,tagline:`Vertex-deformed plane with elevation-based vertex coloring — water, sand, grass, snow.`,concepts:[`PlaneGeometry vertex edit`,`Layered sine noise`,`Vertex colors`,`computeVertexNormals()`,`FogExp2`],steps:[{title:`Dense plane`,body:`new THREE.PlaneGeometry(20, 20, 80, 80). Rotate flat: geo.rotateX(-Math.PI/2). 80×80 = 6,400 quads, enough for convincing terrain without being slow.`},{title:`Access vertex positions`,body:`const pos = geo.attributes.position as THREE.BufferAttribute. pos.getX(i), pos.getZ(i) for reading X and Z. pos.setY(i, value) for writing the height.`},{title:`Layered noise`,body:`y = sin(x*0.5)*cos(z*0.5)*2 + sin(x*1.3)*cos(z*1.1)*1 + sin(x*2.7)*cos(z*2.3)*0.5. Multiple frequencies at different amplitudes create natural-looking variety.`},{title:`Color by elevation`,body:`t = (y+3)/6 normalizes to 0–1. t<0.3 → blue (water), 0.3–0.4 → gold (sand), 0.4–0.7 → green (grass), else → white (snow). Store in Float32Array.`},{title:`Recompute normals`,body:`geo.computeVertexNormals() MUST be called after changing vertex positions. Without it, lighting is wrong because normals still point straight up.`},{title:`Orbiting camera`,body:`camera.position.x = Math.sin(t*0.0003)*6; camera.lookAt(0,1,0). Creates a gentle orbit around the terrain without needing OrbitControls.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Terrain() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020810);
    scene.fog = new THREE.FogExp2(0x020810, 0.035);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.set(0,5,10);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(20, 20, 80, 80);
    geo.rotateX(-Math.PI/2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const col = new THREE.Color();

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const y = Math.sin(x*.5)*Math.cos(z*.5)*2
              + Math.sin(x*1.3+.5)*Math.cos(z*1.1)*1
              + Math.sin(x*2.7)*Math.cos(z*2.3+1)*.5;
      pos.setY(i, y);
      const t = (y+3)/6;
      if(t<.3) col.set(0x0044ff);
      else if(t<.4) col.set(0xffcc44);
      else if(t<.7) col.set(0x00aa22);
      else col.set(0xffffff);
      colors[i*3]=col.r; colors[i*3+1]=col.g; colors[i*3+2]=col.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    scene.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({vertexColors:true,roughness:.8})));
    scene.add(new THREE.DirectionalLight(0xffeedd,2), new THREE.AmbientLight(0x112233,.8));

    let animId: number;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      camera.position.x=Math.sin(Date.now()*.0003)*6;
      camera.lookAt(0,1,0);
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:10,level:`Intermediate`,title:`Shader Wave`,color:F.orange,preview:K,tagline:`Custom GLSL vertex + fragment shaders — your first step into GPU programming.`,concepts:[`ShaderMaterial`,`GLSL vertex shader`,`GLSL fragment shader`,`uniforms`,`varyings`],steps:[{title:`Shader pipeline`,body:`Vertex shader runs once per vertex and can move geometry. Fragment shader runs once per pixel and sets its color. They communicate via 'varying' variables.`},{title:`Vertex shader`,body:`Take the model position, add elevation = sin(x*3+uTime)*0.3 + sin(z*4+uTime*1.5)*0.15. Add elevation to y. Pass it as 'varying float vElevation' to the fragment shader.`},{title:`Fragment shader`,body:`Receive vElevation. Normalize: t = (vElevation+0.45)/0.9. Use mix(deepBlue, neonCyan, t) to color by height. gl_FragColor = vec4(color, 1.0).`},{title:`uniforms`,body:`const uniforms = { uTime: { value: 0 } }. Pass to ShaderMaterial. Uniforms are how JavaScript sends data to the shader — one value shared across all vertices.`},{title:`Animate uTime`,body:`uniforms.uTime.value += 0.03 inside animate(). The shader reads this every frame, making the wave move. This is the standard animation pattern for shaders.`},{title:`Wireframe overlay`,body:`Second Mesh with same geometry, wireframe: true, opacity 0.12. This lets you see the mesh structure moving underneath the colored surface.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = \`
  uniform float uTime;
  varying float vElevation;
  void main() {
    vec4 mp = modelMatrix * vec4(position, 1.0);
    float e = sin(mp.x * 3.0 + uTime) * 0.3
            + sin(mp.z * 4.0 + uTime * 1.5) * 0.15;
    mp.y += e;
    vElevation = e;
    gl_Position = projectionMatrix * viewMatrix * mp;
  }
\`;
const fragmentShader = \`
  varying float vElevation;
  void main() {
    float t = (vElevation + 0.45) / 0.9;
    vec3 low  = vec3(0.0, 0.1, 0.8);
    vec3 high = vec3(0.0, 1.0, 0.8);
    gl_FragColor = vec4(mix(low, high, t), 1.0);
  }
\`;

export default function ShaderWave() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010108);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.set(0,3,6); camera.lookAt(0,0,0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(10, 10, 128, 128);
    geo.rotateX(-Math.PI/2);
    const uniforms: { uTime: THREE.IUniform<number> } = { uTime: { value: 0 } };
    scene.add(new THREE.Mesh(geo, new THREE.ShaderMaterial({
      vertexShader, fragmentShader, uniforms, side: THREE.DoubleSide,
    })));
    scene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: 0x003333, wireframe: true, transparent: true, opacity: 0.12,
    })));
    scene.add(new THREE.AmbientLight(0x111111));

    let animId: number;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      uniforms.uTime.value+=0.03;
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:11,level:`Advanced`,title:`DNA Double Helix`,color:F.teal,preview:q,tagline:`A double helix of spheres + cross-bars, built entirely from parametric math.`,concepts:[`Parametric helix math`,`Two-strand offset`,`CylinderGeometry bars`,`Trigonometric placement`,`Scene-level rotation`],steps:[{title:`Helix math`,body:`A helix is a circle that rises. t = (i/N)*PI*8 gives 4 full rotations. y = (i/N)*8−4 spreads points along Y. x = cos(t)*radius, z = sin(t)*radius.`},{title:`Two-strand offset`,body:`Second strand = first strand with x and z negated (equivalent to adding PI to the angle). forEach([1, -1], side => position.set(cos(t)*1.2*side, y, sin(t)*1.2*side)).`},{title:`Color-code strands`,body:`Strand 1 = cyan (0x00f5ff), Strand 2 = magenta (0xff00cc). Different emissive colors reinforce the distinction under lighting.`},{title:`Cross-bars`,body:`Every 4th step, add a CylinderGeometry(0.04, 0.04, 2.4). Position at (0, y, 0). Rotate z by PI/2 to lay it horizontal. Rotate x by t to align with helix.`},{title:`Two complementary lights`,body:`PointLight(cyan) + PointLight(magenta) at (0,0,0). Each strand is lit by its complementary color, enhancing the two-strand visual separation.`},{title:`Scene rotation`,body:`scene.rotation.y += 0.005. Much simpler than orbiting the camera, and lets you see the full 3D helix structure from all angles as it rotates.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DNAHelix() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020212);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.set(4,0,8); camera.lookAt(0,0,0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const N = 60;
    for (let i = 0; i < N; i++) {
      const t = (i/N)*Math.PI*8 - Math.PI*4;
      const y = (i/N)*8 - 4;

      ([1, -1] as const).forEach((side, si) => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 12, 12),
          new THREE.MeshStandardMaterial({
            color:    si===0 ? 0x00f5ff : 0xff00cc,
            emissive: new THREE.Color(si===0 ? 0x003344 : 0x330022),
            metalness:.7, roughness:.2,
          })
        );
        sphere.position.set(Math.cos(t)*1.2*side, y, Math.sin(t)*1.2*side);
        scene.add(sphere);
      });

      if (i % 4 === 0) {
        const bar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04,0.04,2.4,8),
          new THREE.MeshStandardMaterial({color:0x888888, metalness:.5})
        );
        bar.position.set(0, y, 0);
        bar.rotation.z = Math.PI/2;
        bar.rotation.x = t;
        scene.add(bar);
      }
    }

    scene.add(
      new THREE.PointLight(0x00f5ff,2,20),
      new THREE.PointLight(0xff00cc,2,20),
      new THREE.AmbientLight(0x111122)
    );

    let animId: number;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      scene.rotation.y+=.005;
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:12,level:`Advanced`,title:`Morphing Blob`,color:F.purple,preview:J,tagline:`An organic sphere that breathes using per-vertex sine noise — live every frame.`,concepts:[`IcosahedronGeometry detail 5`,`Per-vertex manipulation`,`pos.needsUpdate = true`,`computeVertexNormals()`,`Original position cache`],steps:[{title:`High-detail icosahedron`,body:`new THREE.IcosahedronGeometry(1.5, 5). Detail level 5 gives ~5000 triangles — enough for smooth organic deformation without visible facets.`},{title:`Cache originals`,body:`const orig = geo.attributes.position.array.slice(). Always deform relative to originals, never accumulate. Without this, errors compound and the mesh explodes.`},{title:`3-axis noise`,body:`noise = sin(ox*2+t) * cos(oy*2.5+t*1.1) * sin(oz*1.8+t*0.9). Three axes × three frequencies × three time speeds create rich, non-repeating movement.`},{title:`Radial scale factor`,body:`factor = 1 + noise * 0.25. Set pos.setXYZ(i, ox*factor, oy*factor, oz*factor). This pushes vertices outward from center while preserving the sphere shape roughly.`},{title:`Mark for GPU upload`,body:`geo.attributes.position.needsUpdate = true EVERY frame. Without this the GPU never sees the updated vertex positions. Also call geo.computeVertexNormals().`},{title:`Wireframe overlay`,body:`Second Mesh with the same geometry (shared — changes to geo affect both). wireframe:true, transparent:true, opacity:0.15. Shows the deforming mesh structure.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MorphingBlob() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080010);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1.5, 5);
    const orig = (geo.attributes.position as THREE.BufferAttribute).array.slice() as Float32Array;

    scene.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color:0x9b00ff, emissive:new THREE.Color(0x220044), metalness:.3, roughness:.4,
    })));
    scene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color:0xbf00ff, wireframe:true, transparent:true, opacity:.15,
    })));
    scene.add(
      new THREE.PointLight(0x9b00ff,3,15),
      new THREE.PointLight(0x00f5ff,1.5,15),
      new THREE.AmbientLight(0x110022)
    );

    let t=0, animId: number;
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const animate = () => {
      animId=requestAnimationFrame(animate); t+=.015;
      for (let i=0; i<pos.count; i++) {
        const ox=orig[i*3], oy=orig[i*3+1], oz=orig[i*3+2];
        const noise=Math.sin(ox*2+t)*Math.cos(oy*2.5+t*1.1)*Math.sin(oz*1.8+t*.9);
        const f=1+noise*.25;
        pos.setXYZ(i, ox*f, oy*f, oz*f);
      }
      pos.needsUpdate=true;
      geo.computeVertexNormals();
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:13,level:`Advanced`,title:`Vortex Tunnel`,color:F.blue,preview:Y,tagline:`Infinite tunnel of spinning rings rushing toward you with a barrel-roll camera.`,concepts:[`TorusGeometry rings`,`Z-reset infinite loop`,`Camera rotation`,`Procedural color`,`Particle columns`],steps:[{title:`Create 20 rings`,body:`Spread 20 torus rings along Z: ring.position.z = -i * 3. Rotate X by PI/2 so the ring faces down the tunnel. Each ring spaced 3 units behind the last.`},{title:`Rush toward camera`,body:`Each frame: ring.position.z += speed. When a ring passes z > 4 (behind the camera), reset to z = -55. Instant teleportation feels seamless from inside.`},{title:`Vary ring sizes`,body:`radius = 2 + random*0.5. tube = 0.03 + random*0.05. This subtle variation breaks the rigid regularity and makes the tunnel feel organic.`},{title:`Spin rings in place`,body:`ring.rotation.z += 0.003 each frame. The rings slowly rotate as they rush toward you — adds a hypnotic, disorienting quality.`},{title:`Barrel-roll camera`,body:`camera.rotation.z += 0.002. Even 0.002 rad/frame = ~7°/sec — subtle but powerfully intensifies the tunnel sensation. No OrbitControls needed.`},{title:`Particle stream`,body:`1000 points randomly placed in a 4×4×60 tube (Z from 0 to −60). Small green dots moving with the rings reinforce depth and motion blur feeling.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

interface RingUserData {
  speed: number;
}

export default function Tunnel() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000800);
    const camera = new THREE.PerspectiveCamera(80, w/h, 0.1, 100);
    camera.position.set(0,0,0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const rings = Array.from({length:20}, (_, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2+Math.random()*.5, .03+Math.random()*.05, 6, 60),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(.35, 1, .3+Math.random()*.4),
          transparent:true, opacity:.7,
        })
      );
      ring.rotation.x = Math.PI/2;
      ring.position.z  = -i * 3;
      ring.userData = { speed: .02+Math.random()*.01 } as RingUserData;
      scene.add(ring); return ring;
    });

    const pPos = new Float32Array(1000*3);
    for(let i=0;i<1000;i++){
      pPos[i*3]=(Math.random()-.5)*4;
      pPos[i*3+1]=(Math.random()-.5)*4;
      pPos[i*3+2]=Math.random()*-60;
    }
    const pGeo=new THREE.BufferGeometry();
    pGeo.setAttribute("position",new THREE.BufferAttribute(pPos,3));
    scene.add(new THREE.Points(pGeo,new THREE.PointsMaterial({color:0x00ff44,size:.04})));

    let animId: number;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      rings.forEach(r => {
        r.position.z += (r.userData as RingUserData).speed;
        r.rotation.z += .003;
        if (r.position.z > 4) r.position.z = -55;
      });
      camera.rotation.z += .002;
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`},{id:14,level:`Advanced`,title:`N-Body Gravity`,color:F.yellow,preview:X,tagline:`12 neon balls attract each other with real gravitational physics — fully interactive.`,concepts:[`N-body gravity`,`Force accumulation`,`Euler integration`,`velocity damping`,`Boundary collision`],steps:[{title:`Store physics in userData`,body:`mesh.userData = { vx, vy, mass }. userData is a plain object — you can store any per-object state there. Mass affects gravitational force.`},{title:`Compute forces`,body:`For each pair (i,j): dx = other.x − self.x, dy = other.y − self.y. dist = sqrt(dx²+dy²) + 0.5 (softening prevents division-by-zero at close range).`},{title:`Newton's law`,body:`force = G * massA * massB / dist². ax = (dx/dist)*force / massA. vx += ax. Use G = 0.0002 — too large and everything explodes instantly.`},{title:`Euler integration`,body:`position.x += vx; position.y += vy each frame. Simple but sufficient for visual simulation. The +0.5 softening keeps energy bounded.`},{title:`Damping`,body:`vx *= 0.999 each frame. Without damping, numerical integration errors accumulate energy and balls fly off screen. 0.999 is barely noticeable but critical.`},{title:`Boundary bounce`,body:`if (|pos.x| > 5) vx *= -1. Reversing the velocity component reflects the ball off an invisible wall. Apply same for Y boundary.`}],code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

interface BallUserData {
  vx: number; vy: number; mass: number;
}

export default function GravityBalls() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060008);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.set(0,0,12);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const neons = [0x00f5ff,0xff00cc,0x00ff88,0xffe500,0xff6d00,0x9b00ff];
    const balls = Array.from({length:12}, (_, i) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(.3+Math.random()*.3, 20, 20),
        new THREE.MeshStandardMaterial({
          color:neons[i%6], emissive:new THREE.Color(neons[i%6]),
          emissiveIntensity:.3, metalness:.7, roughness:.2,
        })
      );
      mesh.position.set((Math.random()-.5)*8,(Math.random()-.5)*6,(Math.random()-.5)*2);
      mesh.userData = {
        vx:(Math.random()-.5)*.04, vy:(Math.random()-.5)*.04,
        mass:.3+Math.random()*.3,
      } as BallUserData;
      scene.add(mesh); return mesh;
    });
    scene.add(new THREE.AmbientLight(0x111111), new THREE.PointLight(0xffffff,2,30));

    const G = 0.0002;
    let animId: number;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      balls.forEach((b, i) => {
        const bData = b.userData as BallUserData;
        balls.forEach((other, j) => {
          if(i===j) return;
          const dx=other.position.x-b.position.x, dy=other.position.y-b.position.y;
          const dist=Math.sqrt(dx*dx+dy*dy)+0.5;
          const oData = other.userData as BallUserData;
          const force=G*bData.mass*oData.mass/(dist*dist);
          bData.vx+=(dx/dist)*force;
          bData.vy+=(dy/dist)*force;
        });
        b.position.x+=bData.vx; b.position.y+=bData.vy;
        bData.vx*=.999; bData.vy*=.999;
        if(Math.abs(b.position.x)>5)bData.vx*=-1;
        if(Math.abs(b.position.y)>4)bData.vy*=-1;
      });
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`}],Q={Beginner:F.lime,Intermediate:F.yellow,Advanced:F.pink},re={Beginner:`#003311`,Intermediate:`#332600`,Advanced:`#330011`};function $({level:e}){return(0,P.jsx)(`span`,{style:{background:re[e],color:Q[e],border:`1px solid ${Q[e]}44`,borderRadius:4,fontSize:10,fontFamily:`monospace`,padding:`2px 8px`,letterSpacing:1},children:e.toUpperCase()})}function ie({code:e}){let[t,n]=(0,N.useState)(!1);return(0,P.jsxs)(`div`,{style:{position:`relative`},children:[(0,P.jsx)(`button`,{onClick:()=>{navigator.clipboard?.writeText(e),n(!0),setTimeout(()=>n(!1),1500)},style:{position:`absolute`,top:10,right:10,background:t?`#00ff8822`:`#1a1a3a`,color:t?F.lime:F.muted,border:`1px solid ${t?F.lime:F.dim}`,borderRadius:6,padding:`4px 10px`,fontSize:11,fontFamily:`monospace`,cursor:`pointer`,zIndex:2},children:t?`✓ Copied`:`Copy`}),(0,P.jsx)(`pre`,{style:{background:`#050515`,border:`1px solid ${F.border}`,borderRadius:10,padding:`16px 14px`,fontSize:11.5,color:`#c8c8ff`,fontFamily:`'Courier New', monospace`,overflowX:`auto`,margin:0,lineHeight:1.7,maxHeight:440,overflowY:`auto`},children:(0,P.jsx)(`code`,{children:e})})]})}function ae({steps:e}){return(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:e.map((e,t)=>(0,P.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`flex-start`},children:[(0,P.jsx)(`div`,{style:{width:26,height:26,borderRadius:`50%`,background:`#0d0d2a`,border:`1px solid ${F.dim}`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,fontSize:11,color:F.muted,fontFamily:`monospace`,marginTop:1},children:t+1}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{color:F.text,fontSize:13,fontWeight:700,marginBottom:3},children:e.title}),(0,P.jsx)(`div`,{style:{color:F.muted,fontSize:12,lineHeight:1.65},children:e.body})]})]},t))})}function oe({p:e,onOpen:t}){let n=e.preview;return(0,P.jsxs)(`div`,{style:{background:F.card,border:`1px solid ${F.border}`,borderRadius:14,overflow:`hidden`,display:`flex`,flexDirection:`column`,transition:`border-color 0.2s`},children:[(0,P.jsxs)(`div`,{style:{position:`relative`,borderBottom:`1px solid ${F.border}`},children:[(0,P.jsx)(n,{}),(0,P.jsx)(`div`,{style:{position:`absolute`,top:10,left:10},children:(0,P.jsx)($,{level:e.level})}),(0,P.jsx)(`div`,{style:{position:`absolute`,top:10,right:10,background:`#00000077`,backdropFilter:`blur(4px)`,borderRadius:6,padding:`3px 8px`,fontSize:10,color:F.muted,fontFamily:`monospace`},children:`LIVE ●`})]}),(0,P.jsxs)(`div`,{style:{padding:`16px 18px 18px`,flex:1,display:`flex`,flexDirection:`column`,gap:10},children:[(0,P.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,P.jsxs)(`h3`,{style:{color:e.color,margin:0,fontSize:14,fontFamily:`monospace`,fontWeight:700},children:[(0,P.jsxs)(`span`,{style:{color:F.dim},children:[String(e.id).padStart(2,`0`),`.`]}),` `,e.title]})}),(0,P.jsx)(`p`,{style:{color:F.muted,fontSize:12,margin:0,lineHeight:1.6},children:e.tagline}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:5},children:[e.concepts.slice(0,3).map(e=>(0,P.jsx)(`span`,{style:{background:`#0a0a22`,color:F.dim,border:`1px solid ${F.border}`,borderRadius:4,fontSize:10,padding:`1px 6px`,fontFamily:`monospace`},children:e},e)),e.concepts.length>3&&(0,P.jsxs)(`span`,{style:{color:F.dim,fontSize:10,alignSelf:`center`},children:[`+`,e.concepts.length-3,` more`]})]}),(0,P.jsx)(`button`,{onClick:()=>t(e),style:{marginTop:`auto`,background:`${e.color}10`,color:e.color,border:`1px solid ${e.color}44`,borderRadius:8,padding:`9px`,fontSize:12,fontFamily:`monospace`,cursor:`pointer`,letterSpacing:.5},children:`View Walkthrough + Code →`})]})]})}function se({p:e,onClose:t}){let[n,r]=(0,N.useState)(`steps`),i=e.preview;return(0,P.jsx)(`div`,{onClick:t,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.92)`,zIndex:1e3,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16,overflowY:`auto`},children:(0,P.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{background:F.surface,border:`1px solid ${e.color}44`,borderRadius:18,width:`100%`,maxWidth:840,maxHeight:`92vh`,overflowY:`auto`,boxShadow:`0 0 100px ${e.color}18`},children:[(0,P.jsxs)(`div`,{style:{padding:`18px 24px 14px`,borderBottom:`1px solid ${F.border}`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,position:`sticky`,top:0,background:F.surface,zIndex:2},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,P.jsx)($,{level:e.level}),(0,P.jsx)(`h2`,{style:{color:e.color,margin:0,fontSize:16,fontFamily:`monospace`},children:e.title})]}),(0,P.jsx)(`button`,{onClick:t,style:{background:`none`,border:`none`,color:F.muted,fontSize:22,cursor:`pointer`,lineHeight:1},children:`✕`})]}),(0,P.jsx)(`div`,{style:{borderBottom:`1px solid ${F.border}`},children:(0,P.jsx)(i,{})}),(0,P.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid ${F.border}`},children:[`steps`,`code`].map(t=>(0,P.jsx)(`button`,{onClick:()=>r(t),style:{flex:1,background:n===t?`${e.color}0e`:`transparent`,color:n===t?e.color:F.muted,border:`none`,borderBottom:n===t?`2px solid ${e.color}`:`2px solid transparent`,padding:`12px`,fontSize:13,fontFamily:`monospace`,cursor:`pointer`},children:t===`steps`?`📋 How to Build`:`💻 Full Code`},t))}),(0,P.jsxs)(`div`,{style:{padding:`20px 24px 28px`},children:[n===`steps`&&(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{style:{color:F.muted,fontSize:12,margin:`0 0 18px`,lineHeight:1.7},children:e.tagline}),(0,P.jsx)(ae,{steps:e.steps}),(0,P.jsxs)(`div`,{style:{marginTop:20,background:`#0a0a1e`,border:`1px solid ${F.border}`,borderRadius:8,padding:`14px 18px`},children:[(0,P.jsx)(`p`,{style:{color:F.dim,fontSize:10,fontFamily:`monospace`,margin:`0 0 8px`,letterSpacing:2},children:`CONCEPTS IN THIS PROJECT`}),(0,P.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6},children:e.concepts.map(t=>(0,P.jsx)(`span`,{style:{background:`${e.color}10`,color:e.color,border:`1px solid ${e.color}33`,borderRadius:5,fontSize:11,padding:`3px 9px`,fontFamily:`monospace`},children:t},t))})]})]}),n===`code`&&(0,P.jsx)(ie,{code:e.code})]})]})})}function ce(){let[e,t]=(0,N.useState)(`All`),[n,r]=(0,N.useState)(null),[i,a]=(0,N.useState)(``),o=[`All`,`Beginner`,`Intermediate`,`Advanced`],s=Z.filter(t=>(e===`All`||t.level===e)&&(i===``||t.title.toLowerCase().includes(i.toLowerCase())||t.tagline.toLowerCase().includes(i.toLowerCase())));return(0,P.jsxs)(`div`,{style:{minHeight:`100vh`,background:F.bg,color:F.text,fontFamily:`'Courier New', monospace`},children:[(0,P.jsxs)(`div`,{style:{borderBottom:`1px solid ${F.border}`,padding:`44px 24px 32px`,textAlign:`center`,background:`radial-gradient(ellipse at 50% 0%, #0a0a2a 0%, ${F.bg} 65%)`},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:F.muted,letterSpacing:8,marginBottom:14},children:`◈ INTERACTIVE GUIDE ◈`}),(0,P.jsx)(`h1`,{style:{fontSize:`clamp(34px, 7vw, 62px)`,fontWeight:900,margin:`0 0 10px`,background:`linear-gradient(135deg, ${F.cyan}, ${F.magenta}, ${F.lime})`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`,letterSpacing:-1},children:`THREE.JS PROJECTS`}),(0,P.jsx)(`p`,{style:{color:F.muted,fontSize:13,margin:`0 0 24px`,maxWidth:500,marginLeft:`auto`,marginRight:`auto`,lineHeight:1.8},children:`14 projects — each with a live 3D preview, step-by-step walkthrough, and copy-ready React code.`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:20,justifyContent:`center`,flexWrap:`wrap`,fontSize:12},children:Object.entries({Beginner:5,Intermediate:5,Advanced:4}).map(([e,t])=>(0,P.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:7,color:F.muted},children:[(0,P.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,background:Q[e],display:`inline-block`,boxShadow:`0 0 6px ${Q[e]}`}}),t,` `,e]},e))})]}),(0,P.jsxs)(`div`,{style:{padding:`18px 24px`,borderBottom:`1px solid ${F.border}`,display:`flex`,gap:10,flexWrap:`wrap`,alignItems:`center`},children:[(0,P.jsx)(`input`,{value:i,onChange:e=>a(e.target.value),placeholder:`Search projects...`,style:{background:F.card,border:`1px solid ${F.border}`,borderRadius:8,padding:`8px 14px`,color:F.text,fontSize:12,fontFamily:`monospace`,outline:`none`,flex:1,minWidth:160,maxWidth:240}}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:5},children:o.map(n=>(0,P.jsx)(`button`,{onClick:()=>t(n),style:{background:e===n?`${n===`All`?F.cyan:Q[n]}15`:`transparent`,color:e===n?n===`All`?F.cyan:Q[n]:F.muted,border:`1px solid ${e===n?(n===`All`?F.cyan:Q[n])+`55`:F.border}`,borderRadius:7,padding:`7px 13px`,fontSize:11,fontFamily:`monospace`,cursor:`pointer`},children:n},n))}),(0,P.jsxs)(`span`,{style:{color:F.dim,fontSize:11,marginLeft:`auto`,fontFamily:`monospace`},children:[s.length,` / `,Z.length]})]}),(0,P.jsx)(`div`,{style:{padding:`24px`,display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:18},children:s.map(e=>(0,P.jsx)(oe,{p:e,onOpen:r},e.id))}),(0,P.jsxs)(`div`,{style:{margin:`0 24px 40px`,background:F.card,border:`1px solid ${F.border}`,borderRadius:12,padding:`18px 22px`},children:[(0,P.jsx)(`p`,{style:{color:F.dim,fontSize:10,letterSpacing:3,margin:`0 0 12px`,fontFamily:`monospace`},children:`QUICK SETUP`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[[`Install`,`npm install three`],[`Types`,`npm install @types/three`],[`OrbitControls`,`import from 'three/examples/jsm/controls/OrbitControls'`]].map(([e,t])=>(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{color:F.muted,fontSize:10,marginBottom:4},children:e}),(0,P.jsx)(`code`,{style:{color:F.cyan,fontSize:11},children:t})]},e))})]}),n&&(0,P.jsx)(se,{p:n,onClose:()=>r(null)})]})}export{ce as default};