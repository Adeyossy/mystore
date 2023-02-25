export interface Order {
  id: number,
  user_id: number,
  order_status: string
}

export interface OrderProduct {
  id?: number,
  orderId: number,
  productId: number,
  quantity: number
}
