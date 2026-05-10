import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './index.scss';

const SolarSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const canvas = containerRef.current;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    // ── Scene setup ──────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.set(0, 50, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvas.querySelectorAll('canvas').forEach(c => c.remove());
    canvas.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // ── Star field background ─────────────────────────────────────
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(6000).map(() => (Math.random() - 0.5) * 400);
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.55 })
    ));

    // ── Sun ───────────────────────────────────────────────────────
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(2.2, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xffdd00,
        emissive: 0xff8800,
        emissiveIntensity: 1.2,
        roughness: 0.4,
        metalness: 0.1,
      })
    );
    scene.add(sun);

    // Sun glow (wireframe halo)
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffaa00, wireframe: true, transparent: true, opacity: 0.15 })
    ));

    // ── Lights ────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x111133, 1));
    const sunLight = new THREE.PointLight(0xffffff, 3, 200);
    scene.add(sunLight);

    // ── Planet data ───────────────────────────────────────────────
    // [ name, orbitRadius, planetRadius, color, emissive, orbitSpeed, selfRotSpeed, tilt ]
    const planetData = [
      ['Mercury', 5.5,  1.22, 0xb5b5b5, 0x333333, 4.74,  0.02, 0.03],
      ['Venus',   7.2,  1.38, 0xe8c97a, 0x996622, 1.85,  0.008, 0.05],
      ['Earth',   9.2,  1.42, 0x2277ff, 0x003388, 1.00,  0.02, 0.41],
      ['Mars',    11.5, 1.30, 0xdd4411, 0x882200, 0.83,  0.019, 0.44],
      ['Jupiter', 14.5, 1.90, 0xc88844, 0x664422, 0.50, 0.045, 0.05],
      ['Saturn',  18.0, 1.75, 0xe4d191, 0x887733, 0.40, 0.038, 0.47],
      ['Uranus',  21.5, 1.55, 0x55ddee, 0x115566, 0.30, 0.03,  1.71],
      ['Neptune', 24.5, 1.50, 0x3355ff, 0x112288, 0.20, 0.028, 0.49],
      ['Pluto',   27.5, 1.08, 0xaa9988, 0x554433, 0.10, 0.015, 0.12],
    ] as const;

    // ── Build orbits + planets ────────────────────────────────────
    type PlanetObj = {
      pivot: THREE.Object3D;
      mesh:  THREE.Mesh;
      selfRotSpeed: number;
      orbitSpeed:   number;
    };

    const planets: PlanetObj[] = planetData.map(
      ([, orbitR, planetR, color, emissive, orbitSpeed, selfRotSpeed, tilt]) => {

        // -- Orbit ring --
        const orbitPts = Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(a) * orbitR, 0, Math.sin(a) * orbitR);
        });
        const orbitLine = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(orbitPts),
          new THREE.LineBasicMaterial({ color: 0x334466, transparent: true, opacity: 0.5 })
        );
        scene.add(orbitLine);

        // -- Pivot (invisible parent that orbits the sun) --
        const pivot = new THREE.Object3D();
        pivot.rotation.y = Math.random() * Math.PI * 2; // random start angle
        scene.add(pivot);

        // -- Planet mesh --
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(planetR, 24, 24),
          new THREE.MeshStandardMaterial({
            color,
            emissive,
            emissiveIntensity: 0.3,
            roughness: 0.7,
            metalness: 0.1,
            flatShading: false,
          })
        );
        mesh.position.x = orbitR;        // place on orbit radius
        mesh.rotation.z = tilt;          // axial tilt

        // -- Wireframe overlay on planet --
        const wireMesh = new THREE.Mesh(
          new THREE.SphereGeometry(planetR * 1.01, 12, 12),
          new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.005,
          })
        );
        mesh.add(wireMesh);

        pivot.add(mesh);

        return { pivot, mesh, selfRotSpeed, orbitSpeed };
      }
    );

    // ── Saturn rings ──────────────────────────────────────────────
    // Saturn is index 5 in planetData
    const saturnMesh = planets[5].mesh;
    const ringGeo = new THREE.TorusGeometry(2.05, 0.28, 4, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc8b87a,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const saturnRing = new THREE.Mesh(ringGeo, ringMat);
    saturnRing.rotation.x = Math.PI / 2.4;
    saturnMesh.add(saturnRing);

    // ── Animation loop ────────────────────────────────────────────
    // const clock = new THREE.Clock();

    const animate = () => {
      const animId = requestAnimationFrame(animate);
      //   const t = clock.getElapsedTime();

      // Sun slow spin
      sun.rotation.y += 0.03;

      // Each planet: orbit pivot + self-rotation
      planets.forEach(({ pivot, mesh, orbitSpeed, selfRotSpeed }) => {
        pivot.rotation.y = pivot.rotation.y + orbitSpeed * 0.008;  // orbit around sun
        mesh.rotation.y  += selfRotSpeed;                            // spin on own axis
      });

      controls.update();
      renderer.render(scene, camera);

      return animId;
    };

    const id = animate();

    // Resize handler
    const onResize = () => {
      const nw = canvas.clientWidth;
      const nh = canvas.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(id);
      controls.dispose();
      renderer.dispose();
      window.removeEventListener('resize', onResize);
      canvas.querySelectorAll('canvas').forEach(c => c.remove());
    };
  }, []);

  return (
    <div className="my-canvas">
      <div ref={containerRef} className="my-canvas-renderer" style={{background: 'black'}}/>
      {/* <div className="content-layer">
        <h1>Solar System</h1>
        <p>Drag to orbit · Scroll to zoom · Right-click to pan</p>
      </div> */}
    </div>
  );
};

export default SolarSystem;