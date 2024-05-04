import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Enter from "../../components/enter";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Transition from "../../components/transition";
import useScrollToTop from "../../hooks/useScrollToTop";

function Hello() {
  const [isEnter, setEnter] = useState(true);

  useScrollToTop();

  return (
    <>
      <Transition />
      <AnimatePresence mode="wait">
        {isEnter && <Enter key="enter" setEnter={setEnter} />}
        {!isEnter && <Hero key="hero" />}
      </AnimatePresence>
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </>
  );
}

export default Hello;
