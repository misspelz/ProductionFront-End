import { SliderContent } from "./SliderContent";

export const Asidebar = () => {
  return (
    <aside className="app_aside h-screen bg-[#4F0DA3] fixed w-[50%] z-40 lg:w-1/5 xl:w-1/5 md:w-1/4  top-0 left-0">
      <SliderContent />
    </aside>
  );
};
