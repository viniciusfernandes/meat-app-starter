import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { REST_API } from "../app.rest.api";
import { Observable } from "rxjs/Observable";
import  "rxjs/add/operator/map";
import { MenuItem } from "./menu-item/menu-item.model";
import { Review } from "./review/review.model";

@Injectable()

export class RestaurantService{
    constructor(private http:Http){

    }
    restaurants():Observable<Restaurant[]>{
        return this.http.get(`${REST_API}/restaurants`).map(response => response.json());

    }

    restaurantById(id:string):Observable<Restaurant>{
        return this.http.get(`${REST_API}/restaurants/${id}`).map(response => response.json());
    }
    

    menuOfRestaurant(id:string):Observable<MenuItem[]>{
        return this.http.get(`${REST_API}/restaurants/${id}/menu`).map(response=>response.json());
  
    }

    reviewOfRestaurant(id:string):Observable<Review[]>{
        return this.http.get(`${REST_API}/restaurants/${id}/review`).map(response=>response.json());
  
    }
}