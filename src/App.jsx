import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Hello from "./pages/hello";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Hello />} path="/hello" />
          <Route element={<Hello />} path="/hello-2" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
