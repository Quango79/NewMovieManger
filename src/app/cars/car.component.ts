import {HttpCarService} from "./http.CarService";
import {Component} from '@angular/core';
/**
 * Created by PQuandt on 7/14/2016.
 */

@Component({
    selector: 'cars',
    templateUrl: 'car.component.html',
    providers: [HttpCarService]
})
export class CarComponent{
    getMyCarsFromServer:string;
    postMyCarToServer:string;

    productCode:string;
    productName:string;
    productLine:string = "BMW 1 series";
    buyPrice:number;

    constructor(private _httpCarService:HttpCarService){

    }

    getDataFromServer(){
        this._httpCarService.getCarsRestful().subscribe(
            data=> this.getMyCarsFromServer = data.time,
                // JSON.stringify(data),
            error=> console.log("Error Http Get Service"),
            ()=> console.log("Job Done Get!"));
    }

    postDataToServer(){
        this._httpCarService.postCarRestful(this.productCode, this.productName, this.productLine, this.buyPrice).subscribe(
            data=>this.postMyCarToServer = JSON.stringify(data),
            error => console.log("Error Http Post Service"),
            ()=> console.log("Job Done Post!")
        );
    }
}
