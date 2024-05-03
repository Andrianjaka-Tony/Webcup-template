import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Column from "./column";
import "./style.scss";

function Enter({ setEnter }) {
  const sources = [
    "/images/01.jpeg",
    "/images/02.jpeg",
    "/images/03.jpeg",
    "/images/04.jpeg",
    "/images/05.jpeg",
    "/images/5.jpg",
  ];

  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    sources.forEach((source) => {
      const image = new Image();
      image.src = source;
      image.addEventListener("load", () => {
        setLoadingProgress((previous) => previous + 1);
      });
    });
  }, []);

  useEffect(() => {
    if (loadingProgress === sources.length) {
      setTimeout(() => {
        setEnter(false);
      }, 3000);
    }
  }, [loadingProgress]);

  return (
    <motion.div className={`enter`}>
      <motion.div
        transition={{ duration: 0.4, delay: 0.3 }}
        exit={{ opacity: 0 }}
        className="enter-background"
      ></motion.div>
      {loadingProgress !== sources.length ? (
        <div className="loader">{loadingProgress}</div>
      ) : (
        <>
          <Column
            images={[
              "/images/01.jpeg",
              "/images/02.jpeg",
              "/images/03.jpeg",
              "/images/04.jpeg",
              "/images/05.jpeg",
              "/images/01.jpeg",
            ]}
            className="left"
          />
          <Column
            images={[
              "/images/01.jpeg",
              "/images/02.jpeg",
              "/images/5.jpg",
              "/images/04.jpeg",
              "/images/05.jpeg",
            ]}
            className="middle"
          />
          <Column
            images={[
              "/images/01.jpeg",
              "/images/02.jpeg",
              "/images/03.jpeg",
              "/images/04.jpeg",
              "/images/05.jpeg",
              "/images/01.jpeg",
            ]}
            className="right"
          />
        </>
      )}
    </motion.div>
  );
}

export default Enter;
