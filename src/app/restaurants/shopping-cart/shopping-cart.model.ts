
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCart{
    cartItems:CartItem[]=[];
    clear(){
        this.cartItems=[];
    }
    total(){
        return this.cartItems.map(item=> item.quantity).reduce((a,b)=> a+b, 0);
    }

    addItem(item:MenuItem){
        let cItem = this.cartItems.find(i=> i.menuItem.id===item.id);
        if(cItem){
            cItem.quantity+=1;
        } else{
            this.cartItems.push(new CartItem(item));
        }
    }
    removeItem(item:CartItem){
        this.cartItems.splice(this.cartItems.indexOf(item),1);
    }
}