import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../Model/User";

// ステートの型定義
interface UsersState {
  users: User[];
}

// 初期ステートの定義
const initialState: UsersState = {
  users: [],
};

// スライスを作成
const userSlice = createSlice({
  name: "UsersSlice",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User[]>) => {
      const newArray = state.users.concat(action.payload);
      state.users = newArray;
      console.log(state.users);
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

// アクションクリエーターをエクスポート
export const { addUsers, addUser } = userSlice.actions;

// リデューサーをエクスポート
export default userSlice.reducer;
