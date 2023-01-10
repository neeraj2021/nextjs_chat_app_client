import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoggedinUser, IUser } from "../interface";

interface IUserSlice {
  allUsers: IUser[];
  selectedUser: IUser;
  loggedInUser: ILoggedinUser;
}

const initialState: IUserSlice = {
  allUsers: [],
  selectedUser: {
    name: "",
    id: 0,
    email: "",
  },
  loggedInUser: {
    name: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (state, { payload }: PayloadAction<IUser>) => {
      state.selectedUser.email = payload.email;
      state.selectedUser.id = payload.id;
      state.selectedUser.name = payload.name;
    },

    setAllUsers: (state, { payload }: PayloadAction<IUser[]>) => {
      state.allUsers = payload;
    },

    setLoggedInUser: (state, { payload }: PayloadAction<ILoggedinUser>) => {
      state.loggedInUser.name = payload.name;
      state.loggedInUser.email = payload.email;
    },
  },
});

export const { selectUser, setAllUsers, setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
