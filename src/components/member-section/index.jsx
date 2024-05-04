import { motion, useScroll } from "framer-motion";
import "./style.scss";
import Item from "./item";
import { useRef } from "react";

const items = [
  {
    name: "Liantsoa",
    post: "Backend Developer",
    description: "Hello world, I lovw programming",
    image: "/images/01.jpeg",
    begin: 0,
    end: 0,
    animated: false,
  },
  {
    name: "Jeremia",
    post: "Backend Developer",
    description: "Hello world, I lovw programming",
    image: "/images/02.jpeg",
    begin: 0,
    end: 0.33,
    background: "wheat",
  },
  {
    name: "Jaona",
    post: "Frontend Developer",
    description: "Hello world, I lovw programming",
    image: "/images/03.jpeg",
    begin: 0.33,
    end: 0.66,
  },
  {
    name: "Tony",
    post: "Frontend Developer",
    description: "Hello world, I lovw programming",
    image: "/images/04.jpeg",
    begin: 0.66,
    end: 1,
    background: "wheat",
  },
];

function MemberSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <motion.section ref={ref} className="member-section">
      <div className="member-section-sticky">
        {items.map((item) => (
          <Item key={item.name} {...item} progress={scrollYProgress} />
        ))}
      </div>
    </motion.section>
  );
}

export default MemberSection;
