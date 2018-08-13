
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
        
        console.info('id: '+item.id+' car increase '+quty)
        let cItem = this.cartItems.find(i=> i.menuItem.id===item.id);
            if(cItem){
                console.info('car increase achou '+cItem.quantity)
                cItem.quantity+=quty;
            } else {
                cItem=new CartItem(item);
                this.cartItems.push(cItem);
            }
            console.info('car increase depois '+cItem.quantity)
        
        return cItem;
    }

    addItem(item:MenuItem){
        this.increaseCartItem(item,1);
    }

    removeItem(item:CartItem){
        this.cartItems.splice(this.cartItems.indexOf(item),1);
    }

    increase(item:CartItem){
         item.quantity++;
    }
    
    decrease(item:CartItem){
       item.quantity--;
        if(item.quantity<=0){
            this.removeItem(item);
        }
    }
}