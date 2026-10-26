import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header data-navbar="true" className="fixed top-0 left-0 right-0 z-50 pointer-events-none font-[font2]">
      {/* Desktop Navigation (Full Navbar) */}
      <nav aria-label="Main Navigation" className="hidden lg:flex items-center justify-center pt-3 lg:pt-[1vw]">
        <SlideTabs />
      </nav>

      {/* Mobile & Medium Screen Navigation */}
      <nav
        aria-label="Mobile and Tablet Navigation"
        className="flex lg:hidden items-center justify-between pointer-events-auto px-4 py-2.5 md:py-3 m-3 md:my-3.5 md:mx-auto md:max-w-xl rounded-full border border-white/10 bg-[hsla(0,0%,8%,0.8)] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white font-semibold text-base sm:text-lg tracking-wider uppercase pl-2 hover:text-zinc-300 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none rounded"
        >
          Saptarshi
        </a>

        {/* Menu button */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="p-1.5 md:px-3 md:py-1.5 text-zinc-300 hover:text-white rounded-full hover:bg-white/10 transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none border border-transparent hover:border-white/10"
        >
          <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider text-zinc-300">
            {mobileOpen ? "Close" : "Menu"}
          </span>
          {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {/* Mobile & Medium Screen Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden pointer-events-auto mx-4 md:max-w-xl md:mx-auto mt-1 p-5 md:p-6 rounded-3xl border border-white/10 bg-[hsla(0,0%,8%,0.92)] backdrop-blur-2xl shadow-2xl flex flex-col gap-2.5"
          >
            {[
              { label: "Home", target: "home" },
              { label: "About", target: "about" },
              { label: "Skills", target: "skills" },
              { label: "Work", target: "work" },
              { label: "Contact", target: "contact" },
            ].map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-zinc-200 hover:text-white text-base md:text-lg font-semibold uppercase tracking-wider py-2.5 px-3.5 rounded-xl hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}

            <div className="h-px bg-white/10 my-1" />

            <a
              href="/Saptarshi CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between text-black font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.25)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            >
              <span>View Full Resume</span>
              <FiArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const resumeRef = useRef(null);

  const resetToResume = () => {
    if (resumeRef.current) {
      const { width } = resumeRef.current.getBoundingClientRect();
      setPosition({
        left: resumeRef.current.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    resetToResume();
    const timer = setTimeout(resetToResume, 60);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(resetToResume);
    }
    const handleResize = () => resetToResume();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul
      onMouseLeave={resetToResume}
      className="
        pointer-events-auto
        flex
        items-center
        justify-center
        gap-2
        lg:gap-[1.2vw]
        xl:gap-[1.5vw]
        pl-2
        lg:pl-[0.5vw]
        pr-1
        lg:pr-[0.12vw]
        py-1.5
        lg:py-[0.55vw]
        rounded-full
        border
        border-white/10
        bg-[hsla(0,0%,8%,0.45)]
        backdrop-blur-xl      
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      "
    >
      {/* Home Brand Button (no hover cover, larger font, reduced weight, generous space before About) */}
      <li
        tabIndex={0}
        role="button"
        onClick={() => {
          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onMouseEnter={resetToResume}
        onFocus={resetToResume}
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          cursor-pointer
          pl-4
          lg:pl-[1.6vw]
          pr-2
          lg:pr-[1vw]
          mr-3
          sm:mr-4
          lg:mr-[2vw]
          xl:mr-[2.4vw]
          text-sm
          sm:text-base
          lg:text-[1.3vw]
          xl:text-[1.35vw]
          font-semibold
          tracking-wider
          font-[font2]
          uppercase
          text-white
          hover:text-zinc-300
          transition-colors
          duration-200
          focus-visible:ring-2
          focus-visible:ring-white/50
          focus-visible:outline-none
          rounded-full
        "
      >
        SAPTARSHI
      </li>

      <Tab setPosition={setPosition} targetId="about">
        About
      </Tab>
      <Tab setPosition={setPosition} targetId="skills">
        Skills
      </Tab>
      <Tab setPosition={setPosition} targetId="work">
        Work
      </Tab>
      <Tab setPosition={setPosition} targetId="contact">
        Contact
      </Tab>
      <Tab setPosition={setPosition} isResume tabRef={resumeRef}>
        <span>Resume</span>
        <FiArrowUpRight className="text-xs lg:text-[1.1vw]" />
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, targetId, isResume, tabRef }) => {
  const localRef = useRef(null);
  const ref = tabRef || localRef;

  const handleClick = () => {
    if (isResume) {
      window.open("/Saptarshi CV.pdf", "_blank", "noopener,noreferrer");
    } else if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <li
      ref={ref}
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onFocus={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="
        relative
        z-10
        flex
        items-center
        justify-center
        gap-1
        cursor-pointer
        px-3
        lg:px-[1.1vw]
        py-1
        lg:py-[0.4vw]
        text-xs
        lg:text-[1.1vw]
        font-semibold
        font-[font2]
        uppercase
        text-white
        mix-blend-difference
        focus-visible:ring-2
        focus-visible:ring-white/50
        focus-visible:outline-none
        rounded-full
        transition-colors
      "
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="
        absolute
        top-1/2
        -translate-y-1/2
        h-[90%]
        rounded-full
        bg-white
      "
      aria-hidden="true"
    />
  );
};
