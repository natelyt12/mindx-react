import { useState } from "react";

const Lightbulb = () => {
  const [isOn, setIsOn] = useState(true);
  const toggleLight = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <p>Lightbulb state: {isOn ? "The light is on" : "The light is off"}</p>
      <button onClick={toggleLight}>
        {isOn ? "Turn off the light" : "Turn on the light"}
      </button>
    </div>
  );
};

export default Lightbulb;
