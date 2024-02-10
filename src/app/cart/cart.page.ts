// cart.page.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  constructor(public cartService: CartService) {
    console.log('Elementos en el carrito:', this.cartService.getCartItems());
  }

  ngOnInit() {}

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  calcularPresupuesto(precio: string): string {
    const precioNumerico = parseFloat(precio.replace('$', '').replace(',', ''));
    const presupuesto = precioNumerico * 1.1;
    return `$${presupuesto.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  calcularPresupuestoTotal(): string {
    const total = this.cartService.cartItems.reduce((sum, item) => {
      const precioNumerico = parseFloat(item.precio.replace('$', '').replace(',', ''));
      return sum + precioNumerico;
    }, 0);

    const presupuestoTotal = total * 1.1;
    return `$${presupuestoTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  compararItems() {
    // Aquí puedes agregar la lógica para la comparación de ítems
    console.log('Comparando ítems en el carrito');

    // Limpiar el carrito después de comparar
    this.cartService.clearCart();
  }

}
