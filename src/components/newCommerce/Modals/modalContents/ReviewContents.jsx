import React, { useContext } from "react";
import Reviews from "components/newCommerce/data/Reviews";
import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import AddReview from "./Reviewadd";
import { ButtonSide } from "../../shared/sideButton";
import { ModalContext } from "Context/ModalContext";
const ReviewContent = () => {
  const { currentCheck, movetoAdd } = useContext(ModalContext);

  const addReview = () => {
    movetoAdd();
  };
  return (
    <div className="content px-4 mt-6 pb-4">
      {currentCheck === "readReview" ? (
        <>
          <div className="flex flex-col items-start gap-3">
            {/* mapping-mock-review-feedbacks */}
            {Reviews.map((review) => {
              return (
                <div className="flex flex-col items-start pt-2" key={review.id}>
                  {/* first-flex-container-avatar */}
                  <div className="flex flex-row gap-2 items-start">
                    <img src={review.review_pic} alt="reviwer-avatar" />

                    <div className="flex flex-col g-[1px]">
                      <Header
                        title={review.review_name}
                        fw="500"
                        fz="16px"
                        cl="#000000"
                      />
                      <p className=" centered text-[12px] text-[#222222]">
                        {review.posted_last}
                      </p>
                    </div>
                    {/* rating */}
                    <img
                      src={review.star}
                      alt="rating_star"
                      className="mt-[3px]"
                    />
                  </div>
                  {/* feedback-text */}
                  <div>
                    <Description
                      title={review.feedback_text}
                      cl="#282828"
                      fw="400"
                      fz="12px"
                      sx={{ textAlign: "left !important" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-5">
            <ButtonSide
              title="Review product"
              bg="#4f0da3"
              cl="#ffff"
              jc="initial"
              click={addReview}
              styles={{ paddingInline: "5rem" }}
            />
          </div>
        </>
      ) : (
        <AddReview />
      )}
    </div>
  );
};

export default ReviewContent;
