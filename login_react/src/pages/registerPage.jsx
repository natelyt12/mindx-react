import { useState } from "react";
import {
  isValidEmail,
  isValidUsername,
  isValidPassword,
} from "../utils/validate";
import TextStagger from "../components/textStagger";
import Input from "../components/input";
import Button from "../components/button";
import GridAnim from "../components/gridAnim";

// Error message style
const errorStyle = {
  color: "#FF3344",
  fontSize: "0.8em",
  margin: "4px 0",
};

const RegisterPage = ({ onLogin, onAddUser, users, onViewData }) => {
  // 1. Quản lý input bằng các state cơ bản, quen thuộc
  const [usrName, setUsrName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2. Gom các thông báo lỗi vào 1 object (thay vì 5 state boolean)
  const [errors, setErrors] = useState({});

  // Kiểm tra form đã điền đủ hay chưa
  const isFormIncomplete = !usrName.trim() || !email.trim() || !password.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const trimmedUsername = usrName.trim();
    const trimmedEmail = email.trim();

    // 1. Kiểm tra Username (định dạng & tồn tại)
    if (!isValidUsername(trimmedUsername)) {
      newErrors.username =
        "Username must be 3-20 characters, no invalid special characters.";
    } else if (
      users.some(
        (u) => u.username.toLowerCase() === trimmedUsername.toLowerCase(),
      )
    ) {
      newErrors.username = "This username is already taken.";
    }

    // 2. Kiểm tra Email (định dạng & tồn tại)
    if (!isValidEmail(trimmedEmail)) {
      newErrors.email = "Invalid email format.";
    } else if (
      users.some((u) => u.email.toLowerCase() === trimmedEmail.toLowerCase())
    ) {
      newErrors.email = "This email is already in use.";
    }

    // 3. Kiểm tra Password (định dạng)
    if (!isValidPassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters with 1 letter and 1 number.";
    }

    // Nếu có lỗi -> cập nhật errors và dừng lại
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Đăng ký thành công -> thêm user
    onAddUser({
      username: trimmedUsername,
      email: trimmedEmail,
      password: password,
    });

    alert("Register complete, now login to your account.");

    // Reset lại form và lỗi
    setUsrName("");
    setEmail("");
    setPassword("");
    setErrors({});
    onLogin();
  };

  return (
    <div className="box flex flex-row text-base">
      <div className="left_box flex flex-1 items-center justify-center border-r h-dvh border-stone-800">
        <div className="form_wrapper flex flex-col items-center w-100 gap-6">
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="text-4xl mb-4">
              <TextStagger text="REGISTER" />
            </p>
            <div className="flex flex-col">
              <Input
                type="text"
                value={usrName}
                onChange={(e) => {
                  setUsrName(e.target.value);
                  if (errors.username) setErrors({ ...errors, username: "" });
                }}
                placeholder="Type your username"
              />
              {errors.username && <p style={errorStyle}>{errors.username}</p>}
            </div>

            <div className="flex flex-col">
              <Input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="Type your email"
              />
              {errors.email && <p style={errorStyle}>{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                placeholder="Type your password"
              />
              {errors.password && <p style={errorStyle}>{errors.password}</p>}
            </div>

            <Button type="submit" variant="primary" disabled={isFormIncomplete}>
              Register
            </Button>
          </form>
          <div className="nav_action flex gap-4">
            <Button variant="secondary" onClick={onLogin}>
              {"<"} Back to login
            </Button>
            <Button variant="secondary" onClick={onViewData}>
              View Database
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

export default RegisterPage;
