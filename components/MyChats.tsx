import { List, ListItemButton, ListItemText, Skeleton } from "@mui/material";
import React from "react";

function MyChats() {
  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-lg w-1/4">
      <div className="px-3 pb-3 text-xl flex w-full border-solid border-0 border-gray-400 border-b-2">
        My Chats
      </div>
      <div className="flex flex-col p-3 w-full h-full">
        <List dense>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <ListItemButton>
            <ListItemText primary="First User" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Second User" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Third User" />
          </ListItemButton>
        </List>
      </div>
    </div>
  );
}

export default MyChats;
