import { useState } from "react";
import Enter from "./components/enter";
import Hero from "./components/hero";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isEnter, setEnter] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isEnter && <Enter key="enter" setEnter={setEnter} />}
        {!isEnter && <Hero key="hero" />}
      </AnimatePresence>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
