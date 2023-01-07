import type { RootState } from "../store";

export const allUsers = (state: RootState) => state.user.allUsers;
export const selectedUser = (state: RootState) => state.user.selectedUser;
