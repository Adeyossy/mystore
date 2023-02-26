import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabrokerService } from './databroker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  
  cartItems: any[] = [];
  unsubscribe = new Subscription();

  constructor (private databroker: DatabrokerService) {}

  ngOnInit(): void {
    // if(!this.databroker.user_id) {}
    // this.checkCartChanges();
  }

  ngDoCheck(): void {
    if (this.databroker.hasDataChanged) {
      console.log('ngDoCheck called');
      this.checkCartChanges();
      this.databroker.notifyChange(false);
    }
  }

  ngOnDestroy(): void {
      this.unsubscribe.unsubscribe();
  }

  checkCartChanges (): void {
    this.unsubscribe = this.databroker.getCart().subscribe({
      next: cart => {
        this.cartItems = cart;
      },
      error: error => console.log(`An error occurred: `, error),
      complete: () => this.unsubscribe.unsubscribe()
    });
  }

}
