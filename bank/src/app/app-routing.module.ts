import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../app/registration/registration.component';
import{UserLoginComponent} from '../app/user-login/user-login.component';

const routes: Routes = [
  {path: 'registration' , component: RegistrationComponent },
  {path:'userLogin', component:UserLoginComponent },
  {path:'login', component:UserLoginComponent }
];

//export const routing: NgModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
