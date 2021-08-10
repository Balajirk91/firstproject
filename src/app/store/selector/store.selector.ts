import { createSelector } from "@ngrx/store";
import { userdetailmodel } from "src/app/models/userdetail.model";
import { UserState } from "../reducers/store.reducer";

export const UserSelector = createSelector(
    (state: UserState) => state.users,
    (userdetails: ReadonlyArray<userdetailmodel>) => userdetails
  );