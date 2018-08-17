import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order/order.service';
import { Observable } from "rxjs/Observable";

import { MenuItem } from '../menu-item/menu-item.model';
import { Http } from '@angular/http';
import { Router, Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-statistcs',
  templateUrl: './statistcs.component.html',
  styleUrls: ['./statistcs.component.css']
})
export class StatistcsComponent implements OnInit {
  menuItems:Observable<MenuItem[]>;
  
  constructor(private orderService:OrderService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.menuItems=this.orderService.findStatistics(this.route.parent.snapshot.params['id']);
  }

}
