import { Component, OnInit } from '@angular/core';

import { categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = categories;

  constructor() { }

  ngOnInit(): void {
  }

}
