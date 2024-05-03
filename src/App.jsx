import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Hello from "./pages/hello";
import Navigation from "./components/navigation";

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
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
