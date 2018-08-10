import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { REST_API } from "../app.rest.api";
import { Observable } from "rxjs/Observable";
import  "rxjs/add/operator/map";

@Injectable()

export class RestaurantService{
    constructor(private http:Http){

    }
    restaurants():Observable<Restaurant[]>{
        return this.http.get(`${REST_API}/restaurants`).map(response => response.json());
    }
}