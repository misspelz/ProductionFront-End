const ProfileInput = ({ placeholder, onChange, name }) => {
  return (
    <input
      type='text'
      className='profile_input'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  );
};

export default ProfileInput;
