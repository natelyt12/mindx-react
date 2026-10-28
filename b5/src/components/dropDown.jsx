import { Button, Dropdown } from "antd";

const CustomDropdown = () => {
  const items = [
    {
      key: "1",
      label: <a>Lorem ipsum</a>,
    },
    {
      key: "2",
      label: <a>Dolor sit amet</a>,
    },
    {
      key: "3",
      label: <a>Hello world</a>,
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <Button>Dropdown</Button>
    </Dropdown>
  );
};

export default CustomDropdown;
