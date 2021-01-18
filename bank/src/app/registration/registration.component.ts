import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { PocserviceService } from '../pocservice.service';
import { Router } from '@angular/router';
import { User } from '../user';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title2:any;
  obj:User;
  address:Address;

  constructor(private y:PocserviceService , private _router:Router) { 
    this.address=new Address(0,'','','','','');
    this.obj =new User(0,'','','','','','','','',this.address);
   
  }

  userLogin(pageName:string):void
  {
    console.log("inside user Login");
    this._router.navigate([`${pageName}`]);
  }

  check()
  {
    this.y.callws(this.obj).subscribe(
      (od:User)=>{ 
        
        if(od.id==0)
            this.title2="insert failed";
        else
            this.title2="insert suceeded";
  
          
      
      },
        
        (err)=>{this.title2=JSON.stringify(err)}
      );
  }

  ngOnInit(): void {
  }

}
