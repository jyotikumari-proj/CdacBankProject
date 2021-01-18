import { Address } from "./address";


export class User {

     id:number;
     userId:String;
     name:String;
     password:String;
     aadhar:String;
     pan:String; 
     accountType:String;
     mobile:String;
	 userType:String;
     address:Address;

    
     
     constructor( id:number,userId:String,name:String, password:String,aadhar:String,
        pan:String,accountType:String,mobile:String, userType:String,address:Address)
     {
          this.id=id;
          this.userId=userId;
          this.name=name;
          this.password=password;
          this.aadhar=aadhar;
          this.pan=pan;
          this.accountType=accountType;
          this.mobile=mobile;
          this.userType=userType;
          this.address=address;
     }

}
