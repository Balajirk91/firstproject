import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { userdetailmodel } from '../models/userdetail.model';
import { DataService } from '../service/userdetail.service';
import { deleteuserdetail, updateuserdetail } from '../store/actions/store.actions';
import { UserState } from '../store/reducers/store.reducer';
import { UserSelector } from '../store/selector/store.selector';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private store: Store<UserState>,private service:DataService) {}

  users$ = this.store.pipe(select(UserSelector));
  selectedid:any
  name:any
  dept:any
  editbuttonshow:boolean=true
  ngOnInit(): void {
  }
  deleteuser(id:any)
  {
    this.store.dispatch(deleteuserdetail(id));
  }
  edituser(data:userdetailmodel,id:any)
  {
    this.editbuttonshow=false
    this.selectedid=id;
    this.name=data.name;
    this.dept=data.dept;
  }
  update(user:userdetailmodel){
    const m = { ...user };
    m.name = this.name;
    m.dept = this.dept;
    // dispatch action to update
    this.store.dispatch(updateuserdetail(m));
    this.selectedid = null;
  }
  canceledit(): void {
    this.selectedid = null;
    this.editbuttonshow=true
  }

}
