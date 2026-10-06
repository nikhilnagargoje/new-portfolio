import { useEffect, useRef } from "react";
import * as THREE from "three";

import "./DataVisual.css";

function DataVisual() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2(0x050505, 0.075);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

    camera.position.set(5.8, 3.7, 8.5);
    camera.lookAt(0, 1.3, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.15 : 1.5),
    );

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.domElement.setAttribute("aria-hidden", "true");

    container.appendChild(renderer.domElement);

    /* =====================================================
       MATERIALS
       ===================================================== */

    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b0d10,
      roughness: 0.72,
      metalness: 0.25,
    });

    const darkerMaterial = new THREE.MeshStandardMaterial({
      color: 0x07090c,
      roughness: 0.82,
      metalness: 0.15,
    });

    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x071014,
      emissive: 0x03262d,
      emissiveIntensity: 0.7,
      roughness: 0.42,
      metalness: 0.35,
    });

    const cyanMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00bcd4,
      emissiveIntensity: 2.4,
      roughness: 0.28,
      metalness: 0.6,
    });

    const purpleMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x6d28d9,
      emissiveIntensity: 1.8,
      roughness: 0.32,
      metalness: 0.55,
    });

    const whiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xdde7ea,
      emissive: 0x243237,
      emissiveIntensity: 0.25,
      roughness: 0.45,
      metalness: 0.35,
    });

    /* =====================================================
       WORKSPACE GROUP
       ===================================================== */

    const workspace = new THREE.Group();

    scene.add(workspace);

    /* =====================================================
       FLOOR
       ===================================================== */

    const floorGeometry = new THREE.BoxGeometry(8.8, 0.16, 5.8);

    const floor = new THREE.Mesh(floorGeometry, darkerMaterial);

    floor.position.set(0, -0.15, 0);
    floor.receiveShadow = true;

    workspace.add(floor);

    /* =====================================================
       DESK
       ===================================================== */

    const deskTopGeometry = new THREE.BoxGeometry(7.3, 0.28, 3.25);

    const deskTop = new THREE.Mesh(deskTopGeometry, darkMaterial);

    deskTop.position.set(0, 1.05, 0);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;

    workspace.add(deskTop);

    const deskEdgeGeometry = new THREE.BoxGeometry(7.25, 0.08, 3.18);

    const deskEdge = new THREE.Mesh(deskEdgeGeometry, cyanMaterial);

    deskEdge.position.set(0, 0.88, 0);

    deskEdge.scale.set(0.95, 0.22, 0.02);

    workspace.add(deskEdge);

    /* =====================================================
       DESK LEGS
       ===================================================== */

    const legGeometry = new THREE.BoxGeometry(0.24, 1.2, 0.24);

    const legPositions = [
      [-3.05, 0.42, -1.2],
      [3.05, 0.42, -1.2],
      [-3.05, 0.42, 1.2],
      [3.05, 0.42, 1.2],
    ];

    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeometry, darkerMaterial);

      leg.position.set(x, y, z);
      leg.castShadow = true;

      workspace.add(leg);
    });

    /* =====================================================
       MONITOR
       ===================================================== */

    const monitorGroup = new THREE.Group();

    monitorGroup.position.set(0.35, 2.15, -0.42);

    workspace.add(monitorGroup);

    const monitorFrameGeometry = new THREE.BoxGeometry(4.65, 2.72, 0.25);

    const monitorFrame = new THREE.Mesh(monitorFrameGeometry, darkMaterial);

    monitorFrame.castShadow = true;

    monitorGroup.add(monitorFrame);

    const screenGeometry = new THREE.PlaneGeometry(4.2, 2.27);

    const screen = new THREE.Mesh(screenGeometry, screenMaterial);

    screen.position.set(0, 0.02, 0.145);

    monitorGroup.add(screen);

    /* =====================================================
       SCREEN GLOW
       ===================================================== */

    const glowGeometry = new THREE.PlaneGeometry(4.08, 2.14);

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x06242a,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });

    const screenGlow = new THREE.Mesh(glowGeometry, glowMaterial);

    screenGlow.position.set(0, 0.02, 0.15);

    monitorGroup.add(screenGlow);

    /* =====================================================
       EDITOR HEADER
       ===================================================== */

    const headerGeometry = new THREE.BoxGeometry(4.05, 0.14, 0.015);

    const headerMaterial = new THREE.MeshBasicMaterial({
      color: 0x111820,
    });

    const editorHeader = new THREE.Mesh(headerGeometry, headerMaterial);

    editorHeader.position.set(-0.02, 0.97, 0.165);

    monitorGroup.add(editorHeader);

    /* =====================================================
       EDITOR DOTS
       ===================================================== */

    const dotGeometry = new THREE.SphereGeometry(0.035, 10, 10);

    const dotPositions = [
      [-1.88, 0.97, 0.19],
      [-1.76, 0.97, 0.19],
      [-1.64, 0.97, 0.19],
    ];

    dotPositions.forEach(([x, y, z], index) => {
      const dot = new THREE.Mesh(
        dotGeometry,
        index === 0
          ? cyanMaterial
          : index === 1
            ? purpleMaterial
            : whiteMaterial,
      );

      dot.position.set(x, y, z);

      monitorGroup.add(dot);
    });

    /* =====================================================
       CODE LINES
       ===================================================== */

    const codeGroup = new THREE.Group();

    codeGroup.position.set(-1.68, 0.48, 0.19);

    monitorGroup.add(codeGroup);

    const codeLineData = [
      [1.45, 0.8, cyanMaterial],
      [1.15, 0.58, whiteMaterial],
      [1.7, 0.36, purpleMaterial],
      [0.95, 0.14, whiteMaterial],
      [1.4, -0.08, cyanMaterial],
      [1.05, -0.3, whiteMaterial],
      [1.72, -0.52, purpleMaterial],
      [0.78, -0.74, whiteMaterial],
    ];

    codeLineData.forEach(([width, y, material], index) => {
      const geometry = new THREE.BoxGeometry(width, 0.055, 0.025);

      const line = new THREE.Mesh(geometry, material);

      line.position.set(width / 2, y, 0);

      if (index === 1 || index === 3) {
        line.position.x += 0.18;
      }

      codeGroup.add(line);
    });

    /* =====================================================
       SIDE UI PANEL
       ===================================================== */

    const sidePanelGeometry = new THREE.BoxGeometry(0.78, 1.72, 0.045);

    const sidePanelMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a1216,
      emissive: 0x03171b,
      emissiveIntensity: 0.8,
      roughness: 0.55,
      metalness: 0.35,
    });

    const sidePanel = new THREE.Mesh(sidePanelGeometry, sidePanelMaterial);

    sidePanel.position.set(1.58, 0.1, 0.2);

    monitorGroup.add(sidePanel);

    /* =====================================================
       SIDE PANEL BARS
       ===================================================== */

    const sideBarData = [
      [0.43, 0.55, cyanMaterial],
      [0.31, 0.28, purpleMaterial],
      [0.48, 0.01, whiteMaterial],
      [0.36, -0.26, cyanMaterial],
      [0.25, -0.53, whiteMaterial],
    ];

    sideBarData.forEach(([width, y, material]) => {
      const geometry = new THREE.BoxGeometry(width, 0.055, 0.035);

      const bar = new THREE.Mesh(geometry, material);

      bar.position.set(1.42, y, 0.235);

      monitorGroup.add(bar);
    });

    /* =====================================================
       MONITOR STAND
       ===================================================== */

    const standGeometry = new THREE.BoxGeometry(0.28, 0.72, 0.28);

    const monitorStand = new THREE.Mesh(standGeometry, darkMaterial);

    monitorStand.position.set(0.35, 0.57, -0.42);

    monitorStand.castShadow = true;

    workspace.add(monitorStand);

    const standBaseGeometry = new THREE.BoxGeometry(1.45, 0.12, 0.72);

    const standBase = new THREE.Mesh(standBaseGeometry, darkMaterial);

    standBase.position.set(0.35, 0.98, -0.42);

    standBase.castShadow = true;

    workspace.add(standBase);

    /* =====================================================
       KEYBOARD
       ===================================================== */

    const keyboardGroup = new THREE.Group();

    keyboardGroup.position.set(-0.35, 1.22, 1.02);

    keyboardGroup.rotation.x = -0.08;

    workspace.add(keyboardGroup);

    const keyboardBaseGeometry = new THREE.BoxGeometry(3.35, 0.12, 1.18);

    const keyboardBase = new THREE.Mesh(keyboardBaseGeometry, darkMaterial);

    keyboardBase.castShadow = true;

    keyboardGroup.add(keyboardBase);

    const keyGeometry = new THREE.BoxGeometry(0.22, 0.055, 0.16);

    const keyRows = 4;
    const keysPerRow = 13;

    for (let row = 0; row < keyRows; row += 1) {
      for (let column = 0; column < keysPerRow; column += 1) {
        const material =
          (row === 0 && column === 3) || (row === 2 && column === 8)
            ? cyanMaterial
            : whiteMaterial;

        const key = new THREE.Mesh(keyGeometry, material);

        key.position.set(-1.42 + column * 0.235, 0.09, -0.4 + row * 0.22);

        key.scale.y = 0.45;

        keyboardGroup.add(key);
      }
    }

    /* =====================================================
       MOUSE
       ===================================================== */

    const mouseGeometry = new THREE.BoxGeometry(0.55, 0.18, 0.92);

    const mouse = new THREE.Mesh(mouseGeometry, darkMaterial);

    mouse.position.set(2.1, 1.23, 1.08);

    mouse.rotation.x = -0.05;
    mouse.castShadow = true;

    workspace.add(mouse);

    const mouseAccentGeometry = new THREE.BoxGeometry(0.06, 0.025, 0.32);

    const mouseAccent = new THREE.Mesh(mouseAccentGeometry, cyanMaterial);

    mouseAccent.position.set(2.1, 1.33, 1.02);

    workspace.add(mouseAccent);

    /* =====================================================
       FLOATING REACT OBJECT
       ===================================================== */

    const reactGroup = new THREE.Group();

    reactGroup.position.set(2.75, 3.75, -0.35);

    workspace.add(reactGroup);

    const coreGeometry = new THREE.IcosahedronGeometry(0.52, 1);

    const core = new THREE.Mesh(coreGeometry, cyanMaterial);

    core.castShadow = true;

    reactGroup.add(core);

    const ringGeometry = new THREE.TorusGeometry(0.8, 0.025, 10, 80);

    const ringMaterials = [cyanMaterial, purpleMaterial, whiteMaterial];

    const rings = [];

    for (let index = 0; index < 3; index += 1) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterials[index]);

      ring.rotation.x = index * 0.8;

      ring.rotation.y = index * 0.55;

      ring.rotation.z = index * 0.35;

      reactGroup.add(ring);
      rings.push(ring);
    }

    /* =====================================================
       FLOATING UI CARDS
       ===================================================== */

    const cardGroup = new THREE.Group();

    cardGroup.position.set(-2.8, 3.35, -0.15);

    workspace.add(cardGroup);

    const cardGeometry = new THREE.BoxGeometry(1.7, 0.82, 0.08);

    const cardMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a1115,
      emissive: 0x03191e,
      emissiveIntensity: 0.9,
      roughness: 0.45,
      metalness: 0.3,
    });

    const card = new THREE.Mesh(cardGeometry, cardMaterial);

    card.castShadow = true;

    cardGroup.add(card);

    const cardLineGeometry = new THREE.BoxGeometry(1.15, 0.06, 0.035);

    const cardLineOne = new THREE.Mesh(cardLineGeometry, cyanMaterial);

    cardLineOne.position.set(-0.15, 0.16, 0.065);

    cardGroup.add(cardLineOne);

    const cardLineTwo = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.045, 0.035),
      whiteMaterial,
    );

    cardLineTwo.position.set(-0.35, -0.04, 0.065);

    cardGroup.add(cardLineTwo);

    const cardDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 12, 12),
      purpleMaterial,
    );

    cardDot.position.set(0.55, -0.2, 0.08);

    cardGroup.add(cardDot);

    /* =====================================================
       FLOATING CODE BARS
       ===================================================== */

    const floatingBars = [];

    for (let index = 0; index < 5; index += 1) {
      const geometry = new THREE.BoxGeometry(
        0.45 + Math.random() * 0.7,
        0.045,
        0.045,
      );

      const material = index % 2 === 0 ? cyanMaterial : purpleMaterial;

      const bar = new THREE.Mesh(geometry, material);

      bar.position.set(-2.85 + Math.random() * 0.7, 2.15 + index * 0.22, 0.1);

      bar.rotation.z = (Math.random() - 0.5) * 0.15;

      workspace.add(bar);

      floatingBars.push(bar);
    }

    /* =====================================================
       PARTICLES
       ===================================================== */

    const particleCount = window.innerWidth < 700 ? 90 : 150;

    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      particlePositions[index * 3] = (Math.random() - 0.5) * 10;

      particlePositions[index * 3 + 1] = Math.random() * 6 - 0.2;

      particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x62efff,
      size: 0.025,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);

    scene.add(particles);

    /* =====================================================
       LIGHTING
       ===================================================== */

    const ambientLight = new THREE.AmbientLight(0x7e8c94, 1.15);

    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xeafcff, 3.2);

    keyLight.position.set(4, 8, 6);

    keyLight.castShadow = true;

    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;

    scene.add(keyLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 18, 7);

    cyanLight.position.set(-2.5, 3.5, 2);

    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x7c3aed, 16, 6);

    purpleLight.position.set(3.5, 3.4, -1.5);

    scene.add(purpleLight);

    const rimLight = new THREE.PointLight(0x55dfff, 10, 5);

    rimLight.position.set(0, 4, -4);

    scene.add(rimLight);

    /* =====================================================
       POINTER
       ===================================================== */

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();

      pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
    };

    container.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    /* =====================================================
       RESIZE
       ===================================================== */

    const resize = () => {
      const width = container.clientWidth;

      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;

      camera.updateProjectionMatrix();

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.15 : 1.5),
      );

      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(container);

    resize();

    /* =====================================================
       ANIMATION
       ===================================================== */

    let animationFrame = 0;

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      pointer.x += (pointer.targetX - pointer.x) * 0.045;

      pointer.y += (pointer.targetY - pointer.y) * 0.045;

      if (!reduceMotion) {
        workspace.rotation.y = pointer.x * 0.055;

        workspace.rotation.x = pointer.y * 0.018;

        workspace.position.y = Math.sin(elapsed * 0.55) * 0.025;

        monitorGroup.rotation.y = pointer.x * 0.035;

        reactGroup.rotation.y = elapsed * 0.35 + pointer.x * 0.3;

        reactGroup.rotation.x = Math.sin(elapsed * 0.65) * 0.12;

        core.rotation.x = elapsed * 0.42;

        core.rotation.y = elapsed * 0.58;

        rings.forEach((ring, index) => {
          ring.rotation.x += 0.0025 + index * 0.0007;

          ring.rotation.y += 0.003 + index * 0.0008;
        });

        cardGroup.position.y = 3.35 + Math.sin(elapsed * 0.8) * 0.08;

        cardGroup.rotation.z = Math.sin(elapsed * 0.7) * 0.025;

        floatingBars.forEach((bar, index) => {
          bar.position.x += Math.sin(elapsed * 0.55 + index) * 0.0007;

          bar.position.y += Math.cos(elapsed * 0.45 + index) * 0.0004;
        });

        particles.rotation.y = elapsed * 0.018;

        particles.rotation.x = Math.sin(elapsed * 0.15) * 0.04;

        cyanLight.position.x = -2.5 + pointer.x * 1.2;

        cyanLight.position.y = 3.5 + pointer.y * 0.7;

        purpleLight.position.x = 3.5 + pointer.x * 0.8;

        screenGlow.material.opacity = 0.42 + Math.sin(elapsed * 1.7) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    /* =====================================================
       CLEANUP
       ===================================================== */

    return () => {
      cancelAnimationFrame(animationFrame);

      resizeObserver.disconnect();

      container.removeEventListener("pointermove", handlePointerMove);

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="data-visual" aria-hidden="true" />;
}

export default DataVisual;
