import ActionButton from "components/Commons/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const PollPayment = () => {
  const nav = useNavigate();
  const HandlePayment = () => {
    nav("/Voting");
  };
  return (
    <div className="detail-bx-container bagw">
      <div className="searchEmpty-bbox ddwn">
        <div className="empt-box-sea">
          <img src="images/em2.png" alt="" />
          <div className="notin-is">Your payment has been confirmed</div>

          <div className="choose-act-btn">
            <ActionButton
              label={"Continue to polls"}
              bg={"pruplr"}
              onClick={HandlePayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollPayment;
