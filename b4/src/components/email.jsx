import { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const validateEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(text);
  };
  const handleSubmit = () => {
    setIsValid(validateEmail(email));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập email của bạn vào đây"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Kiểm tra email</button>
      <p>{isValid ? "Email hợp lệ" : "Email không hợp lệ"}</p>
    </div>
  );
};

export default EmailForm;
