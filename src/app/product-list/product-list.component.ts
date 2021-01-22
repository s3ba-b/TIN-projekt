import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;

  constructor() { }

  shuffle(array): typeof array {
    let i;
    let j;
    let temp;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  ngOnInit(): void {
    this.products = this.shuffle(products).slice(0, 9);
  }

}
