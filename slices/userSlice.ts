import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interface";

interface IUserSlice {
  allUsers: IUser[];
  selectedUser: IUser;
}

const initialState: IUserSlice = {
  allUsers: [],
  selectedUser: {
    name: "",
    id: 0,
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
  },
});

export const { selectUser, setAllUsers } = userSlice.actions;
export default userSlice.reducer;
