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
<<<<<<< HEAD
      } lg:text-[15px] font-medium flex items-center`}
=======
      } lg:text-[15px] font-medium`}
>>>>>>> 8b76aa43bd0779e5a4c51e23d4d00fb7681df0f9
      onClick={handleClick}
    >
      <span>{children}</span>{" "}
      <span
        className={`${
          !count ? "hidden" : "block"
        } py-[2px] px-[6px] rounded-[3px] bg-white text-[#4f0da3] my-0 mx-[4px]`}
      >
        {count}
      </span>
    </button>
  );
};

export default ProfileActivityButton;
