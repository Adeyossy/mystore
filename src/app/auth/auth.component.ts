import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartService } from '../cart.service';
import { DatabrokerService } from '../databroker.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private databroker: DatabrokerService,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  performAuth(): void {
    this.databroker.login(this.user).subscribe({
      next: token => this.authLogic(token),
      error: err => {
        console.log(`Error on logging in => ${err}`);
        this.databroker.signup(this.user).subscribe({
          next: token => this.authLogic(token)
        });
      }
    });
  }

  authLogic(token: string): void {
    this.databroker.token = token.toString();
    this.databroker.setTokenInAuthorization(token);
    console.log('token => ', token.toString());
    this.databroker.user_id = this.jwtHelper.decodeToken(token.toString()).id;
    console.log('user_id => ', this.databroker.user_id);
    this.cartService.initCart();
    this.databroker.notifyChange(true);
    this.router.navigateByUrl('/products');
  }
}
