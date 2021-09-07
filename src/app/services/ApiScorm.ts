import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable()
export class peticionesScorm{
    public url: String;

    constructor(public _http: HttpClient){
        this.url = "http://localhost:4000/api/dataApi/";
    }

    getDataScorm(): Observable<any>{
        return this._http.get(this.url + "6137aee3597322090cd20412")
    }

}