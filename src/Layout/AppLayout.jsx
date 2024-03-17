import { Outlet, useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Asidebar } from "./Asidebar";
import { Header } from "./Header";
import { useState } from "react";
import { Slider } from "./Slider";

export const AppLayout = () => {
  const [slider, setSlider] = useState(false);
  const { pathname } = useLocation();

  const handleSlider = () => {
    setSlider((slider) => !slider);
  };

  return (
    <div className="app_layout">
      <Header />
      <Asidebar />
      <main className="app_main">
        <Outlet />
      </main>

      {pathname !== "/" && (
        <button
          className={`w-[32px] h-[32px] rounded-full bg-purple-900 flex justify-center items-center fixed ${
            slider ? "left-[71%]" : "left-[1rem]"
          } top-[15%] z-50 text-white text-[20px] cursor-pointer lg:hidden`}
          onClick={handleSlider}
        >
          <RiArrowRightSLine />
        </button>
      )}

      <Slider slider={slider} setSlider={setSlider} />
    </div>
  );
};
