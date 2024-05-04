import { Canvas } from "@react-three/fiber";
import "./style.scss";
import { motion } from "framer-motion-3d";

const Box = ({ scrollYProgress }) => {
  return (
    <motion.mesh position={[4, 0, 0]} translateY={scrollYProgress} rotation={[0.7, 0.7, 0.7]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"yellow"} />
    </motion.mesh>
  );
};

function ParallaxText3DScene({ scrollYProgress }) {
  return (
    <div className="parallax-text-3d-scene">
      <Canvas>
        <ambientLight color="white" intensity={1} />
        <Box scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}

export default ParallaxText3DScene;
