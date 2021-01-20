import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { categories } from '../categories';

import { products } from '../products';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  category;
  products;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = String(routeParams.get('categoryName'));

    // Find the product that correspond with the id provided in route.
    this.category = categories.find(category => category.name === categoryNameFromRoute);
    this.products = products.filter(product => product.category === categoryNameFromRoute);
  }

}
