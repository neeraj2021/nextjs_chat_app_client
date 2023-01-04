import React from "react";
import SingleChat from "./SingleChat";

function ChatBox() {
  return (
    <div className="flex flex-col p-3 rounded-lg bg-white w-[70%]">
      <p className="text-xl">Someone Name</p>

      <SingleChat />
    </div>
  );
}

export default ChatBox;
