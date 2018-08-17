import { Injectable } from "@angular/core";
import { ShoppingCart } from "../restaurants/shopping-cart/shopping-cart.model";
import { CartItem } from "../restaurants/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { REST_API } from "../app.rest.api";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Router } from "@angular/router";
import { ErrorHandler } from "../error-handler";
import { MenuItem } from "../restaurants/menu-item/menu-item.model";
@Injectable()
export class OrderService{
    constructor(private shoppingCart:ShoppingCart, private http:Http, private router:Router){

    }

    items():CartItem[]{
        return this.shoppingCart.cartItems;
    }

    increase(item:CartItem){
        this.shoppingCart.increase(item);
    }

    decrease(item:CartItem){
        this.shoppingCart.decrease(item);
    }

    remove(item:CartItem){
        this.shoppingCart.removeItem(item);
    }

    checkOrder(order:Order):Observable<number>{
        return this.http.post(`${REST_API}/restaurants/order`,order )
                .map(response=> response.json()).catch(ErrorHandler.handle);
    }

    
    clear(){
        this.shoppingCart.clear();
    }

    findStatistics(idRestaurant:number):Observable<MenuItem[]>{
        return this.http.get(`${REST_API}/restaurants/${idRestaurant}/menu/statistics`).map(response=> response.json());
    }
}