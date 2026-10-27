import { useState } from "react";
import TextStagger from "../components/textStagger";
import Button from "../components/button";
import Input from "../components/input";
import GridAnim from "../components/gridAnim";

const LoginPage = ({ onRegister, users, onViewData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isExist, setIsExist] = useState(null);

  const isFormIncomplete = !email.trim() || !password.trim();

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.some(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password,
    );
    setIsExist(found);
  };

  return (
    <div className="box flex flex-row text-base">
      <div className="left_box flex flex-1 items-center justify-center border-r h-dvh border-stone-800">
        <div className="form_wrapper flex flex-col items-center w-100 gap-6">
          <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
            <p className="text-4xl mb-4">
              <TextStagger text="WELCOME" />
            </p>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (isExist !== null) setIsExist(null);
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (isExist !== null) setIsExist(null);
              }}
            />
            <Button type="submit" disabled={isFormIncomplete}>
              Login
            </Button>
          </form>
          {isExist !== null && (
            <p className="status">
              {isExist
                ? "Login complete."
                : "Login failed, wrong email or password."}
            </p>
          )}
          <div className="nav_action flex gap-4">
            <Button variant="secondary" onClick={onRegister}>
              Become a member
            </Button>
            <Button variant="secondary" onClick={onViewData}>
              View database
            </Button>
          </div>
        </div>
      </div>
      <div className="right_box flex flex-1 h-dvh">
        <GridAnim />
      </div>
    </div>
  );
};

export default LoginPage;
