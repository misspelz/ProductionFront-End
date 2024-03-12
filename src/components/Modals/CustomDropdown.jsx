import { Select } from "antd";

const CustomDropdown = ({ stallValue, menu, name, setData }) => {
  const handleChange = (value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Select
      defaultValue={stallValue}
      className="w-full h-[43px]"
      onChange={handleChange}
      options={menu}
    />
  );
};

export default CustomDropdown;
