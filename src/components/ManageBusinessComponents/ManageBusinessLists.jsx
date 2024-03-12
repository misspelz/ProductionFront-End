import { Link } from "react-router-dom";
import business from "../../assets/profile_images/business_image.png";
import dots from "../../assets/profile_images/DotsThree.png";

const ManageBusinessLists = () => {
  return (
    <Link className="business_list">
      <div className="business_list_left">
        <img src={business} alt="" />

        <div>
          <h1>McDonald’s</h1>
          <p>Food and Drinks</p>
        </div>
      </div>

      <img src={dots} alt="Three Dots" className="business_list_right" />
    </Link>
  );
};

export default ManageBusinessLists;
