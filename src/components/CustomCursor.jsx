import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updatePointerType = (event) => setIsCoarsePointer(event.matches);

    updatePointerType(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePointerType);
    } else {
      mediaQuery.addListener(updatePointerType);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updatePointerType);
      } else {
        mediaQuery.removeListener(updatePointerType);
      }
    };
  }, []);

  useEffect(() => {
    if (isCoarsePointer) return;

    document.body.classList.add("custom-cursor-active");

    const moveHandler = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsHidden(false);
      const interactiveTarget = event.target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-hover"
      );
      setIsPointer(Boolean(interactiveTarget));
    };

    const leaveHandler = () => setIsHidden(true);
    const enterHandler = () => setIsHidden(false);
    const downHandler = () => setIsPressed(true);
    const upHandler = () => setIsPressed(false);

    window.addEventListener("pointermove", moveHandler);
    window.addEventListener("pointerdown", downHandler);
    window.addEventListener("pointerup", upHandler);
    window.addEventListener("pointerleave", leaveHandler);
    window.addEventListener("pointerenter", enterHandler);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", moveHandler);
      window.removeEventListener("pointerdown", downHandler);
      window.removeEventListener("pointerup", upHandler);
      window.removeEventListener("pointerleave", leaveHandler);
      window.removeEventListener("pointerenter", enterHandler);
    };
  }, [isCoarsePointer]);

  if (isCoarsePointer) return null;

  return (
    <>
      <div
        className={[
          "cursor-dot",
          isPointer ? "cursor-dot--pointer" : "",
          isPressed ? "cursor-dot--pressed" : "",
          isHidden ? "cursor-hidden" : "",
        ].join(" ")}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className={[
          "cursor-ring",
          isPointer ? "cursor-ring--pointer" : "",
          isPressed ? "cursor-ring--pressed" : "",
          isHidden ? "cursor-hidden" : "",
        ].join(" ")}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;

