import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function RotatingDodecahedron() {
  const [themeColor, setThemeColor] = useState("dark-mode");
  const meshRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    const colorFromStorage = localStorage.getItem("theme");
    if (colorFromStorage) {
      setThemeColor(colorFromStorage);
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme" && event.newValue) {
        setThemeColor(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.004;
    }
  });

  const geometry = new THREE.DodecahedronGeometry(2, 0);
  const edges = new THREE.EdgesGeometry(geometry);
  const lineColor = themeColor === "dark-mode" ? "white" : "black";

  return (
    <group ref={meshRef}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={lineColor} linewidth={1} />
      </lineSegments>
    </group>
  );
}

export default RotatingDodecahedron;
