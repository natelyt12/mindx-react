import "./App.css";
import Card from "./components/Card/card";

const App = () => {
  return (
    <div className="container">
      <Card
        personName="Nguyễn Văn A"
        className="Code Intensive"
        desc="Lorem ipsum dolor sit amet"
      />
      <Card
        personName="Đoàn Thị B"
        className="Web Fullstack"
        desc="Lorem ipsum dolor sit amet"
      />
      <Card
        personName="Trần Minh C"
        className="Code for Everyone"
        desc="Lorem ipsum dolor sit amet"
      />
    </div>
  );
};

export default App;
