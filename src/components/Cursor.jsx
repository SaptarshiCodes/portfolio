import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * Detects whether the device is a pure touch-only device
 * with NO fine pointer (mouse/trackpad) and NO hover capability (smartphones/pure tablets).
 * Dual/hybrid devices (e.g., convertible laptops with touchscreens + mouse pads) return false.
 */
const isPureTouchOnlyDevice = () => {
  if (typeof window === "undefined") return false;

  return Boolean(
    typeof window.matchMedia === "function" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );
};

const Cursor = () => {
  const [isPureTouch, setIsPureTouch] = useState(() => isPureTouchOnlyDevice());
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (isPureTouchOnlyDevice()) {
      setIsPureTouch(true);
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.style.cursor = "";
    }
  }, []);

  useGSAP(() => {
    // If pure touch-only smartphone or tablet, do not mount cursor logic
    if (isPureTouch || isPureTouchOnlyDevice()) {
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.style.cursor = "";
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let isTouchActive = false;
    let lastTouchTime = 0;
    let isCursorVisible = false;
    let hasInitialPosition = false;

    // Center the origin of the circles
    gsap.set([cursor, ring], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      display: "none",
    });

    // Cursor dot follows mouse immediately
    const xCursor = gsap.quickTo(cursor, "x", {
      duration: 0.08,
      ease: "power2.out",
    });

    const yCursor = gsap.quickTo(cursor, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    // Outer ring follows with smooth trailing inertia
    const xRing = gsap.quickTo(ring, "x", {
      duration: 0.35,
      ease: "power2.out",
    });

    const yRing = gsap.quickTo(ring, "y", {
      duration: 0.35,
      ease: "power2.out",
    });

    const isNavbarElement = (target) => {
      if (!target || typeof target.closest !== "function") return false;
      return Boolean(target.closest("header") || target.closest("[data-navbar]"));
    };

    // Show custom cursor (only called once when transitioning from hidden to visible)
    const showCursor = () => {
      if (isCursorVisible || isTouchActive) return;
      isCursorVisible = true;
      document.documentElement.classList.add("has-custom-cursor");
      gsap.set([cursor, ring], { display: "block" });
      gsap.to([cursor, ring], {
        opacity: 1,
        duration: 0.15,
        overwrite: false, // Never kill x / y motion tweens
      });
    };

    // Hide custom cursor (only called once when transitioning from visible to hidden)
    const hideCursor = () => {
      if (!isCursorVisible) return;
      isCursorVisible = false;
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.style.cursor = "";
      gsap.to([cursor, ring], {
        opacity: 0,
        duration: 0.15,
        overwrite: false, // Never kill x / y motion tweens
        onComplete: () => {
          if (!isCursorVisible) {
            gsap.set([cursor, ring], { display: "none" });
          }
        },
      });
    };

    // When the user touches the touchscreen on a dual device, immediately hide custom cursor
    const handleTouchInteraction = (e) => {
      if (
        !e ||
        e.pointerType === "touch" ||
        e.pointerType === "pen" ||
        (e.type && e.type.startsWith("touch"))
      ) {
        isTouchActive = true;
        lastTouchTime = Date.now();
        hideCursor();
      }
    };

    const move = (e) => {
      // 1. Touchscreen interaction on dual device: hide custom cursor
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        handleTouchInteraction(e);
        return;
      }

      // 2. Synthetic mouse event fired by mobile browsers following a touch tap
      if (Date.now() - lastTouchTime < 400) {
        return;
      }

      // 3. Browser-reported touch-synthesized event
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) {
        return;
      }

      // 4. Pointer event is specified and not mouse
      if (e.pointerType && e.pointerType !== "mouse") {
        return;
      }

      // Active mouse pad / trackpad / mouse movement
      isTouchActive = false;

      // On first mouse event, immediately place cursor and ring at mouse coordinates
      if (!hasInitialPosition) {
        gsap.set([cursor, ring], {
          x: e.clientX,
          y: e.clientY,
        });
        hasInitialPosition = true;
      }

      // Update positions continuously on every movement frame
      xCursor(e.clientX);
      yCursor(e.clientY);

      xRing(e.clientX);
      yRing(e.clientY);

      // Over navbar: custom cursor is disabled, default browser cursor is enabled
      // Outside navbar: custom cursor is enabled, default browser cursor is disabled
      if (isNavbarElement(e.target)) {
        hideCursor();
      } else {
        showCursor();
      }
    };

    const handleMouseDownOrClick = (e) => {
      if (
        e.pointerType === "touch" ||
        e.pointerType === "pen" ||
        (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents)
      ) {
        handleTouchInteraction(e);
      }
    };

    const enterWindow = (e) => {
      if (isTouchActive || Date.now() - lastTouchTime < 400) {
        hideCursor();
        return;
      }

      if (!isNavbarElement(e.target)) {
        showCursor();
      }
    };

    const leaveWindow = () => {
      hideCursor();
    };

    const handleMouseOver = (e) => {
      if (isNavbarElement(e.target)) {
        hideCursor();
      }
    };

    const handleMouseOut = (e) => {
      if (isNavbarElement(e.target)) {
        if (!isNavbarElement(e.relatedTarget)) {
          if (!isTouchActive && Date.now() - lastTouchTime >= 400) {
            showCursor();
          }
        }
      }
    };

    // Primary movement listener: pointermove handles mouse & trackpad
    window.addEventListener("pointermove", move, { passive: true });

    // Touch & Pointer listeners to catch taps and touch interactions on dual devices
    window.addEventListener("pointerdown", handleTouchInteraction, { passive: true });
    window.addEventListener("pointerup", handleTouchInteraction, { passive: true });
    window.addEventListener("pointercancel", handleTouchInteraction, { passive: true });

    window.addEventListener("touchstart", handleTouchInteraction, { passive: true });
    window.addEventListener("touchend", handleTouchInteraction, { passive: true });
    window.addEventListener("touchmove", handleTouchInteraction, { passive: true });
    window.addEventListener("touchcancel", handleTouchInteraction, { passive: true });

    window.addEventListener("mousedown", handleMouseDownOrClick, { passive: true });
    window.addEventListener("click", handleMouseDownOrClick, { passive: true });

    document.addEventListener("mouseenter", enterWindow);
    document.addEventListener("mouseleave", leaveWindow);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      hideCursor();

      window.removeEventListener("pointermove", move);

      window.removeEventListener("pointerdown", handleTouchInteraction);
      window.removeEventListener("pointerup", handleTouchInteraction);
      window.removeEventListener("pointercancel", handleTouchInteraction);

      window.removeEventListener("touchstart", handleTouchInteraction);
      window.removeEventListener("touchend", handleTouchInteraction);
      window.removeEventListener("touchmove", handleTouchInteraction);
      window.removeEventListener("touchcancel", handleTouchInteraction);

      window.removeEventListener("mousedown", handleMouseDownOrClick);
      window.removeEventListener("click", handleMouseDownOrClick);

      document.removeEventListener("mouseenter", enterWindow);
      document.removeEventListener("mouseleave", leaveWindow);

      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isPureTouch]);

  // On pure touch-only devices (smartphones/tablets without mouse), do not render custom cursor elements
  if (isPureTouch) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        data-custom-cursor="ring"
        aria-hidden="true"
        className="
          custom-cursor-element
          opacity-0
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
        style={{ display: "none" }}
      />

      <div
        ref={cursorRef}
        data-custom-cursor="dot"
        aria-hidden="true"
        className="
          custom-cursor-element
          opacity-0
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
        style={{ display: "none" }}
      />
    </>
  );
};

export default Cursor;
