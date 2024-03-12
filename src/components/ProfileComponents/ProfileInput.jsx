const ProfileInput = ({ placeholder, onChange, name, value }) => {
  return (
    <input
      type="text"
      className="edit_profile_input_and_textarea_container"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default ProfileInput;
