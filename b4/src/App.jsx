import { useState } from "react";
import "./App.css";
import Lightbulb from "./components/lightbulb";
import EmailForm from "./components/email";

const App = () => {
  const [age, setAge] = useState(0);
  const increase = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <div>
        <h1>Hello everyone</h1>
        <p>Mỗi năm tôi được tăng 1 tuổi</p>
        <p>Hiện tại tôi: {age} tuổi</p>
        <button onClick={increase}>Tăng tuổi</button>
        <div style={{ marginBottom: "20px" }}>
          <Lightbulb />
        </div>
        <div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default App;
