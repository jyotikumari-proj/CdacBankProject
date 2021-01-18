import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank';

  constructor( private _router:Router)
  {

  }

  userReg(pageName:string):void
   {
     console.log("inside user Registration");
     this._router.navigate([`${pageName}`]);
   }

   login(pageName:string):void
   {
    console.log("inside user login home page");
    this._router.navigate([`${pageName}`]);
   }
}
