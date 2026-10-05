import { useEffect, useRef } from "react";

export function AmbientLeafScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;

    let disposed = false;
    let animation = 0;
    let observer: ResizeObserver | undefined;
    let renderer: import("three").WebGLRenderer | undefined;
    let geometry: import("three").BufferGeometry | undefined;
    let material: import("three").Material | undefined;
    void import("three").then(THREE => {
      if (disposed) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    geometry = new THREE.IcosahedronGeometry(0.06, 1);
    material = new THREE.MeshBasicMaterial({ color: 0x8cc9a8, transparent: true, opacity: 0.7 });
    const group = new THREE.Group();
    const leaves = Array.from({ length: 38 }, (_, index) => {
      const leaf = new THREE.Mesh(geometry, material);
      leaf.position.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 1.6);
      leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      leaf.userData = { drift: 0.003 + (index % 4) * 0.001, spin: 0.004 + (index % 3) * 0.002 };
      group.add(leaf);
      return leaf;
    });
    scene.add(group);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    observer = new ResizeObserver(resize);
    observer.observe(mount);
    let frame = 0;
    const animate = () => {
      leaves.forEach(leaf => {
        leaf.rotation.y += leaf.userData.spin;
        leaf.position.y += Math.sin(frame * leaf.userData.drift) * 0.0018;
      });
      group.rotation.z += 0.0007;
      renderer.render(scene, camera);
      frame += 1;
      animation = requestAnimationFrame(animate);
    };
    animation = requestAnimationFrame(animate);
    });
    return () => {
      disposed = true;
      cancelAnimationFrame(animation);
      observer?.disconnect();
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-80" />;
}
