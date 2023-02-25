export interface Order {
  id: number,
  user_id: number,
  order_status: string
}

export interface OrderProduct {
  id?: number,
  order_id: number,
  product_id: number,
  quantity: number
}