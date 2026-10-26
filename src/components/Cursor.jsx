import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useGSAP(() => {
    // Only activate custom cursor on desktop devices with a fine pointer (mouse)
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine) and (min-width: 768px)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    gsap.set([cursor, ring], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    const xCursor = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3.out",
    });

    const yCursor = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3.out",
    });

    const xRing = gsap.quickTo(ring, "x", {
      delay: 0.25,
      duration: 1.25,
      ease: "power3.out",
    });

    const yRing = gsap.quickTo(ring, "y", {
      delay: 0.25,
      duration: 1.25,
      ease: "power3.out",
    });

    const move = (e) => {
      xCursor(e.clientX);
      yCursor(e.clientY);

      xRing(e.clientX);
      yRing(e.clientY);
    };

    const enterWindow = () => {
      gsap.to([cursor, ring], {
        opacity: 1,
        duration: 0.2,
      });
    };

    const leaveWindow = () => {
      gsap.to([cursor, ring], {
        opacity: 0,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enterWindow);
    document.addEventListener("mouseleave", leaveWindow);

    // Hide system cursor on desktop
    document.body.style.cursor = "none";

    const handleMouseOver = (e) => {
      if (e.target.closest(".pointer")) {
        document.body.style.cursor = "auto";

        gsap.to([cursor, ring], {
          opacity: 0,
          duration: 0.15,
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".pointer")) {
        document.body.style.cursor = "none";

        gsap.to([cursor, ring], {
          opacity: 1,
          duration: 0.15,
        });
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "auto";

      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enterWindow);
      document.removeEventListener("mouseleave", leaveWindow);

      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="
          hidden
          md:block
          fixed
          top-0
          left-0
          h-12
          w-12
          rounded-full
          border
          border-white/70
          pointer-events-none
          z-9998
          mix-blend-difference
        "
      />

      <div
        ref={cursorRef}
        className="
          hidden
          md:block
          fixed
          top-0
          left-0
          h-8
          w-8
          rounded-full
          bg-white
          pointer-events-none
          z-9999
          mix-blend-difference
        "
      />
    </>
  );
};

export default Cursor;
