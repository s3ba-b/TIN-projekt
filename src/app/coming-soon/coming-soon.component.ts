import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  products;
  now = new Date();

  constructor() { }

  ngOnInit(): void {
    this.products = products.filter(p => p.availabilityDate.getDate() > this.now.getDate()).slice(0, 3);
  }

}
