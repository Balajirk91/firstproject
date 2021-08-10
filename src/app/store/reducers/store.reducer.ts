import { createReducer, on } from "@ngrx/store";
import { userdetailmodel } from "src/app/models/userdetail.model";
import { adduserdetailsuccess, deleteusersuccess, getuserdetailsuccess, updateusersuccess } from "../actions/store.actions";


export interface UserState {
  users: ReadonlyArray<userdetailmodel>;
}

export const initialState: userdetailmodel[] = [{id:1,name:'',dept:''}];

export const userReducer = createReducer(
  initialState,
  on(getuserdetailsuccess, (state, { users }) => [...users]),
  on(adduserdetailsuccess, (state, { user }) => [...state, user]),
 on(deleteusersuccess, (state, { id }) =>
    state.filter((user) => user !== id)
  ),
  on(updateusersuccess, (state, { user }) => {
    const users = state.map((m) => {
      if (m.id === user.id) {
        return user;
      }
      return m;
    });
    return users;
  })
);

