import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Enter from "../../components/enter";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Transition from "../../components/transition";

function Home() {
  const [isEnter, setEnter] = useState(true);

  return (
    <Transition>
      <AnimatePresence mode="wait">
        {isEnter && <Enter key="enter" setEnter={setEnter} />}
        {!isEnter && <Hero key="hero" />}
      </AnimatePresence>
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </Transition>
  );
}

export default Home;
