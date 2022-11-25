import React from "react";
import paw from "../assets/paw.svg"

const Loading = () => {
  return (
    <div style={{width: "100%", height: "100vh", display: "flex", placeContent: "center"}}>
      <img src={paw} className="paw-loading" alt="imagen de carga" />
    </div>
  );
};

export default Loading;
