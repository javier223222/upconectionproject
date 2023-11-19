import React from "react";
import "@/css/foros.css";
import ForosChat from "@/components/ForosChat";
import ForosContainer from "@/components/ForosContainer";

const Foros = (props) => {
  return (

    <div className="container">
      <ForosContainer />
      <ForosChat />
    </div>

  );
};

export default Foros;
