import { animate, stagger } from "animejs";
import { useEffect } from "react";

const GridAnim = () => {
  const squareArrays = Array.from({ length: 54 });
  useEffect(() => {
    animate(".sq", {
      rotate: ["0deg", "200deg", "360deg"],
      scale: [1, 2, 1],
      duration: 5000,
      delay: stagger(100, { grid: [6, 9], from: [0, 0] }),
      loop: true,
      ease: "inOutExpo",
    });
  }, []);
  return (
    <div className="overflow-hidden w-full">
      <div className="grid grid-cols-6 *:aspect-square">
        {squareArrays.map((items, index) => (
          <div className="sq bg-sky-300 m-0 opacity-50" key={index}>
            {squareArrays[items]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridAnim;
