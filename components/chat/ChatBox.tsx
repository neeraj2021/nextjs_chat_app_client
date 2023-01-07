import React from "react";
import { useSelector } from "react-redux";
import { capitalCase } from "change-case";
import SingleChat from "./SingleChat";
import { selectedUser } from "../../selectors";

function ChatBox() {
  const currentUser = useSelector(selectedUser);

  return (
    <div className="flex flex-col p-3 rounded-lg bg-white w-[70%]">
      <div className="px-3 pb-3 text-xl flex w-full border-solid border-0 border-gray-400 border-b-2">
        <span className="text-xl">{capitalCase(currentUser.name)}</span>
      </div>

      <SingleChat />
    </div>
  );
}

export default ChatBox;
