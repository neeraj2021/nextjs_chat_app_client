import { List, ListItemButton, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../axios";
import ApiEndPoints from "../../constants/ApiEndPoints";
import { IUser } from "../../interface";
import LoadingList from "../LoadingList";
import { selectUser, setAllUsers } from "../../slices/userSlice";

function UserList({ userList }: { userList: IUser[] }) {
  const dispatch = useDispatch();

  return (
    <List dense className="flex flex-col gap-y-2 p-0">
      {userList.map((user: IUser) => (
        <Paper key={user.id}>
          <ListItemButton
            className="rounded-xl"
            onClick={() => dispatch(selectUser(user))}
          >
            <div className="flex flex-col flex-wrap">
              <span className="font-medium text-base">{user.name}</span>
              <span className="text-xs pb-2">{user.email}</span>
            </div>
          </ListItemButton>
        </Paper>
      ))}
    </List>
  );
}

function MyChats() {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get(ApiEndPoints.users);
        setUserList(data);
        dispatch(setAllUsers(data));
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

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
