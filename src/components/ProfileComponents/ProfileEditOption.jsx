const ProfileEditOption = ({ children, header }) => {
  return (
    <div className="text-[14px] font-extralight">
      <label>{header}</label>

      <div className="flex gap-[10px]">{children}</div>
    </div>
  );
};

export default ProfileEditOption;
