import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';
import { UserStatus } from './user-status';

@Injectable({
  providedIn: 'root'
})
export class PocserviceService {

  constructor(private x:HttpClient) { }

  callws(u:User):Observable<User>
  {
    let url="http://localhost:5252/register";
    console.log("text msg");
     return this.x.post<User>(url,u);
  
  }

  callsingleselect(userId:String,password:String):Observable<UserStatus>
{
  console.log("inside service"+"userid="+userId+"password="+password);
  let url="http://localhost:5252/login?userId="+userId+"&password="+password;
  console.log("url="+url); //bc period
  return this.x.get<UserStatus>(url);
}


}
