import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { loggedInUser, selectedUser } from "../../selectors";
import socket from "../../service/socket";

function SingleChat() {
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState<any[]>([]);

  const _currentUser = useSelector(selectedUser);
  const _loggedInUser = useSelector(loggedInUser);

  useEffect(() => {
    socket.emit("oldMessages", {
      from: _loggedInUser.email,
      to: _currentUser.email,
    });
  }, [_currentUser, _loggedInUser]);

  socket.on("setOldMessage", (data) => {
    setAllMessage(data);
  });

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    socket.emit("msgToServer", {
      from: _loggedInUser.email,
      to: _currentUser.email,
      message,
    });
  };

  socket.on("msgToClient", (data) => {
    setAllMessage([...allMessage, data]);
  });

  return (
    <div className="flex items-center flex-col justify-center h-[90%] p-2 bg-gray-50 rounded-lg">
      <div className="flex-grow w-full overflow-y-scroll scrollbar-hide">
        {allMessage.map((val, index) => (
          <p
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={` clear-both rounded-md p-2 m-2 ${
              index % 2
                ? "bg-green-300 float-right"
                : "bg-indigo-200 float-left"
            }`}
          >
            {val?.message}
          </p>
        ))}
      </div>
      <TextField
        autoComplete="off"
        value={message}
        size="small"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-white"
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={(e) => {
                handleSend(e);
              }}
            >
              <SendIcon className="text-green-600" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default SingleChat;
