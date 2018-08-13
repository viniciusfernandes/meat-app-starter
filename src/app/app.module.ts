import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuItemComponent } from './restaurants/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurants/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurants/menu/menu.component';
import { ReviewComponent } from './restaurants/review/review.component';
import { ShoppingCart } from './restaurants/shopping-cart/shopping-cart.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantsComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    MenuComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService, ShoppingCart],
  bootstrap: [AppComponent]
})
export class AppModule { }
