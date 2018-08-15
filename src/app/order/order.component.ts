import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { CartItem } from '../restaurants/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService, private router:Router) { }

  ngOnInit() {
  }

  items():CartItem[]{
    return this.orderService.items();
  }

  decrease(item:CartItem){
    this.orderService.decrease(item);
  }

  
  increase(item:CartItem){
    console.info('order increase '+item.quantity)
    this.orderService.increase(item);
  }

  
  remove(item:CartItem){
    this.orderService.remove(item);
  }

  checkOrder(){
    var order = new Order();
    var items =this.items();
    
    order.orderItems=items.map(i=> new OrderItem(i.quantity, i.menuItem.id));
    order.value = items.map(i=> i.value()).reduce((a,b)=> a+b,0);
    console.info("salvando order: "+JSON.stringify(order));

    let orderId = null;
    this.orderService.checkOrder(order).subscribe(id => orderId=id);
    console.info(`Inseriu o pedido de numero ${orderId}`);
    this.orderService.clear();
    this.router.navigate(['/']);
  }

}
