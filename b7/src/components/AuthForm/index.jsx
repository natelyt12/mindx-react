import { useState, useEffect } from "react";

const AuthForm = () => {
  const API_BASE_URL = "https://mindx-mockup-server.vercel.app/";
  const API_KEY = "6ae1c3ebcc6cc9ad6200c991";
  const req_header = {
    "Content-type": "application/json",
    "x-api-key": API_KEY,
  };
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneCode: "",
    phone: "",
    password: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, isShowPassword] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [currentUser, setCurrentUser] = useState(null);

  //   Validation
  const [pswdValid, setPswdValid] = useState({
    hasMinLength: false,
    hasSymbol: false,
  });

  useEffect(() => {
    if (isSignUp) {
      const minLength = formData.password.length >= 10;
      const pswdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      const isValid = pswdRegex.text(formData.password);
      setPswdValid({
        hasMinLength: minLength,
        isValid: isValid,
      });
    }
  }, [formData.password, isSignUp]);

  useEffect(() => {
    setFeedback({ type: "", message: "" });
    setFormData({
      fullname: "",
      email: "",
      phoneCode: "",
      phone: "",
      password: "",
      location: "",
    });
  }, [isSignUp]);

  return <div></div>;
};

export default AuthForm;
