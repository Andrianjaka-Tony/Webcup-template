import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Enter from "../../components/enter";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Transition from "../../components/transition";
import useScrollToTop from "../../hooks/useScrollToTop";
import MemberSection from "../../components/member-section";

function Home() {
  const [isEnter, setEnter] = useState(true);

  useScrollToTop();

  return (
    <>
      <Transition />
      <AnimatePresence mode="wait">
        {isEnter && (
          <>
            <Enter key="enter" setEnter={setEnter} />
            <div style={{ height: "100vh" }}></div>
          </>
        )}
        {!isEnter && <Hero key="hero" />}
      </AnimatePresence>
      <MemberSection />
      <Footer />
    </>
  );
}

export default Home;
