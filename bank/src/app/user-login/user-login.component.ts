import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { PocserviceService } from '../pocservice.service';
import { User } from '../user';
import { UserStatus } from '../user-status';
//import { UserStatus } from '../user-status';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  msg:any;
  user:User;
  address:Address;
//  userStatus:UserStatus;
  constructor(private y:PocserviceService) {
   // this.userStatus=new UserStatus('abc');
    this.address=new Address(0,'','','','','');
    this.user =new User(0,'','','','','','','','',this.address);
   
   }

  goToBankDashBoard()
  {
    this.y.callsingleselect(this.user.userId,this.user.password).
    subscribe((userStatus:UserStatus)=>{
      this.msg=userStatus.status;
      console.log("userid="+this.user.userId+"password="+this.user.password);
        
    },
    (err)=>{
        this.msg="failure";
    });

  }

  ngOnInit(): void {
  }

}
