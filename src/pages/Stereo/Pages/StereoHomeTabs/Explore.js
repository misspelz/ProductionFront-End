import React from "react";
import SpecialPicksCard from "../../Components/SpecialPicksCard";
import Ad from "../../Assets/AD.jpeg";

export default function Explore() {
  return (
    <div>
      <div className="mx-3">
        <span className="text-xl font-medium">African Vibe</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
      </div>

      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">Best of Afrobeats</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
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
      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">Recommended</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
      </div>
      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">Pop for you</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
      </div>
    </div>
  );
}
