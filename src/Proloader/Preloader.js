import React from "react";
import preloader from "../assets/images/loader2.gif";

let Preloader = () => {
  return (
    <div style={{ backgroundColor: "", marginLeft: "35%", marginBottom: "120px", marginTop: "120px" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
