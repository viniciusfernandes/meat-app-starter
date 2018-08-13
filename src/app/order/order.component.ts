import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { CartItem } from '../restaurants/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }

  items():CartItem[]{
    return this.orderService.items();
  }

  decrease(item:CartItem){
    this.orderService.decrease(item);
  }

  
  increase(item:CartItem){
    this.orderService.increase(item);
  }

  
  remove(item:CartItem){
    this.orderService.remove(item);
  }

}
