import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/menu/menu.component';
import { ReviewComponent } from './restaurants/review/review.component';
import { OrderComponent } from './order/order.component';
import { StatistcsComponent } from './restaurants/statistcs/statistcs.component';


export const ROUTES: Routes =[
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'order', component:OrderComponent},
    {path:'restaurants', component:RestaurantsComponent},
    {path:'restaurants/:id', component:RestaurantDetailComponent,
        children:[
            {path:'', redirectTo:'menu', pathMatch:'full'},
            {path:'menu', component:MenuComponent},
            {path:'review', component:ReviewComponent},
            {path:'statistics', component:StatistcsComponent}
        ]
    }

]