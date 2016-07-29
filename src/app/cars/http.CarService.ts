/**
 * Created by PQuandt on 7/14/2016.
 */

import {Observable} from "rxjs/Rx";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpCarService{
    private _carsURL:string = "http://date.jsontest.com";

    constructor(private _http: Http){}

    getCarsRestful(){
        return this._http.get(this._carsURL).map(res=>res.json());
    }
    postCarRestful(productCode:string, productName:string, productLine:string, buyPrice:number){
        let body = JSON.stringify({ "productCode":productCode,"productName":productName,"productLine":productLine,"buyPrice":buyPrice });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this._http.post(this._carsURL, body,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
