import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SingleChat() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center flex-col justify-center h-[90%] p-2 bg-gray-50 rounded-lg">
      <div className="flex-grow w-full overflow-y-scroll scrollbar-hide">
        {Array(20)
          .fill(null)
          .map((val, index) => (
            <p
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={` clear-both rounded-md p-2 m-2 ${
                index % 2
                  ? "bg-green-300 float-right"
                  : "bg-indigo-200 float-left"
              }`}
            >
              All Message will come here {index}
            </p>
          ))}
      </div>
      <TextField
        value={message}
        size="small"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-white"
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => {}}>
              <SendIcon className="text-green-600" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default SingleChat;
