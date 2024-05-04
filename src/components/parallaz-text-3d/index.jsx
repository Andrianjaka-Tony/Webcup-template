import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import ParallaxText3DScene from "./scene";
import "./style.scss";
import Text from "./text";
import { useEffect, useRef, useState } from "react";

function ParallaxText3D() {
  const ref = useRef(null);
  const [y, setY] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", ["end start"]] });
  const yTransform = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  // useEffect(() => {
  //   const unsubscribe = yTransform.onChange(setY);
  //   return () => unsubscribe();
  // }, [yTransform]);

  return (
    <motion.div ref={ref} className="parallax-text-3d">
      <ParallaxText3DScene scrollYProgress={y} />
      <Text text="Hello world, this is my first project on React JS using Vite" />
    </motion.div>
  );
}

export default ParallaxText3D;
