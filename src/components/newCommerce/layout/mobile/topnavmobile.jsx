import Categorynav from "../../shared/category";
const MobileNav = () => {
  return (
    <div className="sticky top-[0px] z-[30] mobile_category_container">
      <div className="bg-[rgb(79,13,163)] flex gap-x-[1.4rem] pt-[1rem] p-b-[1rem] px-[1.4rem] overflow-x-auto mobile_category">
        <Categorynav />
      </div>
    </div>
  );
};

export default MobileNav;
