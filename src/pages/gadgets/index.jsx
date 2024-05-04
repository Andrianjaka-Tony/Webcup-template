import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/footer";
import GadgetCard from "../../components/gadget-card";
import Transition from "../../components/transition";
import "./style.scss";
import { useRef } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Cigarette } from "../../components/3d/Cigarette";
import GadgetScene from "../../components/gadget-scene";
import { Camera } from "../../components/3d/Camera";
import { Glasses } from "../../components/3d/Glasses";
import { Grenade } from "../../components/3d/Grenade";
import { Headphones } from "../../components/3d/Headphones";
import { Lighter } from "../../components/3d/Lighter";
import { Lipstick } from "../../../public/models/lipstick/Lipstick";
import { Pistols } from "../../../public/models/pistols/Pistols";

function Gadgets() {
  const gadgets = [
    "/gadgets/1.jpeg",
    "/gadgets/2.jpg",
    "/gadgets/3.jpg",
    "/gadgets/4.jpg",
    "/gadgets/5.png",
    "/gadgets/6.png",
    "/gadgets/7.png",
    "/gadgets/8.jpg",
    "/gadgets/9.jpg",
    "/gadgets/10.png",
    "/gadgets/11.png",
  ];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const objectPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useScrollToTop();

  return (
    <>
      <Transition />
      <motion.div ref={ref} className="gadget">
        <div className="gadget-sticky">
          <h1 className="gadget-title">Gadgets</h1>
          <motion.div style={{ x, left }} className="gadgets-container">
            {gadgets.map((image, key) => (
              <GadgetCard objectPosition={objectPosition} image={image} key={key} />
            ))}
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Gadgets;
