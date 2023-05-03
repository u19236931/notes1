import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { cart } from '../models/cart';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab3Page {

  cart!: cart;

  constructor() {}

  ngOnInit()
  {
    this.cart = JSON.parse(localStorage.getItem('Cart')!);
  }

}

