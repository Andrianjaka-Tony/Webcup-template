import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function GadgetScene({ children }) {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#bdc3c7" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight color={"white"} intensity={21} />
        <spotLight position={[0, 3, 0]} intensity={30} color={"white"} />
        {children}
      </Canvas>
    </div>
  );
}

export default GadgetScene;
