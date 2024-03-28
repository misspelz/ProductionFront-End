import Description from "components/newCommerce/typography/txtDescription";
import Header from "components/newCommerce/typography/txtHeader";
import StarActive from "../../../../assets/categorySvg/Star_active.svg";
import StarFade from "../../../../assets/categorySvg/Star_fade.svg";
import { useEffect, useState } from "react";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
const AddReview = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");

  //onchanging text-area
  const handleChange = (e) => {
    setVal(e.target.value);
    // updating-count-words

    setCount(val.length);
  };

  //strictly-updating count state
  useEffect(() => {
    val === "" && setCount(0);
  }, [val]);

  const title =
    "Your opinion matters! Help the community by rating the product you've tried.Share your experience to guide fellow shoppers.";
  return (
    <div className="flex flex-col items-center justify-center mx-auto pt-3 px-[20%] gap-4">
      <Description title={title} fw="500" fs="14px" cl="#222222" />

      <div className="flex flex-row gap-4 items-center">
        <img src={StarActive} alt="star-active" />
        <img src={StarActive} alt="star-active" />
        <img src={StarActive} alt="star-active" />
        <img src={StarFade} alt="star-faded" />
      </div>
      <div>
        <Header title="Any comments?" fw="500" fz="15px" cl="#000000" />
        <div className=" pt-1.5 relative w-full">
          <textarea
            onChange={handleChange}
            value={val}
            maxLength={500}
            className="bg-[#4f0da308] text-[black] text-[13px] border-none rounded-md px-3 py-4 font-[Ubuntu]  w-[100%] resize-none placeholder:font-[ubuntu] placeholder:text-[#c4c4c4] placeholder:text-[13px]"
            name="review"
            placeholder="Share your experience"
            id="review"
            cols="100"
            rows="8"
          ></textarea>
          <p className="absolute bottom-[0.15rem] text-[13px] text-[#c4c4c4] right-3">{`${count}/500 words`}</p>
        </div>
      </div>
      <div className="mt-1">
        {/* call-button-to-update fields and send as API */}
        <ButtonSide
          title="Review product"
          bg="#4f0da3"
          cl="#ffff"
          jc="initial"
          styles={{ paddingInline: "5rem" }}
        />
      </div>
    </div>
  );
};

export default AddReview;
