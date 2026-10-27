import { animate } from "animejs";
import { useEffect } from "react";
import { useState } from "react";

const TextStagger = ({ text }) => {
  const [buffer, setBuffer] = useState("");
  useEffect(() => {
    const textSplited = text.split("");
    for (let i = 0; i < textSplited.length; i++) {
      setTimeout(() => {
        setBuffer((prev) => prev + textSplited[i]);
      }, 100 * i);
    }
    animate(".blink", {
      opacity: [0, 1],
      loop: true,
      alternate: true,
      duration: 700,
      ease: "inOutExpo",
    });
  }, []);
  return (
    <span>
      {buffer}
      <span className="blink text-sky-500">_</span>
    </span>
  );
};

export default TextStagger;
