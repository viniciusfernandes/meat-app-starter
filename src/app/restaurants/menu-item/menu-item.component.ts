import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { RestaurantService } from '../restaurant.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCart } from '../shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  @Input()
  menuItem:MenuItem;

  @Output()
  addItemEvent=new EventEmitter();


  ngOnInit() {
  }
  addItem(){
   this.addItemEvent.emit(this.menuItem);
  }
 
}
