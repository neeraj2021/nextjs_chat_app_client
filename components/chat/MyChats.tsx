import { List, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import ApiEndPoints from "../../constants/ApiEndPoints";
import { IUser } from "../../interface";
import LoadingList from "../LoadingList";

function UserList({ userList }: { userList: IUser[] }) {
  return (
    <List dense className="flex flex-col gap-y-2 p-0">
      {userList.map((user: IUser) => (
        <ListItemButton key={user.id} className="bg-gray-100 rounded-xl">
          <ListItemText primary={user.name} className="font-semibold" />
        </ListItemButton>
      ))}
    </List>
  );
}

function MyChats() {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get(ApiEndPoints.users);
        setUserList(data);
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-lg w-1/4">
      <div className="px-3 pb-3 text-xl flex w-full border-solid border-0 border-gray-400 border-b-2">
        My Chats
      </div>
      <div className="flex flex-col p-3 w-full h-full">
        {loading ? <LoadingList /> : <UserList userList={userList} />}
      </div>
    </div>
  );
}

export default MyChats;
