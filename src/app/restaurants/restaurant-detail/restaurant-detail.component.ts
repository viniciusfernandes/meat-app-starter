import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private restauranteService:RestaurantService) { }
  restaurant:Restaurant;
  ngOnInit() {
    this.restauranteService.restaurantById(this.route.snapshot.params['id']).subscribe(rest=>this.restaurant=rest);
  }

}
