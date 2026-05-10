import * as THREE from 'three';

export class ThreeScene {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;
  private animId: number = 0;
  private mouseX = 0;
  private mouseY = 0;

  private icosahedron!: THREE.Mesh;
  private wireMesh!: THREE.Mesh;
  private torus!: THREE.Mesh;
  private torus2!: THREE.Mesh;
  private satellites: THREE.Mesh[] = [];
  private particles!: THREE.Points;
  private pointLight1!: THREE.PointLight;
  private pointLight2!: THREE.PointLight;

  private container: HTMLDivElement;

  constructor(container: HTMLDivElement) {
    this.container = container;
    const { clientWidth: w, clientHeight: h } = container;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.scene.fog = new THREE.Fog(0x0a0a0f, 10, 50);

    this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    this.camera.position.z = 6;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();

    const geo = new THREE.IcosahedronGeometry(2,3);
    const mat = new THREE.MeshBasicMaterial({
        color: 0X00ff00
    });
    const mesh = new THREE.Mesh(geo, mat);
    this.scene.add(mesh);
    this.renderer.render(this.scene, this.camera);


    this.setupLights();
    this.setupObjects();
    this.setupParticles();
    this.bindEvents();
    this.animate();
  }

  private setupLights() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    this.pointLight1 = new THREE.PointLight(0x6e40ff, 3, 20);
    this.pointLight1.position.set(4, 4, 4);
    this.scene.add(this.pointLight1);

    this.pointLight2 = new THREE.PointLight(0x00d4ff, 3, 20);
    this.pointLight2.position.set(-4, -4, 4);
    this.scene.add(this.pointLight2);
  }

  private setupObjects() {
    // Icosahedron
    this.icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 1),
      new THREE.MeshStandardMaterial({ color: 0x6e40ff, metalness: 0.8, roughness: 0.2 })
    );
    this.scene.add(this.icosahedron);

    // Wireframe overlay
    this.wireMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.21, 1),
      new THREE.MeshBasicMaterial({ color: 0xaaffff, wireframe: true, transparent: true, opacity: 0.25 })
    );
    this.scene.add(this.wireMesh);

    // Torus rings
    this.torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.04, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.6 })
    );
    this.torus.rotation.x = Math.PI / 3;
    this.scene.add(this.torus);

    this.torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.04, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0xff4dff, transparent: true, opacity: 0.4 })
    );
    this.torus2.rotation.x = Math.PI / 1.5;
    this.torus2.rotation.z = Math.PI / 4;
    this.scene.add(this.torus2);

    // Satellite cubes
    const count = 8;
    for (let i = 0; i < count; i++) {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.18, 0.18),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(i / count, 0.8, 0.6),
          metalness: 0.9,
          roughness: 0.1,
          emissive: new THREE.Color().setHSL(i / count, 1, 0.2),
        })
      );
      this.scene.add(cube);
      this.satellites.push(cube);
    }
  }

  private setupParticles() {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particles = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xaaaaff, size: 0.05, transparent: true, opacity: 0.6 })
    );
    this.scene.add(this.particles);
  }

  private bindEvents() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onResize = this.onResize.bind(this);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onResize);
  }

  private onMouseMove(e: MouseEvent) {
    this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
  }

  private onResize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  private animate = () => {
    this.animId = requestAnimationFrame(this.animate);
    const t = this.clock.getElapsedTime();

    this.icosahedron.rotation.x = t * 0.4;
    this.icosahedron.rotation.y = t * 0.6;
    this.wireMesh.rotation.x = t * 0.4;
    this.wireMesh.rotation.y = t * 0.6;

    const s = 1 + Math.sin(t * 2) * 0.04;
    this.icosahedron.scale.setScalar(s);
    this.wireMesh.scale.setScalar(s);

    this.torus.rotation.z = t * 0.3;
    this.torus2.rotation.y = t * 0.25;
    this.torus2.rotation.z = t * -0.2;

    this.satellites.forEach((cube, i) => {
      const angle = (i / this.satellites.length) * Math.PI * 2 + t * 0.5;
      cube.position.x = Math.cos(angle) * 2.2;
      cube.position.y = Math.sin(angle * 0.7) * 0.6;
      cube.position.z = Math.sin(angle) * 2.2;
      cube.rotation.x = t * 1.5 + i;
      cube.rotation.y = t * 2 + i;
    });

    this.particles.rotation.y = t * 0.02;
    this.particles.rotation.x = t * 0.01;

    this.pointLight1.position.x = Math.sin(t * 0.7) * 5;
    this.pointLight1.position.y = Math.cos(t * 0.5) * 5;
    this.pointLight2.position.x = Math.cos(t * 0.6) * 5;
    this.pointLight2.position.y = Math.sin(t * 0.8) * 5;

    this.camera.position.x += (this.mouseX * 1.5 - this.camera.position.x) * 0.04;
    this.camera.position.y += (this.mouseY * 1.5 - this.camera.position.y) * 0.04;
    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  };

  public dispose() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}