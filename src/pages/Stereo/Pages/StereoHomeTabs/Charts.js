import React from "react";
import ChartCard from "../../Components/ChartCard";
import Ad from "../../Assets/AD.jpeg";

export default function Charts() {
  return (
    <div>
      <div
        className="flex gap-3 mx-3 overflow-x-scroll align-middle items-center"
        style={{ scrollbarWidth: "none" }}>
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
      </div>
      <div
        className="flex mt-4 gap-3 mx-3 overflow-x-scroll align-middle items-center"
        style={{ scrollbarWidth: "none" }}>
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
      </div>
      {/* ad */}
      <div className="mt-4" style={{}}>
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
      <div
        className="flex mt-4 gap-3 mx-3 overflow-x-scroll align-middle items-center"
        style={{ scrollbarWidth: "none" }}>
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
      </div>
      <div
        className="flex mt-4 gap-3 mx-3 overflow-x-scroll align-middle items-center"
        style={{ scrollbarWidth: "none" }}>
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
      </div>
    </div>
  );
}
