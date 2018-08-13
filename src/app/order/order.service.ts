import { Injectable } from "@angular/core";
import { ShoppingCart } from "../restaurants/shopping-cart/shopping-cart.model";
import { CartItem } from "../restaurants/shopping-cart/cart-item.model";

@Injectable()
export class OrderService{
    constructor(private shoppingCart:ShoppingCart){

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
}