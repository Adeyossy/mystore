import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductsListComponent,
    ProductsGridComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    FeedbackComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => null
      }
    })
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue:'NGN'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
