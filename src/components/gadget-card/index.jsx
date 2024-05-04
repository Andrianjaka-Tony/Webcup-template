import { motion } from "framer-motion";
import "./style.scss";

function GadgetCard({ image, objectPosition }) {
  return (
    <div className="gadget-card">
      <motion.img style={{ objectPosition }} src={image} />
    </div>
  );
}

export default GadgetCard;
