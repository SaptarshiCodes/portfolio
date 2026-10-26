import { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnet = ({
  children,
  strength = 0.35,
  padding = 120,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // Only enable on devices with a mouse (pointer: fine)
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    let rect = el.getBoundingClientRect();
    const handleResizeOrScroll = () => {
      rect = el.getBoundingClientRect();
    };

    window.addEventListener("scroll", handleResizeOrScroll, { passive: true });
    window.addEventListener("resize", handleResizeOrScroll, { passive: true });

    let isNear = false;
    const move = (e) => {
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      if (
        Math.abs(distanceX) < rect.width / 2 + padding &&
        Math.abs(distanceY) < rect.height / 2 + padding
      ) {
        isNear = true;
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      } else if (isNear) {
        isNear = false;
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.35)",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", handleResizeOrScroll);
      window.removeEventListener("resize", handleResizeOrScroll);
    };
  }, [padding, strength]);

  return (
    <div ref={ref} className={`relative flex w-full h-full ${className}`}>
      {children}
    </div>
  );
};

export default Magnet;