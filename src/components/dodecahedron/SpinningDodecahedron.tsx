// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
import "./styles.css";

// const Call = () => {
//   const meshRef = useRef(null);
//   console.log(meshRef);
// };
// Call();
// function SpinningDodecahedron() {
//   const meshRef = useRef();

//   useFrame(() => {
//     meshRef.current.rotation.x += 0.005;
//     meshRef.current.rotation.y += 0.005;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <dodecahedronGeometry args={[2, 0]} />
//       <meshStandardMaterial color="purple" wireframe />
//     </mesh>
//   );
// }

export default function DodecahedronScene() {
  return (
    <div
      className="dode_container"
      //   style={{ width: "100%", height: "500px" }}
    >
      {/* <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <SpinningDodecahedron />
        <OrbitControls enableZoom={true} />
      </Canvas> */}
      <div>Hello World!</div>
    </div>
  );
}
