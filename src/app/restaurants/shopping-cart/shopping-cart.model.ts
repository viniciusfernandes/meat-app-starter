
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCart{
    cartItems:CartItem[]=[];
    clear(){
        this.cartItems=[];
    }
    total(){
        return this.cartItems.map(item=> item.value()).reduce((a,b)=> a+b, 0);
    }
    private increaseCartItem(item:MenuItem, quty:number):CartItem {
        let cItem = this.cartItems.find(i=> i.menuItem.id===item.id);
            if(cItem){
                cItem.quantity+=quty;
            } else {
                this.cartItems.push(new CartItem(item));
            }
        return cItem;
    }

    addItem(item:MenuItem){
        this.increaseCartItem(item,1);
    }

    removeItem(item:CartItem){
        this.cartItems.splice(this.cartItems.indexOf(item),1);
    }

    increase(item:CartItem){
         this.increaseCartItem(item.menuItem,1);
    }
    
    decrease(item:CartItem){
        var cItem = this.increaseCartItem(item.menuItem,-1);
        if(cItem.quantity<=0){
            this.removeItem(item);
        }
    }
}