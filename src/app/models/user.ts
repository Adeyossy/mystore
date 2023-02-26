export interface User {
  firstname: string;
  lastname: string;
  address: string;
  username?: string;
}

export interface Card{
  cardname: string;
  cardnumber: number;
  expiry: string;
  cvv: number;
}