import React from "react";
import "@/css/forum.css";
import ForumContainer from "@/components/ForumContainer";
import ChatContainer from "@/components/ChatContainer";
import Description from "@/components/Description";

const Forums = (props) => {
  return (
    <div className="layout">
        <ForumContainer/>
        <ChatContainer/>
        <Description/>
    </div>
  );
};

export default Forums;
