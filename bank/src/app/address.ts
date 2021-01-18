export class Address {

    addressId : number;
		houseNo : String;
		location : String;
		city : String;
		state : String;
        pin : String;
        
        constructor(addressId:number,houseNo:String,location:String,
            city:String,state:String,pin:String)
        {
            this.addressId = addressId;
		this.houseNo = houseNo;
		this.location = location;
		this.city = city;
		this.state = state;
		this.pin = pin;
        }
}
