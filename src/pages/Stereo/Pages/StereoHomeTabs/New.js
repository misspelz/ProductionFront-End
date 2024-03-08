import React from "react";
import SpecialPicksCard from "../../Components/SpecialPicksCard";
import Ad from "../../Assets/AD.jpeg";
import NewCard from "../../Components/NewCard";

export default function New() {
  return (
    <div>
      <div className="mx-3">
        <span className="text-xl font-medium">New Release</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-2 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
      </div>

      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">New Albums</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-2 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
      </div>

      {/* ad */}
      <div style={{ margin: "10px 10px" }}>
        <img
          src={Ad}
          alt="Advertisement"
          style={{
            height: "80px",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
