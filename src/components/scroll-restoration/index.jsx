import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollRestoration() {
  const [lenis, setLenis] = useState();
  const { pathname } = useLocation();

  useLenis((l) => {
    setLenis(l);
  });

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 });
    }
    window.addEventListener("beforeunload", () => {
      lenis.scrollTo(0, { duration: 0.3 });
    });
  }, [pathname, lenis]);

  return null;
}

export default ScrollRestoration;
