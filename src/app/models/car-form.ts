export class CarForm {


    title : String;
    address : String;
    brand : String;
    model : String; 
    model_year : number;
    issuance : String;
    mileage : number;
    fuel : String;
    color : String;
    numbers_doors : number;
    horse_power : number;
    price : number;
    pictures : String[];
    sold : boolean;
    
    constructor(title : String, address : String, brand : String, model : String, model_year : number,
        mileage : number, fuel : String, color : String, numbers_doors : number,
        horse_power : number, price : number, pictures : String[]){
            this.title = title;
            this.address = address;
            this.brand = brand;
            this.model = model;
            this.model_year = model_year;
            this.issuance = new Date().toLocaleDateString();
            this.mileage = mileage;
            this.fuel = fuel;
            this.color = color;
            this.numbers_doors = numbers_doors;
            this.horse_power = horse_power;
            this.price = price;
            this.pictures = pictures;
            this.sold=false;


    }
    
}
