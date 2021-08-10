import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { adduserdetail, adduserdetailsuccess, deleteuserdetail, deleteusersuccess, getuserdetails, getuserdetailsuccess, updateuserdetail, updateusersuccess } from "../actions/store.actions";
import { catchError, concatMap, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EmptyError } from "rxjs";
import { DataService } from "src/app/service/userdetail.service";

@Injectable()
export class UserdataEffects {
  loadUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(getuserdetails),
      exhaustMap(() =>
        this.dataService.getusersdata().pipe(
          map((users) => getuserdetailsuccess(users)),
          //catchError(() => EmptyError)
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(adduserdetail),
      tap((users) => console.log(users)),
      concatMap(({ user }) =>
        this.dataService.adduserdata(user).pipe(
          map((newuser) => adduserdetailsuccess(newuser)),
         // catchError(() => EmptyError)
        )
      )
    )
  );

  deleteuser$ = createEffect(() =>
  this.action$.pipe(
    ofType(deleteuserdetail),
    mergeMap(({ id }) =>
      this.dataService.deleteuserdata(id).pipe(
        map(() => deleteusersuccess(id)),
      
      )
    )
  )
);

updateuser$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateuserdetail),
      concatMap(({ user }) =>
        this.dataService.updateuser(user).pipe(
          map(() => updateusersuccess(user))
        )
      )
    )
  );

  /*getsingleuser$ = createEffect(() =>
    this.action$.pipe(
      ofType(getsingleuser),
      exhaustMap(({userid}) =>
        this.dataService.getsingledata(userid).pipe(
          map((user) => getsingleusersuccess(user)),
          //catchError(() => EmptyError)
        )
      )
    )
  );*/

  constructor(private action$: Actions, private dataService: DataService) {}
}
