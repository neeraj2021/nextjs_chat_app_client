import { List, ListItemButton, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axiosInstance from "../../axios";
import ApiEndPoints from "../../constants/ApiEndPoints";
import { ILoggedinUser, IUser } from "../../interface";
import LoadingList from "../LoadingList";
import {
  selectUser,
  setAllUsers,
  setLoggedInUser,
} from "../../slices/userSlice";
import { loggedInUser } from "../../selectors";
import socket from "../../service/socket";

function UserList({ userList }: { userList: IUser[] }) {
  const dispatch = useDispatch();

  const _loggedInUser = useSelector(loggedInUser);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    user: IUser
  ) => {
    e.preventDefault();
    dispatch(selectUser(user));
    socket.emit("joinRoom", {
      from: _loggedInUser.email,
      to: user.email,
    });
  };

  return (
    <List dense className="flex flex-col gap-y-2 p-0">
      {userList.map((user: IUser) => (
        <Paper key={user.id}>
          <ListItemButton
            className="rounded-xl"
            onClick={(e) => handleClick(e, user)}
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
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const body: ILoggedinUser = JSON.parse(user);
      dispatch(setLoggedInUser(body));
    } else {
      router.push("/");
    }
  }, [dispatch, router]);

  const _loggedInUser = useSelector(loggedInUser);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get(
          `${ApiEndPoints.allUsers}?email=${_loggedInUser.email}`
        );
        setUserList(data);
        dispatch(setAllUsers(data));
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [_loggedInUser.email, dispatch]);

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
