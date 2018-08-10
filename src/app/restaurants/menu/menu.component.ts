import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  menu: Observable<MenuItem[]>
  
  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute) {

   }
  
  ngOnInit() {
    this.menu=this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
