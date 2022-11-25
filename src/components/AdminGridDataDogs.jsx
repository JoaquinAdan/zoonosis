import React from "react";
import useBreakpoint from "../hooks/useBreakpoint";
import MapDogResponsive from "../features/MapDogResponsive";

const AdminGridDataDogs = () => {
  const matchesLG = useBreakpoint("lg");
  const matchesMD = useBreakpoint("md");
  return (
    <>
      <div
        className="data-dog-container"
        style={
          matchesLG
            ? {gridTemplateColumns: "repeat(3, 1fr)"}
            : matchesMD
            ? {gridTemplateColumns: "repeat(2, 1fr)"}
            : {gridTemplateColumns: "repeat(1, 1fr)"}
        }
      >
        <div className="data-dog">1</div>
        <div className="data-dog">2</div>
        <div className="data-dog">3</div>
        <div className="data-dog">4</div>
        <div className="data-dog">5</div>
        <div className="data-dog">6</div>
        {/* <MapDogResponsive size={(0.4
          ).toString()}/> */}
      </div>
    </>
  );
};

export default AdminGridDataDogs;
