import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
@Injectable()
export class DataService{
    constructor(private http:HttpClient){

    }
    // url for communication
    // login - > /api/auth/login
    // logout -> '/api/auth/logout'
    // get customers data url - > '/api/customers'
    // put -> /api/customers/:id
    getCustomersData():Observable<any>{
        return this.http.get('/api/customers');
    }
    getCustomer(id:number):Observable<any>{
        return this.http.get('/api/customers'+'/'+id);
    }

}