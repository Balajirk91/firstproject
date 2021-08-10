import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { userdetailmodel } from "../models/userdetail.model";

@Injectable({
    providedIn: 'root',
  })
  export class DataService {
    private url = 'http://localhost:3000/userinfo';
    constructor(private http: HttpClient) {}
    getusersdata(): Observable<ReadonlyArray<userdetailmodel>> {
      return this.http.get<ReadonlyArray<userdetailmodel>>(this.url).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
    }
  
    adduserdata(user: userdetailmodel): Observable<userdetailmodel> {
      return this.http.post<userdetailmodel>(this.url, user).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
    }
  
  deleteuserdata(id:userdetailmodel): Observable<userdetailmodel> {
    return this.http.delete<userdetailmodel>(this.url+"/"+id).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  updateuser(user: userdetailmodel): Observable<userdetailmodel> {
    return this.http.put<userdetailmodel>(this.url+"/"+user.id, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  }