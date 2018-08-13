import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../restaurants/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items:CartItem[];

  @Output()
  increaseEvent=new EventEmitter<CartItem>();
  @Output()
  decreaseEvent=new EventEmitter<CartItem>();
  @Output()
  removeEvent=new EventEmitter<CartItem>();
  constructor() { }

  ngOnInit() {
  }
  increase(item:CartItem){
    this.increaseEvent.emit(item);
  }
  decrease(item:CartItem){
    this.decreaseEvent.emit(item);
  }
  remove(item:CartItem){
    this.removeEvent.emit(item);
  }
}
