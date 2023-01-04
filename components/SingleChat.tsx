import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SingleChat() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center flex-col justify-center h-full bg-gray-100 rounded-lg">
      <div className="flex-grow bg-red-200 w-full overflow-y-scroll">
        <p>All Message will come here</p>
        <p>All Message will come here</p>
        <p>All Message will come here</p>
      </div>
      <TextField
        value={message}
        size="small"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-white pt-2"
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
