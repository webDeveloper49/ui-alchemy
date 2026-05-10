import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './index.scss';

const CustomisedThreeJS = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const canvas = containerRef.current;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // ← alpha: true for transparent bg
    renderer.setSize(w, h);
    canvas.querySelectorAll('canvas').forEach(c => c.remove());
    canvas.appendChild(renderer.domElement);

     // Orbit Controls
    const controls = new OrbitControls(
      camera,
      renderer.domElement
    );

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enablePan = true;
    controls.enableZoom = true;

    const geo = new THREE.IcosahedronGeometry(1,2);

    const mat = new THREE.MeshBasicMaterial({
      color: 0xff0000, 
      wireframe: true,
      transparent: true,
      opacity: 1,
      side: THREE.FrontSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const mat2 = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      roughness: 0.4,
      metalness: 0.6,
      flatShading: true,
      wireframe: false
    });

      
    const mesh2 = new THREE.Mesh(geo, mat2);
    scene.add(mesh2);

    
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.2, 8, 24),
      new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: false, opacity: 1 })
    );
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.2, 8, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: false, opacity: 1, wireframe: true })
    );
    torus.add(torus2);

    const count = 8;
    const cubes: THREE.Mesh[] = [];

    for (let i = 0; i < count; i++) {
      const cube = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(i / count, 0.8, 0.6),
          metalness: 0.9,
          roughness: 0.1,
          emissive: new THREE.Color().setHSL(i / count, 1, 0.2),
        })
      );
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2;
      cube.position.set(
        Math.cos(angle) *radius,
        Math.sin(angle) *radius,
        0
      )

      scene.add(cube);
      cubes.push(cube); 
    }

    // lights
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    
    const pointLight1 = new THREE.PointLight(0x6e40ff, 3, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const light = new THREE.SpotLight(0xffffff, 13, 0, Math.PI/3, 0,2);
    light.position.set(0, 10, 0);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target); 

    const light1 = new THREE.HemisphereLight(0xffffff,0xffffff,3);
    scene.add(light1);

    const light2 = new THREE.RectAreaLight(0xffe200, 5, 14, 4);
    light2.position.set(10, -5, 10);
    light2.lookAt(0, 0, 0); // uses rotation, not target
    scene.add(light2);

    
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      mesh.rotation.x  += 0.01;
      mesh.rotation.y  += 0.01;
      mesh.rotation.z += 0.01;
      mesh2.rotation.x += 0.01;
      mesh2.rotation.y += 0.01;
      torus.rotation.z  += 0.01;
      torus.rotation.x  += 0.01;
      torus.rotation.y  += 0.01;
      


      // ✅ Orbit cubes around the scene + spin each one individually
      const t = Date.now() * 0.001;
      cubes.forEach((cube, i) => {
        const angle = (i / count) * Math.PI * 2 + t * 0.5;  // orbit speed
        const radius = 2.2;
        cube.position.x = Math.cos(angle) * radius;
        cube.position.y = Math.sin(angle) * radius;
        cube.rotation.x += 0.3;
        cube.rotation.y += 0.3;
      });

      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      // controls.dispose();
      renderer.dispose();
      canvas.querySelectorAll('canvas').forEach(c => c.remove());
    };
  }, []);

  return (
    <div className="my-canvas">
      <div ref={containerRef} className="my-canvas-renderer" />

      <div className="content-layer">  {/* ← sibling, not child of renderer */}
        <h1>ThreeJS Background</h1>
        <p>This text is rendered in HTML above the animated canvas.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default CustomisedThreeJS;