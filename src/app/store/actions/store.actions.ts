import { createAction } from "@ngrx/store";
import { userdetailmodel } from "src/app/models/userdetail.model";

export const getuserdetails = createAction('[userdetails] Get userdetails');
export const getuserdetailsuccess = createAction(
  '[userdetails] Get userdetails success',
  (users: ReadonlyArray<userdetailmodel>) => ({ users })
  // props<{ movies: ReadonlyArray<Movie> }>()
);
export const adduserdetail = createAction(
  '[userdetails] Add userdetail',
  (user: userdetailmodel) => ({ user })
  // props<{ movie: Movie }>()
);
export const adduserdetailsuccess = createAction(
  '[userdetails] Add userdetail success',
  // props<{ movie: Movie }>(),
  (user: userdetailmodel) => ({ user })
);

export const deleteuserdetail = createAction(
 '[userdetails] Delete userdetail',
  (id: userdetailmodel )=> ({ id })
);

export const deleteusersuccess = createAction(
  '[userdetails] Delete userdetail success',
  (id: userdetailmodel )=> ({ id })
);

export const updateuserdetail = createAction(
  '[Movie] Update userdetail',
  (user: userdetailmodel) => ({ user })
);

export const updateusersuccess = createAction(
  '[Movie] Update userdetail success',
  (user: userdetailmodel) => ({ user })
);

/*export const getsingleuser = createAction('[userdetails] Get single userdetail',(userid: userdetailmodel )=> ({ userid }))
export const getsingleusersuccess = createAction(
  '[userdetails] Get get userdetail success',
  (user: userdetailmodel) => ({ user })
  // props<{ movies: ReadonlyArray<Movie> }>()
);*/
