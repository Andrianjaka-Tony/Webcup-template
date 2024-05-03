import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import ReactLenis from "lenis/react";
import ScrollRestoration from "./components/scroll-restoration/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReactLenis root options={{ duration: 2.4 }}>
      <ScrollRestoration />
      <App />
    </ReactLenis>
  </BrowserRouter>
);
