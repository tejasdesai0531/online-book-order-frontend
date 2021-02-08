import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.css']
})
export class BookCategoriesComponent implements OnInit {

  @Output() categoryChangeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  categoryChange(i) {
    this.categoryChangeEvent.emit(`category${i}`)
  }

}
