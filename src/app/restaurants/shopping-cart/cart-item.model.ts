import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem{
    menuItem:MenuItem;
    quantity:number=0;

    constructor(menuItem:MenuItem){
        this.quantity++;
        this.menuItem=menuItem;
    }

    value():number{
        return this.quantity*this.menuItem.price;
    }
}