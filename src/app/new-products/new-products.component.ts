import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  // Instruction to be corrected
  products = products.filter(p => (((p.availabilityDate).valueOf()) - ((new Date()).valueOf()) < 0));

  constructor() { }

  ngOnInit(): void {
  }

}
