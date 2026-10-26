import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Cursor from "./components/Cursor";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    let ctx;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const elements = gsap.utils.toArray("[data-scroll-reveal]");

        elements.forEach((el) => {
          gsap.set(el, { opacity: 0, y: 32 });

          ScrollTrigger.create({
            trigger: el,
            start: "top 92%",
            once: true,
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power2.out",
              });
            },
          });
        });

        ScrollTrigger.refresh();
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [loading]);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <ScrollProgress />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
