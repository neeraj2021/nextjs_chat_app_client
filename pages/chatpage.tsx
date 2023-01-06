import React from "react";
import ChatBox from "../components/chat/ChatBox";
import MyChats from "../components/chat/MyChats";
import SideDrawer from "../components/SideDrawer";

function ChatPage() {
  return (
    <div>
      <SideDrawer />
      <div className="flex justify-center w-full h-[91vh] py-2 gap-2">
        <MyChats />
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatPage;
