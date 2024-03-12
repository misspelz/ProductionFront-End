import { useSearchParams } from "react-router-dom";

const ProfileActivityButton = ({ children, count, param }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get("tab");
  const currentTab = !tab ? "all" : tab;

  const handleClick = () => {
    setSearchParams({ tab: param });
  };

  return (
    <button
      className={`px-[2rem] py-[0.8rem] rounded-[25px] text-[12px] font-light border-none cursor-pointer ${
        currentTab === param ? "bg-[#4f0da3] text-white" : "text-gra-600"
      } lg:text-[15px] font-medium`}
      onClick={handleClick}
    >
      <span>{children}</span>{" "}
      <span className="py-[2px] px-[6px] rounded-[3px] bg-white text-[#4f0da3] my-0 mx-[4px]">
        {count}
      </span>
    </button>
  );
};

export default ProfileActivityButton;
