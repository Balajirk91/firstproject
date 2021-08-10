import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { userdetailmodel } from '../models/userdetail.model';
import { DataService } from '../service/userdetail.service';
import { adduserdetail, getuserdetails } from '../store/actions/store.actions';
import { initialState, UserState } from '../store/reducers/store.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // users: userdetailmodel[] = [];
  constructor(private fb:FormBuilder,private store:Store<userdetailmodel>,private service:DataService) { }

  ngOnInit(){
    this.getusers();
  }
  userform=this.fb.group(
    {
      name:[],
      dept:[]
    }
  )
  addnewuser()
  {
    this.store.dispatch(adduserdetail(this.userform.value));
  }
  getusers()
  {
    this.store.dispatch(getuserdetails());
  }
}
