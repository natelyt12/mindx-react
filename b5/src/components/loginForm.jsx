import { Form, Input } from "antd";
import CustomModal from "./modal";
import CustomDropdown from "./dropDown";
const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Sucess: ", values);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Gender" name="dropdown">
        <CustomDropdown />
      </Form.Item>
      <Form.Item label={null}>
        <CustomModal />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
