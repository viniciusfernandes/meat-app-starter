import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from './shopping-cart.model';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart:ShoppingCart) { }

  ngOnInit() {
  }
  items():CartItem[]{
    console.info("total itens: "+this.cart.cartItems.length);
    return this.cart.cartItems;
  }

  total():number{
    return this.cart.total();
  }

  clear(){
    this.cart.clear();
  }

  removeItem(item:CartItem){
    this.cart.removeItem(item);
  }

  addItem(item:any){
    
    console.info("add item: "+item);
    this.cart.addItem(item);
  }
}
