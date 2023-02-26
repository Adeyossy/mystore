# Mystore
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Features and Functionalities
- Sign up/login UI
- Data source is from backend
- Products list view
- Products detail view
- Cart
- Checkout
- Order Confirmation
- Uses routing

## Development server
Run `npm install` to install dependencies, then `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend Data
Clone the GitHub repository at https://github.com/Adeyossy/storefront_backend then run `npm install` and `yarn watch` to spin up the server.
Create a `storefront` database in postgresql and run `db-migrate up`. Then populate `products` table with: `INSERT INTO products (name, price, category) VALUES ('Sandwich', 299.99, 'Food'), ('Fries', 499.99, 'Food'), ('Jollof Rice with Chicken', 999.99, 'Food'), ('Chocolate', 299.99, 'Beverage'), ('Coffee', 299.99, 'Beverage'), ('Soy Milk', 299.99, 'Beverage'), ('Juice', 299.99, 'Beverage');`.
This gets the pictures showing correctly.
