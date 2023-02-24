import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductsListComponent,
    ProductsGridComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue:'NGN'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
