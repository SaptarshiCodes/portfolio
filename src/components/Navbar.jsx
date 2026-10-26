import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none font-[font2]">
      {/* Desktop Navigation */}
      <nav aria-label="Main Navigation" className="hidden md:flex items-center justify-center pt-[1vw]">
        <SlideTabs />
      </nav>

      {/* Mobile Navigation */}
      <nav aria-label="Mobile Navigation" className="flex md:hidden items-center justify-between pointer-events-auto px-4 py-3 m-3 rounded-full border border-white/10 bg-[hsla(0,0%,8%,0.75)] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white font-bold text-base tracking-wider uppercase pl-2 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none rounded"
        >
          Saptarshi
        </a>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="p-2 text-zinc-300 hover:text-white rounded-full focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto mx-4 mt-1 p-5 rounded-3xl border border-white/10 bg-[hsla(0,0%,8%,0.9)] backdrop-blur-2xl shadow-2xl flex flex-col gap-3"
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
                className="text-zinc-200 hover:text-white text-lg font-semibold uppercase tracking-wider py-2 px-3 rounded-xl hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
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
              className="flex items-center justify-between text-zinc-100 font-semibold uppercase tracking-wider py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            >
              <span>Resume</span>
              <FiArrowUpRight />
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

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="
        pointer
        pointer-events-auto
        flex
        items-center
        justify-center
        gap-[1.5vw]
        px-[0.4vw]
        py-[0.7vw]

        rounded-full
        border
        border-white/10

        bg-[hsla(0,0%,8%,0.35)]
        backdrop-blur-xl      

        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      <Tab setPosition={setPosition} targetId="home">
        SAPTARSHI
      </Tab>
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
      <Tab setPosition={setPosition} isResume>
        Resume
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, targetId, isResume }) => {
  const ref = useRef(null);

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
        cursor-pointer
        px-[1.2vw]
        text-[1.2vw]
        font-semibold
        font-[font2]
        uppercase
        text-white
        mix-blend-difference
        focus-visible:ring-2
        focus-visible:ring-white/50
        focus-visible:outline-none
        rounded-full
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
