import { Component, OnInit, Input } from '@angular/core';
import { Review } from './review.model';

import { Observable } from "rxjs/Observable";
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

    @Input() reviews:Observable<Review[]>;

  constructor(private restaurantService:RestaurantService, private route:ActivatedRoute) {

   }
  
  ngOnInit() {
    this.reviews=this.restaurantService.reviewOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
