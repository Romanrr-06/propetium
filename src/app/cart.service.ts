// En src/app/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  clearCart() {
    this.cartItems = [];
  }
  
  cartItems: any[] = [];

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartItems() {
    return this.cartItems;
  }
}
