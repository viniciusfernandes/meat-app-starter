import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService:RestaurantService) { }
  restaurants:Restaurant[]=[];
 
  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants=>this.restaurants=restaurants);
    this.restaurantService.restaurants().subscribe(restaurants=>console.info(restaurants));
    console.info("XXXXXXXXXXXXXXXXX");
  }

}
