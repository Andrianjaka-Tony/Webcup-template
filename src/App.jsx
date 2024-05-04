import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./components/navigation";
import SOS from "./components/sos";
import Gadgets from "./pages/gadgets";
// import Cursor from "./components/cursor";

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      {/* <SOS /> */}
      {/* <Cursor /> */}
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Gadgets />} path="/gadgets" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
