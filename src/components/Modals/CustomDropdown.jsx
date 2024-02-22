import { Select, Space } from 'antd';

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
      style={{
        width: '100%',
        height: '43px',
      }}
      onChange={handleChange}
      options={menu}
    />
  );
};

export default CustomDropdown;
