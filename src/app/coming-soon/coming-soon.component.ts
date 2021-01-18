import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  // Instruction to be corrected
  products = products.filter(p => (((p.availabilityDate).valueOf()) - ((new Date()).valueOf()) > 0));

  constructor() { }

  ngOnInit(): void {
  }

}
