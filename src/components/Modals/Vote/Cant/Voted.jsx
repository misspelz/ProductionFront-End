import React from "react";
import Avatar from "react-avatar";
import "./styles.css";
import { FaClock } from "react-icons/fa";

const Voted = () => {
  return (
    <>
    <div className="cant-vote">
      <h2 className="head-line bus-dir" style={{padding: "20px 0"}}>Voting</h2>
        <div className="details">
          <div className="user">
            <Avatar name="John Doe" size="25" round className="avatar" />
            <p>John Doe</p>
          </div>
          <p>Today @ 12:09PM</p>
        </div>

        <div className="vote">
          <p className="details">What is your preferred programming language</p>
          <div className="polls">
            <div className="purple">
              <div className="oval-bg">
                <p
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  Python
                </p>
              </div>
            </div>

            <div className="purple">
              <div className="oval-bg">
                <p
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  Javascript
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          <span>
            <p>
              <span style={{ paddingRight: "10px" }}>
                <FaClock />
              </span>
              2 days remaining
            </p>
          </span>
          <p>500 votes</p>
        </div>

        <div className="votes">you have 10 votes</div>
      </div>
    </>
  );
};

export default Voted;
