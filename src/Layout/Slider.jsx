import { SliderContent } from "./SliderContent";

export const Slider = ({ slider, setSlider }) => {
  return (
    <aside
      className={`fixed top-0 bottom-0 bg-[#4f0da3] flex flex-col gap-[3.2rem] justify-between py-[5rem] px-[3rem] w-[75%] md:w-[50%] transition-transform duration-300 ${
        slider ? "translate-x-[0]" : "translate-x-[-100rem]"
      }`}
    >
      <SliderContent setSlider={setSlider} />
    </aside>
  );
};
