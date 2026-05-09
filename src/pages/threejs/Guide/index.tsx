import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg: "#06060f",
  surface: "#0c0c1e",
  card: "#0f0f22",
  border: "#1a1a3a",
  cyan: "#00f5ff",
  magenta: "#ff00cc",
  lime: "#00ff88",
  orange: "#ff6d00",
  purple: "#9b00ff",
  yellow: "#ffe500",
  pink: "#ff2d6b",
  blue: "#2979ff",
  teal: "#00e5cc",
  text: "#e8e8ff",
  muted: "#6b6b9a",
  dim: "#3a3a5c",
};

// ─── LIVE THREE.JS PREVIEW CANVASES ──────────────────────────────────────────
function useLiveScene(drawScene) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const w = el.clientWidth, h = el.clientHeight || 220;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const cleanup = drawScene(scene, camera, renderer, w, h);
    return () => {
      cleanup?.();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);
  return ref;
}

function CubePreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x06060f);
    camera.position.z = 3.5;
    const geo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const mat = new THREE.MeshStandardMaterial({ color: 0x00f5ff, metalness: 0.8, roughness: 0.2, emissive: 0x003344 });
    const cube = new THREE.Mesh(geo, mat);
    cube.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0x00ffff })));
    scene.add(cube);
    scene.add(new THREE.PointLight(0x00f5ff, 3, 20));
    scene.add(new THREE.AmbientLight(0x111133));
    let id;
    const animate = () => { id = requestAnimationFrame(animate); cube.rotation.x += 0.01; cube.rotation.y += 0.013; renderer.render(scene, camera); };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function GalaxyPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x020208);
    camera.position.set(0, 2, 6);
    const count = 4000, pos = new Float32Array(count * 3), cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 4, spin = r * 3, branch = ((i % 3) / 3) * Math.PI * 2, sc = (Math.random() - 0.5) * 0.4;
      pos[i*3]=Math.cos(branch+spin)*r+sc; pos[i*3+1]=sc*0.3; pos[i*3+2]=Math.sin(branch+spin)*r+sc;
      const t = r/4; cols[i*3]=1-t*0.4; cols[i*3+1]=1-t*0.7; cols[i*3+2]=1;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
    const galaxy = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.025, vertexColors: true }));
    scene.add(galaxy);
    let id;
    const animate = () => { id = requestAnimationFrame(animate); galaxy.rotation.y += 0.001; renderer.render(scene, camera); };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function TorusPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x030310);
    scene.fog = new THREE.Fog(0x030310, 6, 18);
    camera.position.set(0, 2, 6);
    const torus = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.4, 32, 100), new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x004422, roughness: 0.1, metalness: 0.9 }));
    scene.add(torus);
    const grid = new THREE.GridHelper(20, 30, 0x00ff88, 0x003311);
    grid.position.y = -2; scene.add(grid);
    scene.add(new THREE.PointLight(0x00ff88, 3, 12));
    scene.add(new THREE.AmbientLight(0x112211, 0.5));
    let t = 0, id;
    const animate = () => { id = requestAnimationFrame(animate); t += 0.02; torus.rotation.x = t*0.5; torus.rotation.y = t*0.3; torus.position.y = Math.sin(t)*0.5; renderer.render(scene, camera); };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function SpherePreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x050505);
    camera.position.z = 4;
    const mat = new THREE.MeshPhongMaterial({ shininess: 200, specular: new THREE.Color(0xffffff) });
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 64, 64), mat);
    scene.add(sphere);
    const pl = new THREE.PointLight(0xffffff, 3, 20); scene.add(pl);
    scene.add(new THREE.AmbientLight(0x111111));
    let t = 0, id; const col = new THREE.Color();
    const animate = () => { id = requestAnimationFrame(animate); t += 0.008; col.setHSL((t*0.1)%1,1,0.5); mat.color=col; mat.emissive.setHSL((t*0.1+0.5)%1,1,0.04); pl.color.setHSL((t*0.1+0.3)%1,1,0.5); pl.position.x=Math.cos(t)*3; pl.position.z=Math.sin(t)*3; sphere.rotation.y+=0.005; renderer.render(scene, camera); };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function ShapeFieldPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x040408);
    camera.position.set(0, 0, 12);
    const colors = [0x00f5ff,0xff00ff,0x00ff88,0xffff00,0xff6600,0xbf00ff];
    const geos = [new THREE.BoxGeometry(1,1,1),new THREE.SphereGeometry(0.6,16,16),new THREE.TorusGeometry(0.6,0.2,8,24),new THREE.ConeGeometry(0.6,1.2,8),new THREE.OctahedronGeometry(0.7),new THREE.TetrahedronGeometry(0.8)];
    const meshes = [];
    for(let i=0;i<12;i++){
      const m=new THREE.Mesh(geos[i%6],new THREE.MeshStandardMaterial({color:colors[i%6],emissive:colors[i%6],emissiveIntensity:0.15,metalness:0.7,roughness:0.2,wireframe:i%3===0}));
      const a=(i/12)*Math.PI*2; m.position.set(Math.cos(a)*4,Math.sin(i*1.3)*2,Math.sin(a)*4);
      m.userData={speed:0.01+Math.random()*0.02,phase:i}; scene.add(m); meshes.push(m);
    }
    scene.add(new THREE.AmbientLight(0x333333));
    const dl=new THREE.DirectionalLight(0xffffff,1); dl.position.set(5,5,5); scene.add(dl);
    let t=0,id;
    const animate=()=>{id=requestAnimationFrame(animate);t+=0.01;meshes.forEach(m=>{m.rotation.x+=m.userData.speed;m.rotation.y+=m.userData.speed*0.7;m.position.y=Math.sin(t+m.userData.phase)*2;});scene.rotation.y+=0.003;renderer.render(scene,camera);};
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function AudioPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x010108);
    camera.position.set(0, 4, 14); camera.lookAt(0, 0, 0);
    const bars = [];
    for(let i=0;i<48;i++){
      const hue=i/48;
      const bar=new THREE.Mesh(new THREE.BoxGeometry(0.35,1,0.35),new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,1,0.5),emissive:new THREE.Color().setHSL(hue,1,0.1),metalness:0.5,roughness:0.3}));
      const angle=(i/48)*Math.PI*2; bar.position.x=Math.cos(angle)*5; bar.position.z=Math.sin(angle)*5; bar.lookAt(0,0,0); scene.add(bar); bars.push(bar);
    }
    scene.add(new THREE.AmbientLight(0x222244));
    scene.add(new THREE.PointLight(0x00f5ff,2,20));
    let t=0,id;
    const animate=()=>{id=requestAnimationFrame(animate);t+=0.02;bars.forEach((b,i)=>{const v=0.3+0.7*Math.abs(Math.sin(t*2+i*0.25+Math.sin(t+i*0.1)));const th=0.2+v*4;b.scale.y+=(th-b.scale.y)*0.2;b.position.y=b.scale.y/2;});scene.rotation.y+=0.004;renderer.render(scene,camera);};
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function SolarPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x000008);
    camera.position.set(0, 10, 18); camera.lookAt(0,0,0);
    const sun=new THREE.Mesh(new THREE.SphereGeometry(1.5,32,32),new THREE.MeshBasicMaterial({color:0xffcc00}));
    scene.add(sun); scene.add(new THREE.PointLight(0xffffff,2,100)); scene.add(new THREE.AmbientLight(0x111122));
    const planets=[{r:0.3,dist:3.5,speed:4,color:0x888888},{r:0.5,dist:5.5,speed:1.6,color:0xffaa44},{r:0.55,dist:7.5,speed:1,color:0x4477ff},{r:0.35,dist:9.5,speed:0.53,color:0xff4422},{r:1.1,dist:13,speed:0.08,color:0xffdd88}];
    const meshes=planets.map(p=>{
      const m=new THREE.Mesh(new THREE.SphereGeometry(p.r,16,16),new THREE.MeshStandardMaterial({color:p.color,roughness:0.7}));
      const ring=new THREE.Line(new THREE.BufferGeometry().setFromPoints(Array.from({length:128},(_,i)=>{const a=(i/127)*Math.PI*2;return new THREE.Vector3(Math.cos(a)*p.dist,0,Math.sin(a)*p.dist);})),new THREE.LineBasicMaterial({color:0x222244}));
      scene.add(ring); scene.add(m); return {...p,mesh:m,angle:Math.random()*Math.PI*2};
    });
    const sp=new THREE.BufferGeometry(); const sv=new Float32Array(3000).map(()=>(Math.random()-0.5)*200); sp.setAttribute("position",new THREE.BufferAttribute(sv,3));
    scene.add(new THREE.Points(sp,new THREE.PointsMaterial({color:0xffffff,size:0.2})));
    let id;
    const animate=()=>{id=requestAnimationFrame(animate);meshes.forEach(p=>{p.angle+=0.001*p.speed;p.mesh.position.x=Math.cos(p.angle)*p.dist;p.mesh.position.z=Math.sin(p.angle)*p.dist;p.mesh.rotation.y+=0.02;});sun.rotation.y+=0.002;renderer.render(scene,camera);};
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function RayPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x050510);
    camera.position.z = 8;
    const objs=[];
    const geos=[new THREE.BoxGeometry(1.2,1.2,1.2),new THREE.SphereGeometry(0.7,32,32),new THREE.ConeGeometry(0.7,1.4,32),new THREE.TorusGeometry(0.7,0.25,16,64),new THREE.OctahedronGeometry(0.8),new THREE.TetrahedronGeometry(0.9)];
    for(let i=0;i<6;i++){const m=new THREE.Mesh(geos[i],new THREE.MeshStandardMaterial({color:0x334455,metalness:0.6,roughness:0.3}));m.position.x=(i%3-1)*3;m.position.y=i<3?1.5:-1.5;scene.add(m);objs.push(m);}
    scene.add(new THREE.AmbientLight(0x222233));
    const dl=new THREE.DirectionalLight(0xffffff,1.5); dl.position.set(5,5,5); scene.add(dl);
    let selected=null,t=0,id;
    let si=0;
    const cycle=setInterval(()=>{if(selected)selected.material.color.setHex(0x334455),selected.material.emissive.setHex(0);selected=objs[si%objs.length];selected.material.color.setHex(0xff00cc);si++;},700);
    const animate=()=>{id=requestAnimationFrame(animate);t+=0.01;objs.forEach((o,i)=>{o.rotation.y+=0.01+i*0.002;});renderer.render(scene,camera);};
    animate();
    return () => { cancelAnimationFrame(id); clearInterval(cycle); };
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function TerrainPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x020810);
    scene.fog = new THREE.FogExp2(0x020810, 0.035);
    camera.position.set(0, 5, 10); camera.lookAt(0,0,0);
    const SEGS=80;
    const geo=new THREE.PlaneGeometry(20,20,SEGS,SEGS); geo.rotateX(-Math.PI/2);
    const pos=geo.attributes.position;
    const cols=new Float32Array(pos.count*3); const col=new THREE.Color();
    for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i);const y=Math.sin(x*0.5)*Math.cos(z*0.5)*2+Math.sin(x*1.3+0.5)*Math.cos(z*1.1)*1+Math.sin(x*2.7)*Math.cos(z*2.3+1)*0.5;pos.setY(i,y);const t=(y+3)/6;if(t<0.3)col.set(0x0044ff);else if(t<0.4)col.set(0xffcc44);else if(t<0.7)col.set(0x00aa22);else col.set(0xffffff);cols[i*3]=col.r;cols[i*3+1]=col.g;cols[i*3+2]=col.b;}
    geo.setAttribute("color",new THREE.BufferAttribute(cols,3)); geo.computeVertexNormals();
    scene.add(new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:0.8})));
    scene.add(new THREE.DirectionalLight(0xffeedd,2)); scene.add(new THREE.AmbientLight(0x112233,0.8));
    let id;
    const animate=()=>{id=requestAnimationFrame(animate);camera.position.x=Math.sin(Date.now()*0.0003)*6;camera.lookAt(0,1,0);renderer.render(scene,camera);};
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function ShaderPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x010108);
    camera.position.set(0, 3, 6); camera.lookAt(0,0,0);
    const geo=new THREE.PlaneGeometry(10,10,128,128); geo.rotateX(-Math.PI/2);
    const uniforms={uTime:{value:0}};
    const mat=new THREE.ShaderMaterial({uniforms,side:THREE.DoubleSide,vertexShader:`uniform float uTime;varying float vElevation;void main(){vec4 mp=modelMatrix*vec4(position,1.0);float e=sin(mp.x*3.0+uTime)*0.3+sin(mp.z*4.0+uTime*1.5)*0.15;mp.y+=e;vElevation=e;gl_Position=projectionMatrix*viewMatrix*mp;}`,fragmentShader:`varying float vElevation;void main(){float t=(vElevation+0.45)/0.9;vec3 a=vec3(0.0,0.1,0.8),b=vec3(0.0,1.0,0.8);gl_FragColor=vec4(mix(a,b,t),1.0);}`});
    scene.add(new THREE.Mesh(geo,mat));
    scene.add(new THREE.AmbientLight(0x111111));
    let id;
    const animate=()=>{id=requestAnimationFrame(animate);uniforms.uTime.value+=0.03;renderer.render(scene,camera);};
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function DNAPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x020212);
    camera.position.set(4, 0, 8); camera.lookAt(0, 0, 0);
    const N = 60;
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 8 - Math.PI * 4;
      const y = (i / N) * 8 - 4;
      [1, -1].forEach((side, si) => {
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshStandardMaterial({ color: si === 0 ? 0x00f5ff : 0xff00cc, emissive: si === 0 ? 0x003344 : 0x330022, metalness: 0.7, roughness: 0.2 }));
        sphere.position.set(Math.cos(t) * 1.2 * side, y, Math.sin(t) * 1.2 * side);
        scene.add(sphere);
      });
      if (i % 4 === 0) {
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8), new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.5 }));
        bar.position.set(0, y, 0); bar.rotation.z = Math.PI / 2; bar.rotation.x = t; scene.add(bar);
      }
    }
    scene.add(new THREE.PointLight(0x00f5ff, 2, 20)); scene.add(new THREE.PointLight(0xff00cc, 2, 20)); scene.add(new THREE.AmbientLight(0x111122));
    let id;
    const animate = () => { id = requestAnimationFrame(animate); scene.rotation.y += 0.005; renderer.render(scene, camera); };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function BlobPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x080010);
    camera.position.z = 4;
    const geo = new THREE.IcosahedronGeometry(1.5, 5);
    const mat = new THREE.MeshStandardMaterial({ color: 0x9b00ff, emissive: 0x220044, metalness: 0.3, roughness: 0.4 });
    const blob = new THREE.Mesh(geo, mat);
    scene.add(blob);
    scene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xbf00ff, wireframe: true, transparent: true, opacity: 0.15 })));
    const orig = geo.attributes.position.array.slice();
    scene.add(new THREE.PointLight(0x9b00ff, 3, 15)); scene.add(new THREE.PointLight(0x00f5ff, 1.5, 15)); scene.add(new THREE.AmbientLight(0x110022));
    let t = 0, id;
    const pos = geo.attributes.position;
    const animate = () => {
      id = requestAnimationFrame(animate); t += 0.015;
      for (let i = 0; i < pos.count; i++) {
        const ox=orig[i*3],oy=orig[i*3+1],oz=orig[i*3+2];
        const noise=Math.sin(ox*2+t)*Math.cos(oy*2.5+t*1.1)*Math.sin(oz*1.8+t*0.9);
        const f=1+noise*0.25; pos.setXYZ(i,ox*f,oy*f,oz*f);
      }
      pos.needsUpdate=true; geo.computeVertexNormals(); blob.rotation.y+=0.007;
      renderer.render(scene, camera);
    };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function TunnelPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x000800);
    camera.position.set(0, 0, 0);
    const rings = Array.from({ length: 20 }, (_, i) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2 + Math.random() * 0.5, 0.03 + Math.random() * 0.05, 6, 60), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.35, 1, 0.3 + Math.random() * 0.4), transparent: true, opacity: 0.7 }));
      ring.position.z = -i * 3; ring.rotation.x = Math.PI / 2; ring.userData = { speed: 0.02 + Math.random() * 0.01 };
      scene.add(ring); return ring;
    });
    const pPos = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) { pPos[i*3]=(Math.random()-0.5)*4; pPos[i*3+1]=(Math.random()-0.5)*4; pPos[i*3+2]=Math.random()*-60; }
    const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x00ff44, size: 0.04 })));
    let id;
    const animate = () => { id = requestAnimationFrame(animate); rings.forEach(r => { r.position.z += r.userData.speed; r.rotation.z += 0.003; if (r.position.z > 4) r.position.z = -55; }); camera.rotation.z += 0.002; renderer.render(scene, camera); };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

function GravityPreview() {
  const ref = useLiveScene((scene, camera, renderer) => {
    scene.background = new THREE.Color(0x060008);
    camera.position.set(0, 0, 12);
    const neons = [0x00f5ff, 0xff00cc, 0x00ff88, 0xffe500, 0xff6d00, 0x9b00ff];
    const balls = Array.from({ length: 12 }, (_, i) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.3 + Math.random() * 0.3, 20, 20), new THREE.MeshStandardMaterial({ color: neons[i % 6], emissive: neons[i % 6], emissiveIntensity: 0.3, metalness: 0.7, roughness: 0.2 }));
      mesh.position.set((Math.random()-0.5)*8,(Math.random()-0.5)*6,(Math.random()-0.5)*2);
      mesh.userData = { vx:(Math.random()-0.5)*0.04, vy:(Math.random()-0.5)*0.04, mass:0.3+Math.random()*0.3 };
      scene.add(mesh); return mesh;
    });
    scene.add(new THREE.AmbientLight(0x111111)); scene.add(new THREE.PointLight(0xffffff, 2, 30));
    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      balls.forEach((b, i) => {
        balls.forEach((other, j) => { if (i===j) return; const dx=other.position.x-b.position.x,dy=other.position.y-b.position.y; const dist=Math.sqrt(dx*dx+dy*dy)+0.5; const force=0.0002*b.userData.mass*other.userData.mass/(dist*dist); b.userData.vx+=(dx/dist)*force; b.userData.vy+=(dy/dist)*force; });
        b.position.x+=b.userData.vx; b.position.y+=b.userData.vy; b.userData.vx*=0.999; b.userData.vy*=0.999;
        if(Math.abs(b.position.x)>5)b.userData.vx*=-1; if(Math.abs(b.position.y)>4)b.userData.vy*=-1;
      });
      renderer.render(scene, camera);
    };
    animate();
    return () => cancelAnimationFrame(id);
  });
  return <div ref={ref} style={{ width: "100%", height: 220 }} />;
}

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id:1,level:"Beginner",title:"Spinning Neon Cube",color:C.cyan,preview:CubePreview,
    tagline:"Your very first Three.js scene — a glowing rotating box with wireframe edges.",
    concepts:["Scene / Camera / Renderer","BoxGeometry","MeshStandardMaterial","EdgesGeometry","Animation loop"],
    steps:[
      {title:"Mount the canvas",body:"Create a div with a ref. In useEffect, read its clientWidth / clientHeight to size the renderer correctly to the container."},
      {title:"Build the scene stack",body:"Instantiate Scene (dark background), PerspectiveCamera (fov 75, position z=3.5), and WebGLRenderer (antialias: true). Append renderer.domElement to the ref div."},
      {title:"Create the cube",body:"new THREE.BoxGeometry(1.5,1.5,1.5) + MeshStandardMaterial with cyan color, metalness 0.8, roughness 0.2, and an emissive tint for self-glow."},
      {title:"Add wireframe edges",body:"new THREE.EdgesGeometry(boxGeo) → new THREE.LineSegments(edges, LineBasicMaterial). Call cube.add(wireframe) so it rotates with the parent mesh."},
      {title:"Light it",body:"PointLight (cyan, intensity 3) at (3,3,3) + dim AmbientLight so dark faces aren't pitch black. StandardMaterial requires light to be visible."},
      {title:"Animate",body:"In the requestAnimationFrame loop: cube.rotation.x += 0.01; cube.rotation.y += 0.013; renderer.render(scene, camera). Store the ID and cancel on React unmount."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeonCube() {
  const mountRef = useRef(null);

  useEffect(() => {
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
      color: 0x00f5ff, emissive: 0x003344,
      metalness: 0.8, roughness: 0.2,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Wireframe edges as child — rotates with cube
    cube.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x00ffff })
    ));

    const point = new THREE.PointLight(0x00f5ff, 3, 20);
    point.position.set(3, 3, 3);
    scene.add(point, new THREE.AmbientLight(0x111133));

    let animId;
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
}`,
  },
  {
    id:2,level:"Beginner",title:"Galaxy of Particles",color:C.magenta,preview:GalaxyPreview,
    tagline:"5,000 particles in a spiral galaxy using BufferGeometry and per-vertex colors.",
    concepts:["BufferGeometry","Float32Array","Points + PointsMaterial","Vertex colors","Spiral math"],
    steps:[
      {title:"Allocate typed arrays",body:"Float32Array of size count×3 for positions and colors. Typed arrays are what the GPU understands natively — far faster than regular JS arrays."},
      {title:"Spiral galaxy formula",body:"For each particle: radius = random(0–4). spinAngle = radius×3. branchAngle = (arm/3)*PI*2 (3 arms). x = cos(branch+spin)*radius + scatter."},
      {title:"Color gradient",body:"t = radius/maxRadius. Set RGB so inner stars are white-blue and outer stars are cooler purple-blue. colors are also a Float32Array with r,g,b per vertex."},
      {title:"Build BufferGeometry",body:"geo.setAttribute('position', new THREE.BufferAttribute(positions, 3)). The '3' means 3 floats per vertex. Same for the color attribute."},
      {title:"Create Points object",body:"new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.02, vertexColors: true })). Add to scene."},
      {title:"Rotate slowly",body:"galaxy.rotation.y += 0.001 each frame for a slow, majestic galactic spin."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Galaxy() {
  const mountRef = useRef(null);

  useEffect(() => {
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
      colors[i * 3] = 1 - t * 0.4; colors[i * 3 + 1] = 1 - t * 0.7; colors[i * 3 + 2] = 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const galaxy = new THREE.Points(geometry,
      new THREE.PointsMaterial({ size: 0.02, vertexColors: true }));
    scene.add(galaxy);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      galaxy.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`,
  },
  {
    id:3,level:"Beginner",title:"Floating Neon Torus",color:C.lime,preview:TorusPreview,
    tagline:"A glowing donut that bobs and rotates above a neon grid floor with fog.",
    concepts:["TorusGeometry","Math.sin() motion","GridHelper","Fog","Emissive glow"],
    steps:[
      {title:"Create the torus",body:"new THREE.TorusGeometry(1.4, 0.4, 32, 100). First arg is ring radius, second is tube thickness. More segments = smoother surface."},
      {title:"Add a grid floor",body:"new THREE.GridHelper(20, 30, primaryColor, secondaryColor). Set grid.position.y = -2 to place it below the torus."},
      {title:"Add fog",body:"scene.fog = new THREE.Fog(bgColor, near=5, far=18). Fog color MUST match scene.background for seamless blending at the horizon."},
      {title:"Emissive glow",body:"material.emissive = 0x004422. The emissive channel glows regardless of external lights — it creates the neon look."},
      {title:"Organic float",body:"Track variable t. Each frame: torus.position.y = Math.sin(t) * 0.5. Sine wave oscillates smoothly between -0.5 and +0.5."},
      {title:"Compound rotation",body:"torus.rotation.x = t * 0.5; torus.rotation.y = t * 0.3. Different multipliers give an interesting non-repeating tumble."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeonTorus() {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030310);
    scene.fog = new THREE.Fog(0x030310, 5, 18); // must match background

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.set(0, 2, 6);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1.4, 0.4, 32, 100),
      new THREE.MeshStandardMaterial({
        color: 0x00ff88, emissive: 0x004422,
        roughness: 0.1, metalness: 0.9,
      })
    );
    scene.add(torus);

    const grid = new THREE.GridHelper(20, 30, 0x00ff88, 0x003311);
    grid.position.y = -2;
    scene.add(grid);

    scene.add(new THREE.PointLight(0x00ff88, 3, 12));
    scene.add(new THREE.AmbientLight(0x112211, 0.5));

    let t = 0, animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.02;
      torus.rotation.x = t * 0.5;
      torus.rotation.y = t * 0.3;
      torus.position.y = Math.sin(t) * 0.5;
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`,
  },
  {
    id:4,level:"Beginner",title:"Color-Changing Sphere",color:C.orange,preview:SpherePreview,
    tagline:"HSL hue-cycling sphere with an orbiting light that shifts complementary colors.",
    concepts:["SphereGeometry","Color.setHSL()","MeshPhongMaterial","Orbiting lights","Dynamic color update"],
    steps:[
      {title:"High-res sphere",body:"new THREE.SphereGeometry(1.5, 64, 64). 64×64 segments give a perfectly smooth sphere that shows specular highlights beautifully."},
      {title:"MeshPhongMaterial",body:"shininess: 200 and specular: new THREE.Color(0xffffff) create a sharp mirror-like highlight that moves as the light orbits."},
      {title:"HSL color model",body:"Hue (0–1) = wheel position. Saturation = vividness. Lightness = brightness. setHSL((t*0.1)%1, 1, 0.5) cycles every color at full saturation."},
      {title:"Wrap with modulo",body:"(t * 0.1) % 1 keeps the hue in 0–1 range. When it hits 1 it wraps back to 0 — seamlessly cycling through the full rainbow."},
      {title:"Orbit the light",body:"pointLight.position.x = cos(t)*3; pointLight.position.z = sin(t)*3. The light circles the sphere, making the specular highlight sweep around."},
      {title:"Offset light color",body:"pointLight.color.setHSL((t*0.1+0.3)%1, 1, 0.5). Offset 0.3 gives a complementary color — the light color and sphere color are always harmonious."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ChromaSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
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

    let t = 0, animId;
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
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`,
  },
  {
    id:5,level:"Beginner",title:"3D Shape Field",color:C.purple,preview:ShapeFieldPreview,
    tagline:"12 mixed geometries in a circle, each spinning independently with sine-wave height.",
    concepts:["Multiple meshes","mesh.userData","Mixed geometries","Sine wave per-object","scene.rotation"],
    steps:[
      {title:"Prepare arrays",body:"Define 6 geometries and 6 neon colors. Loop 12 times, using i%6 to cycle through them."},
      {title:"Arrange in a circle",body:"angle = (i/12)*PI*2. x = cos(angle)*4; z = sin(angle)*4. This places all 12 meshes evenly around a circle of radius 4."},
      {title:"Store per-object data",body:"mesh.userData = { speed: 0.01+random*0.02, phase: i }. userData is a plain {} — you can store any custom data there for animation."},
      {title:"Alternate wireframe",body:"wireframe: i % 3 === 0 makes every third mesh render as wireframe, creating visual variety without extra code."},
      {title:"Staggered sine wave",body:"m.position.y = Math.sin(t + m.userData.phase) * 2. The phase offset staggers each mesh's vertical position, creating a Mexican wave effect."},
      {title:"Rotate the whole scene",body:"scene.rotation.y += 0.003. Cheaper than moving the camera and naturally shows all shapes from all sides."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ShapeField() {
  const mountRef = useRef(null);

  useEffect(() => {
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
    const geos = [
      new THREE.BoxGeometry(1,1,1), new THREE.SphereGeometry(0.6,16,16),
      new THREE.TorusGeometry(0.6,0.2,8,24), new THREE.ConeGeometry(0.6,1.2,8),
      new THREE.OctahedronGeometry(0.7), new THREE.TetrahedronGeometry(0.8),
    ];
    const meshes = [];
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(geos[i % 6], new THREE.MeshStandardMaterial({
        color: colors[i%6], emissive: colors[i%6], emissiveIntensity: 0.15,
        metalness: 0.7, roughness: 0.2, wireframe: i % 3 === 0,
      }));
      const angle = (i / 12) * Math.PI * 2;
      mesh.position.set(Math.cos(angle)*4, Math.sin(i*1.3)*2, Math.sin(angle)*4);
      mesh.userData = { speed: 0.01 + Math.random()*0.02, phase: i };
      scene.add(mesh); meshes.push(mesh);
    }
    scene.add(new THREE.AmbientLight(0x333333));
    const dl = new THREE.DirectionalLight(0xffffff,1); dl.position.set(5,5,5); scene.add(dl);

    let t = 0, animId;
    const animate = () => {
      animId = requestAnimationFrame(animate); t += 0.01;
      meshes.forEach(m => {
        m.rotation.x += m.userData.speed; m.rotation.y += m.userData.speed*0.7;
        m.position.y = Math.sin(t + m.userData.phase) * 2;
      });
      scene.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`,
  },
  {
    id:6,level:"Intermediate",title:"Audio Visualizer",color:C.cyan,preview:AudioPreview,
    tagline:"64 rainbow bars in a ring that pulse to real mic audio or a simulated wave.",
    concepts:["Web Audio API","AnalyserNode","Circular bar layout","Dynamic scale lerp","Fallback simulation"],
    steps:[
      {title:"64 bars in a ring",body:"angle = (i/64)*PI*2. bar.position.x = cos(angle)*5; bar.position.z = sin(angle)*5. bar.lookAt(0,0,0) makes each bar face the center."},
      {title:"Request microphone",body:"navigator.mediaDevices.getUserMedia({audio:true}).then(stream => { new AudioContext → createMediaStreamSource → createAnalyser → connect }). analyser.fftSize = 128 gives 64 frequency bins."},
      {title:"Read frequency data",body:"analyser.getByteFrequencyData(dataArray) fills a Uint8Array(64) with 0–255 amplitude values each frame. Index i maps to bar i."},
      {title:"Smooth with lerp",body:"targetH = 0.2 + (data[i]/128)*4. bar.scale.y += (targetH - bar.scale.y) * 0.2. The 0.2 lerp factor makes bars ease toward target height, not snap."},
      {title:"Keep base on floor",body:"bar.position.y = bar.scale.y / 2. Scaling from center would make bars grow in both directions. Adjusting y keeps the base fixed at 0."},
      {title:"Fallback simulation",body:"If mic unavailable: val = 0.3 + 0.7 * |sin(t*2 + i*0.25)|. Creates a rolling wave pattern that looks convincingly audio-reactive."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AudioVisualizer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010108);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100);
    camera.position.set(0, 4, 14); camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const bars = [];
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
    scene.add(new THREE.AmbientLight(0x222244), new THREE.PointLight(0x00f5ff,2,20));

    let analyser, dataArray;
    navigator.mediaDevices?.getUserMedia({ audio: true })
      .then(stream => {
        const ctx = new AudioContext();
        analyser = ctx.createAnalyser(); analyser.fftSize = 128;
        ctx.createMediaStreamSource(stream).connect(analyser);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      }).catch(() => {});

    let t = 0, animId;
    const animate = () => {
      animId = requestAnimationFrame(animate); t += 0.02;
      if (analyser) analyser.getByteFrequencyData(dataArray);
      bars.forEach((bar, i) => {
        const val = analyser
          ? dataArray[i % dataArray.length] / 128
          : 0.3 + 0.7 * Math.abs(Math.sin(t*2 + i*0.25));
        const target = 0.2 + val * 4;
        bar.scale.y += (target - bar.scale.y) * 0.2; // lerp
        bar.position.y = bar.scale.y / 2;
      });
      scene.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: 400 }} />;
}`,
  },
  {
    id:7,level:"Intermediate",title:"Solar System",color:C.yellow,preview:SolarPreview,
    tagline:"5 planets with orbital rings orbiting the sun. Drag to explore with OrbitControls.",
    concepts:["OrbitControls","Polar orbit math","Procedural ring lines","Star field","controls.update()"],
    steps:[
      {title:"OrbitControls",body:"import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'. new OrbitControls(camera, renderer.domElement). MUST call controls.update() every frame."},
      {title:"Enable damping",body:"controls.enableDamping = true. This adds inertia — camera eases to a stop instead of stopping instantly. Required call: controls.update() inside animate()."},
      {title:"Planet data",body:"Array of { r, dist, speed, color }. Give each a random starting angle so planets don't all start at the same position."},
      {title:"Draw orbit rings",body:"128 Vector3 points in a circle: pts = Array.from({length:128}, (_,i) => { a=(i/127)*PI*2; return new Vector3(cos(a)*dist, 0, sin(a)*dist); }). new THREE.Line(geo.setFromPoints(pts), mat)."},
      {title:"Orbit animation",body:"Each frame: planet.angle += 0.001 * planet.speed. mesh.position.x = cos(angle)*dist; mesh.position.z = sin(angle)*dist."},
      {title:"Star field background",body:"3000 random points in ±150 units: Float32Array of random XYZ, BufferGeometry, PointsMaterial. Stars don't move — they form the fixed backdrop."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SolarSystem() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 1000);
    camera.position.set(0, 12, 20);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const sun = new THREE.Mesh(new THREE.SphereGeometry(1.5,32,32), new THREE.MeshBasicMaterial({color:0xffcc00}));
    scene.add(sun, new THREE.PointLight(0xffffff,2,100), new THREE.AmbientLight(0x111122));

    const planets = [
      {r:.3,dist:3.5,speed:4,color:0x888888},{r:.5,dist:5.5,speed:1.6,color:0xffaa44},
      {r:.55,dist:7.5,speed:1,color:0x4477ff},{r:.35,dist:9.5,speed:.53,color:0xff4422},
      {r:1.1,dist:13,speed:.08,color:0xffdd88},
    ];
    const meshes = planets.map(p => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.r,16,16), new THREE.MeshStandardMaterial({color:p.color,roughness:.7}));
      const pts = Array.from({length:128},(_,i) => { const a=(i/127)*Math.PI*2; return new THREE.Vector3(Math.cos(a)*p.dist,0,Math.sin(a)*p.dist); });
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({color:0x222244})));
      scene.add(mesh);
      return {...p, mesh, angle: Math.random()*Math.PI*2};
    });

    const sv = new Float32Array(3000).map(()=>(Math.random()-.5)*300);
    const sg = new THREE.BufferGeometry(); sg.setAttribute("position",new THREE.BufferAttribute(sv,3));
    scene.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0xffffff,size:.2})));

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      meshes.forEach(p => { p.angle+=.001*p.speed; p.mesh.position.x=Math.cos(p.angle)*p.dist; p.mesh.position.z=Math.sin(p.angle)*p.dist; p.mesh.rotation.y+=.02; });
      sun.rotation.y+=.002; controls.update();
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); controls.dispose(); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:8,level:"Intermediate",title:"Raycaster Click Detector",color:C.pink,preview:RayPreview,
    tagline:"Click any 3D shape to highlight it — the foundation of all 3D UI interaction.",
    concepts:["THREE.Raycaster","NDC mouse coordinates","intersectObjects()","Event listeners","Selection state management"],
    steps:[
      {title:"What is raycasting?",body:"A mathematical ray is shot from the camera through the pixel you clicked into the 3D scene. Objects that the ray passes through are returned sorted front to back."},
      {title:"Normalize mouse to NDC",body:"NDC = Normalized Device Coordinates (−1 to +1). mouse.x = ((clientX − rect.left) / width) * 2 − 1. Note Y is negated: −((clientY − rect.top) / height) * 2 + 1."},
      {title:"Fire the ray",body:"raycaster.setFromCamera(mouse, camera). const hits = raycaster.intersectObjects(myObjects). hits[0] is the closest hit, hits[0].object is the Mesh."},
      {title:"Manage selection state",body:"Keep a 'selected' ref variable. When a new object is clicked, restore the previous one's color before highlighting the new selection."},
      {title:"Exact hit point",body:"hits[0].point is a Vector3 of the exact 3D position where the ray hit. Useful for placing objects at the click position."},
      {title:"Clean up listeners",body:"Return () => renderer.domElement.removeEventListener('click', onClick) in the useEffect cleanup. Otherwise the handler persists after unmount."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ClickDetector() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x050510);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100); camera.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geos = [
      new THREE.BoxGeometry(1.2,1.2,1.2), new THREE.SphereGeometry(.7,32,32),
      new THREE.ConeGeometry(.7,1.4,32), new THREE.TorusGeometry(.7,.25,16,64),
      new THREE.OctahedronGeometry(.8), new THREE.TetrahedronGeometry(.9),
    ];
    const objects = geos.map((geo,i) => {
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:0x334455,metalness:.6,roughness:.3}));
      mesh.position.x = (i%3-1)*3; mesh.position.y = i<3 ? 1.5 : -1.5;
      scene.add(mesh); return mesh;
    });
    scene.add(new THREE.AmbientLight(0x222233));
    const dl = new THREE.DirectionalLight(0xffffff,1.5); dl.position.set(5,5,5); scene.add(dl);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let selected = null;

    const onClick = e => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x =  ((e.clientX - rect.left) / w)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)  / h) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(objects);
      if (selected) { selected.material.color.setHex(0x334455); selected.material.emissive.setHex(0); }
      selected = hits.length > 0 ? hits[0].object : null;
      if (selected) { selected.material.color.setHex(0xff00cc); selected.material.emissive.setHex(0x440044); }
    };
    renderer.domElement.addEventListener("click", onClick);

    let animId;
    const animate = () => { animId=requestAnimationFrame(animate); objects.forEach((o,i)=>o.rotation.y+=.01+i*.002); renderer.render(scene,camera); };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.domElement.removeEventListener("click",onClick); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:9,level:"Intermediate",title:"Procedural Terrain",color:C.lime,preview:TerrainPreview,
    tagline:"Vertex-deformed plane with elevation-based vertex coloring — water, sand, grass, snow.",
    concepts:["PlaneGeometry vertex edit","Layered sine noise","Vertex colors","computeVertexNormals()","FogExp2"],
    steps:[
      {title:"Dense plane",body:"new THREE.PlaneGeometry(20, 20, 80, 80). Rotate flat: geo.rotateX(-Math.PI/2). 80×80 = 6,400 quads, enough for convincing terrain without being slow."},
      {title:"Access vertex positions",body:"const pos = geo.attributes.position. pos.getX(i), pos.getZ(i) for reading X and Z. pos.setY(i, value) for writing the height."},
      {title:"Layered noise",body:"y = sin(x*0.5)*cos(z*0.5)*2 + sin(x*1.3)*cos(z*1.1)*1 + sin(x*2.7)*cos(z*2.3)*0.5. Multiple frequencies at different amplitudes create natural-looking variety."},
      {title:"Color by elevation",body:"t = (y+3)/6 normalizes to 0–1. t<0.3 → blue (water), 0.3–0.4 → gold (sand), 0.4–0.7 → green (grass), else → white (snow). Store in Float32Array."},
      {title:"Recompute normals",body:"geo.computeVertexNormals() MUST be called after changing vertex positions. Without it, lighting is wrong because normals still point straight up."},
      {title:"Orbiting camera",body:"camera.position.x = Math.sin(t*0.0003)*6; camera.lookAt(0,1,0). Creates a gentle orbit around the terrain without needing OrbitControls."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Terrain() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x020810);
    scene.fog = new THREE.FogExp2(0x020810, 0.035);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100); camera.position.set(0,5,10);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(20, 20, 80, 80); geo.rotateX(-Math.PI/2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3); const col = new THREE.Color();

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const y = Math.sin(x*.5)*Math.cos(z*.5)*2 + Math.sin(x*1.3+.5)*Math.cos(z*1.1)*1 + Math.sin(x*2.7)*Math.cos(z*2.3+1)*.5;
      pos.setY(i, y);
      const t = (y+3)/6;
      if(t<.3)col.set(0x0044ff); else if(t<.4)col.set(0xffcc44); else if(t<.7)col.set(0x00aa22); else col.set(0xffffff);
      colors[i*3]=col.r; colors[i*3+1]=col.g; colors[i*3+2]=col.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals(); // required after moving vertices!

    scene.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({vertexColors:true,roughness:.8})));
    scene.add(new THREE.DirectionalLight(0xffeedd,2), new THREE.AmbientLight(0x112233,.8));

    let animId;
    const animate = () => { animId=requestAnimationFrame(animate); camera.position.x=Math.sin(Date.now()*.0003)*6; camera.lookAt(0,1,0); renderer.render(scene,camera); };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:10,level:"Intermediate",title:"Shader Wave",color:C.orange,preview:ShaderPreview,
    tagline:"Custom GLSL vertex + fragment shaders — your first step into GPU programming.",
    concepts:["ShaderMaterial","GLSL vertex shader","GLSL fragment shader","uniforms","varyings"],
    steps:[
      {title:"Shader pipeline",body:"Vertex shader runs once per vertex and can move geometry. Fragment shader runs once per pixel and sets its color. They communicate via 'varying' variables."},
      {title:"Vertex shader",body:"Take the model position, add elevation = sin(x*3+uTime)*0.3 + sin(z*4+uTime*1.5)*0.15. Add elevation to y. Pass it as 'varying float vElevation' to the fragment shader."},
      {title:"Fragment shader",body:"Receive vElevation. Normalize: t = (vElevation+0.45)/0.9. Use mix(deepBlue, neonCyan, t) to color by height. gl_FragColor = vec4(color, 1.0)."},
      {title:"uniforms",body:"const uniforms = { uTime: { value: 0 } }. Pass to ShaderMaterial. Uniforms are how JavaScript sends data to the shader — one value shared across all vertices."},
      {title:"Animate uTime",body:"uniforms.uTime.value += 0.03 inside animate(). The shader reads this every frame, making the wave move. This is the standard animation pattern for shaders."},
      {title:"Wireframe overlay",body:"Second Mesh with same geometry, wireframe: true, opacity 0.12. This lets you see the mesh structure moving underneath the colored surface."},
    ],
    code:`import { useEffect, useRef } from "react";
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
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x010108);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100); camera.position.set(0,3,6); camera.lookAt(0,0,0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(10, 10, 128, 128); geo.rotateX(-Math.PI/2);
    const uniforms = { uTime: { value: 0 } };
    scene.add(new THREE.Mesh(geo, new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, side: THREE.DoubleSide })));
    scene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color:0x003333, wireframe:true, transparent:true, opacity:0.12 })));
    scene.add(new THREE.AmbientLight(0x111111));

    let animId;
    const animate = () => { animId=requestAnimationFrame(animate); uniforms.uTime.value+=0.03; renderer.render(scene,camera); };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:11,level:"Advanced",title:"DNA Double Helix",color:C.teal,preview:DNAPreview,
    tagline:"A double helix of spheres + cross-bars, built entirely from parametric math.",
    concepts:["Parametric helix math","Two-strand offset","CylinderGeometry bars","Trigonometric placement","Scene-level rotation"],
    steps:[
      {title:"Helix math",body:"A helix is a circle that rises. t = (i/N)*PI*8 gives 4 full rotations. y = (i/N)*8−4 spreads points along Y. x = cos(t)*radius, z = sin(t)*radius."},
      {title:"Two-strand offset",body:"Second strand = first strand with x and z negated (equivalent to adding PI to the angle). forEach([1, -1], side => position.set(cos(t)*1.2*side, y, sin(t)*1.2*side))."},
      {title:"Color-code strands",body:"Strand 1 = cyan (0x00f5ff), Strand 2 = magenta (0xff00cc). Different emissive colors reinforce the distinction under lighting."},
      {title:"Cross-bars",body:"Every 4th step, add a CylinderGeometry(0.04, 0.04, 2.4). Position at (0, y, 0). Rotate z by PI/2 to lay it horizontal. Rotate x by t to align with helix."},
      {title:"Two complementary lights",body:"PointLight(cyan) + PointLight(magenta) at (0,0,0). Each strand is lit by its complementary color, enhancing the two-strand visual separation."},
      {title:"Scene rotation",body:"scene.rotation.y += 0.005. Much simpler than orbiting the camera, and lets you see the full 3D helix structure from all angles as it rotates."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DNAHelix() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x020212);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100); camera.position.set(4,0,8); camera.lookAt(0,0,0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const N = 60;
    for (let i = 0; i < N; i++) {
      const t = (i/N)*Math.PI*8 - Math.PI*4; // 4 full rotations
      const y = (i/N)*8 - 4;                  // spread along Y

      // Two strands at ±radius
      [1, -1].forEach((side, si) => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 12, 12),
          new THREE.MeshStandardMaterial({
            color:    si===0 ? 0x00f5ff : 0xff00cc,
            emissive: si===0 ? 0x003344 : 0x330022,
            metalness:.7, roughness:.2,
          })
        );
        sphere.position.set(Math.cos(t)*1.2*side, y, Math.sin(t)*1.2*side);
        scene.add(sphere);
      });

      // Cross-bar every 4 steps
      if (i % 4 === 0) {
        const bar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04,0.04,2.4,8),
          new THREE.MeshStandardMaterial({color:0x888888, metalness:.5})
        );
        bar.position.set(0, y, 0);
        bar.rotation.z = Math.PI/2; // lay horizontal
        bar.rotation.x = t;         // align with helix angle
        scene.add(bar);
      }
    }

    scene.add(new THREE.PointLight(0x00f5ff,2,20), new THREE.PointLight(0xff00cc,2,20), new THREE.AmbientLight(0x111122));

    let animId;
    const animate = () => { animId=requestAnimationFrame(animate); scene.rotation.y+=.005; renderer.render(scene,camera); };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:12,level:"Advanced",title:"Morphing Blob",color:C.purple,preview:BlobPreview,
    tagline:"An organic sphere that breathes using per-vertex sine noise — live every frame.",
    concepts:["IcosahedronGeometry detail 5","Per-vertex manipulation","pos.needsUpdate = true","computeVertexNormals()","Original position cache"],
    steps:[
      {title:"High-detail icosahedron",body:"new THREE.IcosahedronGeometry(1.5, 5). Detail level 5 gives ~5000 triangles — enough for smooth organic deformation without visible facets."},
      {title:"Cache originals",body:"const orig = geo.attributes.position.array.slice(). Always deform relative to originals, never accumulate. Without this, errors compound and the mesh explodes."},
      {title:"3-axis noise",body:"noise = sin(ox*2+t) * cos(oy*2.5+t*1.1) * sin(oz*1.8+t*0.9). Three axes × three frequencies × three time speeds create rich, non-repeating movement."},
      {title:"Radial scale factor",body:"factor = 1 + noise * 0.25. Set pos.setXYZ(i, ox*factor, oy*factor, oz*factor). This pushes vertices outward from center while preserving the sphere shape roughly."},
      {title:"Mark for GPU upload",body:"geo.attributes.position.needsUpdate = true EVERY frame. Without this the GPU never sees the updated vertex positions. Also call geo.computeVertexNormals()."},
      {title:"Wireframe overlay",body:"Second Mesh with the same geometry (shared — changes to geo affect both). wireframe:true, transparent:true, opacity:0.15. Shows the deforming mesh structure."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MorphingBlob() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x080010);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100); camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1.5, 5); // detail=5 → ~5000 triangles
    const orig = geo.attributes.position.array.slice(); // cache originals!

    scene.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:0x9b00ff,emissive:0x220044,metalness:.3,roughness:.4})));
    scene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({color:0xbf00ff,wireframe:true,transparent:true,opacity:.15})));
    scene.add(new THREE.PointLight(0x9b00ff,3,15), new THREE.PointLight(0x00f5ff,1.5,15), new THREE.AmbientLight(0x110022));

    let t=0, animId;
    const pos = geo.attributes.position;
    const animate = () => {
      animId=requestAnimationFrame(animate); t+=.015;
      for (let i=0; i<pos.count; i++) {
        const ox=orig[i*3], oy=orig[i*3+1], oz=orig[i*3+2];
        const noise=Math.sin(ox*2+t)*Math.cos(oy*2.5+t*1.1)*Math.sin(oz*1.8+t*.9);
        const f=1+noise*.25;
        pos.setXYZ(i, ox*f, oy*f, oz*f);
      }
      pos.needsUpdate=true;      // tell GPU about changes
      geo.computeVertexNormals(); // fix lighting normals
      renderer.render(scene,camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:13,level:"Advanced",title:"Vortex Tunnel",color:C.blue,preview:TunnelPreview,
    tagline:"Infinite tunnel of spinning rings rushing toward you with a barrel-roll camera.",
    concepts:["TorusGeometry rings","Z-reset infinite loop","Camera rotation","Procedural color","Particle columns"],
    steps:[
      {title:"Create 20 rings",body:"Spread 20 torus rings along Z: ring.position.z = -i * 3. Rotate X by PI/2 so the ring faces down the tunnel. Each ring spaced 3 units behind the last."},
      {title:"Rush toward camera",body:"Each frame: ring.position.z += speed. When a ring passes z > 4 (behind the camera), reset to z = -55. Instant teleportation feels seamless from inside."},
      {title:"Vary ring sizes",body:"radius = 2 + random*0.5. tube = 0.03 + random*0.05. This subtle variation breaks the rigid regularity and makes the tunnel feel organic."},
      {title:"Spin rings in place",body:"ring.rotation.z += 0.003 each frame. The rings slowly rotate as they rush toward you — adds a hypnotic, disorienting quality."},
      {title:"Barrel-roll camera",body:"camera.rotation.z += 0.002. Even 0.002 rad/frame = ~7°/sec — subtle but powerfully intensifies the tunnel sensation. No OrbitControls needed."},
      {title:"Particle stream",body:"1000 points randomly placed in a 4×4×60 tube (Z from 0 to −60). Small green dots moving with the rings reinforce depth and motion blur feeling."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Tunnel() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x000800);
    const camera = new THREE.PerspectiveCamera(80, w/h, 0.1, 100); camera.position.set(0,0,0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    // 20 rings spread along Z tunnel
    const rings = Array.from({length:20}, (_, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2+Math.random()*.5, .03+Math.random()*.05, 6, 60),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(.35, 1, .3+Math.random()*.4),
          transparent:true, opacity:.7,
        })
      );
      ring.rotation.x = Math.PI/2;  // face down the tunnel
      ring.position.z  = -i * 3;
      ring.userData = { speed: .02+Math.random()*.01 };
      scene.add(ring); return ring;
    });

    // Particle stream
    const pPos = new Float32Array(1000*3);
    for(let i=0;i<1000;i++){pPos[i*3]=(Math.random()-.5)*4;pPos[i*3+1]=(Math.random()-.5)*4;pPos[i*3+2]=Math.random()*-60;}
    const pGeo=new THREE.BufferGeometry();pGeo.setAttribute("position",new THREE.BufferAttribute(pPos,3));
    scene.add(new THREE.Points(pGeo,new THREE.PointsMaterial({color:0x00ff44,size:.04})));

    let animId;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      rings.forEach(r => {
        r.position.z += r.userData.speed; // rush toward camera
        r.rotation.z += .003;             // spin in place
        if (r.position.z > 4) r.position.z = -55; // teleport to back
      });
      camera.rotation.z += .002; // barrel roll
      renderer.render(scene,camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
  {
    id:14,level:"Advanced",title:"N-Body Gravity",color:C.yellow,preview:GravityPreview,
    tagline:"12 neon balls attract each other with real gravitational physics — fully interactive.",
    concepts:["N-body gravity","Force accumulation","Euler integration","velocity damping","Boundary collision"],
    steps:[
      {title:"Store physics in userData",body:"mesh.userData = { vx, vy, mass }. userData is a plain object — you can store any per-object state there. Mass affects gravitational force."},
      {title:"Compute forces",body:"For each pair (i,j): dx = other.x − self.x, dy = other.y − self.y. dist = sqrt(dx²+dy²) + 0.5 (softening prevents division-by-zero at close range)."},
      {title:"Newton's law",body:"force = G * massA * massB / dist². ax = (dx/dist)*force / massA. vx += ax. Use G = 0.0002 — too large and everything explodes instantly."},
      {title:"Euler integration",body:"position.x += vx; position.y += vy each frame. Simple but sufficient for visual simulation. The +0.5 softening keeps energy bounded."},
      {title:"Damping",body:"vx *= 0.999 each frame. Without damping, numerical integration errors accumulate energy and balls fly off screen. 0.999 is barely noticeable but critical."},
      {title:"Boundary bounce",body:"if (|pos.x| > 5) vx *= -1. Reversing the velocity component reflects the ball off an invisible wall. Apply same for Y boundary."},
    ],
    code:`import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GravityBalls() {
  const mountRef = useRef(null);
  useEffect(() => {
    const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x060008);
    const camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100); camera.position.set(0,0,12);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); mountRef.current.appendChild(renderer.domElement);

    const neons = [0x00f5ff,0xff00cc,0x00ff88,0xffe500,0xff6d00,0x9b00ff];
    const balls = Array.from({length:12}, (_, i) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(.3+Math.random()*.3, 20, 20),
        new THREE.MeshStandardMaterial({color:neons[i%6],emissive:neons[i%6],emissiveIntensity:.3,metalness:.7,roughness:.2})
      );
      mesh.position.set((Math.random()-.5)*8,(Math.random()-.5)*6,(Math.random()-.5)*2);
      mesh.userData={vx:(Math.random()-.5)*.04,vy:(Math.random()-.5)*.04,mass:.3+Math.random()*.3};
      scene.add(mesh); return mesh;
    });
    scene.add(new THREE.AmbientLight(0x111111),new THREE.PointLight(0xffffff,2,30));

    const G = 0.0002;
    let animId;
    const animate = () => {
      animId=requestAnimationFrame(animate);
      balls.forEach((b,i) => {
        // Accumulate gravitational forces from all other balls
        balls.forEach((other,j) => {
          if(i===j) return;
          const dx=other.position.x-b.position.x, dy=other.position.y-b.position.y;
          const dist=Math.sqrt(dx*dx+dy*dy)+0.5; // softening factor
          const force=G*b.userData.mass*other.userData.mass/(dist*dist);
          b.userData.vx+=(dx/dist)*force;
          b.userData.vy+=(dy/dist)*force;
        });
        b.position.x+=b.userData.vx; b.position.y+=b.userData.vy;
        b.userData.vx*=.999; b.userData.vy*=.999; // damping
        if(Math.abs(b.position.x)>5)b.userData.vx*=-1; // bounce
        if(Math.abs(b.position.y)>4)b.userData.vy*=-1;
      });
      renderer.render(scene,camera);
    };
    animate();
    return () => { cancelAnimationFrame(animId); renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width:"100%", height:400 }} />;
}`,
  },
];

// ─── UI COMPONENTS ────────────────────────────────────────────────────────────
const levelColors = { Beginner: C.lime, Intermediate: C.yellow, Advanced: C.pink };
const levelBg = { Beginner: "#003311", Intermediate: "#332600", Advanced: "#330011" };

function Tag({ level }) {
  return (
    <span style={{ background: levelBg[level], color: levelColors[level], border: `1px solid ${levelColors[level]}44`, borderRadius: 4, fontSize: 10, fontFamily: "monospace", padding: "2px 8px", letterSpacing: 1 }}>
      {level.toUpperCase()}
    </span>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div style={{ position: "relative" }}>
      <button onClick={copy} style={{ position: "absolute", top: 10, right: 10, background: copied ? "#00ff8822" : "#1a1a3a", color: copied ? C.lime : C.muted, border: `1px solid ${copied ? C.lime : C.dim}`, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontFamily: "monospace", cursor: "pointer", zIndex: 2 }}>
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre style={{ background: "#050515", border: `1px solid ${C.border}`, borderRadius: 10, padding: "16px 14px", fontSize: 11.5, color: "#c8c8ff", fontFamily: "'Courier New', monospace", overflowX: "auto", margin: 0, lineHeight: 1.7, maxHeight: 440, overflowY: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StepList({ steps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#0d0d2a", border: `1px solid ${C.dim}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: C.muted, fontFamily: "monospace", marginTop: 1 }}>{i + 1}</div>
          <div>
            <div style={{ color: C.text, fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{s.title}</div>
            <div style={{ color: C.muted, fontSize: 12, lineHeight: 1.65 }}>{s.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  const Preview = p.preview;
  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.2s" }}>
      <div style={{ position: "relative", borderBottom: `1px solid ${C.border}` }}>
        <Preview />
        <div style={{ position: "absolute", top: 10, left: 10 }}><Tag level={p.level} /></div>
        <div style={{ position: "absolute", top: 10, right: 10, background: "#00000077", backdropFilter: "blur(4px)", borderRadius: 6, padding: "3px 8px", fontSize: 10, color: C.muted, fontFamily: "monospace" }}>LIVE ●</div>
      </div>
      <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ color: p.color, margin: 0, fontSize: 14, fontFamily: "monospace", fontWeight: 700 }}>
            <span style={{ color: C.dim }}>{String(p.id).padStart(2,"0")}.</span> {p.title}
          </h3>
        </div>
        <p style={{ color: C.muted, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{p.tagline}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {p.concepts.slice(0,3).map(c => (
            <span key={c} style={{ background: "#0a0a22", color: C.dim, border: `1px solid ${C.border}`, borderRadius: 4, fontSize: 10, padding: "1px 6px", fontFamily: "monospace" }}>{c}</span>
          ))}
          {p.concepts.length > 3 && <span style={{ color: C.dim, fontSize: 10, alignSelf: "center" }}>+{p.concepts.length - 3} more</span>}
        </div>
        <button onClick={() => onOpen(p)} style={{ marginTop: "auto", background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}44`, borderRadius: 8, padding: "9px", fontSize: 12, fontFamily: "monospace", cursor: "pointer", letterSpacing: 0.5 }}>
          View Walkthrough + Code →
        </button>
      </div>
    </div>
  );
}

function ProjectModal({ p, onClose }) {
  const [tab, setTab] = useState("steps");
  const Preview = p.preview;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, overflowY: "auto" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.surface, border: `1px solid ${p.color}44`, borderRadius: 18, width: "100%", maxWidth: 840, maxHeight: "92vh", overflowY: "auto", boxShadow: `0 0 100px ${p.color}18` }}>
        <div style={{ padding: "18px 24px 14px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: C.surface, zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Tag level={p.level} />
            <h2 style={{ color: p.color, margin: 0, fontSize: 16, fontFamily: "monospace" }}>{p.title}</h2>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: C.muted, fontSize: 22, cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ borderBottom: `1px solid ${C.border}` }}>
          <Preview />
        </div>
        <div style={{ display: "flex", borderBottom: `1px solid ${C.border}` }}>
          {[["steps","📋 How to Build"],["code","💻 Full Code"]].map(([t,label]) => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, background: tab===t ? `${p.color}0e` : "transparent", color: tab===t ? p.color : C.muted, border: "none", borderBottom: tab===t ? `2px solid ${p.color}` : "2px solid transparent", padding: "12px", fontSize: 13, fontFamily: "monospace", cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>
        <div style={{ padding: "20px 24px 28px" }}>
          {tab === "steps" && (
            <div>
              <p style={{ color: C.muted, fontSize: 12, margin: "0 0 18px", lineHeight: 1.7 }}>{p.tagline}</p>
              <StepList steps={p.steps} />
              <div style={{ marginTop: 20, background: "#0a0a1e", border: `1px solid ${C.border}`, borderRadius: 8, padding: "14px 18px" }}>
                <p style={{ color: C.dim, fontSize: 10, fontFamily: "monospace", margin: "0 0 8px", letterSpacing: 2 }}>CONCEPTS IN THIS PROJECT</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.concepts.map(c => <span key={c} style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}33`, borderRadius: 5, fontSize: 11, padding: "3px 9px", fontFamily: "monospace" }}>{c}</span>)}
                </div>
              </div>
            </div>
          )}
          {tab === "code" && <CodeBlock code={p.code} />}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function ThreeJSGuide() {
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const filtered = PROJECTS.filter(p =>
    (filter === "All" || p.level === filter) &&
    (search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.tagline.toLowerCase().includes(search.toLowerCase()))
  );

  const counts = { Beginner: 5, Intermediate: 5, Advanced: 4 };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Courier New', monospace" }}>
      {/* Hero */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "44px 24px 32px", textAlign: "center", background: `radial-gradient(ellipse at 50% 0%, #0a0a2a 0%, ${C.bg} 65%)` }}>
        <div style={{ fontSize: 10, color: C.muted, letterSpacing: 8, marginBottom: 14 }}>◈ INTERACTIVE GUIDE ◈</div>
        <h1 style={{ fontSize: "clamp(34px, 7vw, 62px)", fontWeight: 900, margin: "0 0 10px", background: `linear-gradient(135deg, ${C.cyan}, ${C.magenta}, ${C.lime})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: -1 }}>
          THREE.JS PROJECTS
        </h1>
        <p style={{ color: C.muted, fontSize: 13, margin: "0 0 24px", maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>
          14 projects — each with a live 3D preview, step-by-step walkthrough, and copy-ready React code.
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", fontSize: 12 }}>
          {Object.entries(counts).map(([level, n]) => (
            <span key={level} style={{ display: "flex", alignItems: "center", gap: 7, color: C.muted }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: levelColors[level], display: "inline-block", boxShadow: `0 0 6px ${levelColors[level]}` }} />
              {n} {level}
            </span>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects..." style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 14px", color: C.text, fontSize: 12, fontFamily: "monospace", outline: "none", flex: 1, minWidth: 160, maxWidth: 240 }} />
        <div style={{ display: "flex", gap: 5 }}>
          {levels.map(l => (
            <button key={l} onClick={() => setFilter(l)} style={{ background: filter===l ? `${levelColors[l]||C.cyan}15` : "transparent", color: filter===l ? (levelColors[l]||C.cyan) : C.muted, border: `1px solid ${filter===l?(levelColors[l]||C.cyan)+"55":C.border}`, borderRadius: 7, padding: "7px 13px", fontSize: 11, fontFamily: "monospace", cursor: "pointer" }}>
              {l}
            </button>
          ))}
        </div>
        <span style={{ color: C.dim, fontSize: 11, marginLeft: "auto", fontFamily: "monospace" }}>{filtered.length} / {PROJECTS.length}</span>
      </div>

      {/* Grid */}
      <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
        {filtered.map(p => <ProjectCard key={p.id} p={p} onOpen={setModal} />)}
      </div>

      {/* Setup footer */}
      <div style={{ margin: "0 24px 40px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 22px" }}>
        <p style={{ color: C.dim, fontSize: 10, letterSpacing: 3, margin: "0 0 12px", fontFamily: "monospace" }}>QUICK SETUP</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[["Install","npm install three"],["Types","npm install @types/three"],["OrbitControls","import from 'three/examples/jsm/controls/OrbitControls'"]].map(([label,cmd]) => (
            <div key={label}>
              <div style={{ color: C.muted, fontSize: 10, marginBottom: 4 }}>{label}</div>
              <code style={{ color: C.cyan, fontSize: 11 }}>{cmd}</code>
            </div>
          ))}
        </div>
      </div>

      {modal && <ProjectModal p={modal} onClose={() => setModal(null)} />}
    </div>
  );
}