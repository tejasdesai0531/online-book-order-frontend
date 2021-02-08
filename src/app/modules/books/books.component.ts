import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public selectedCategory: string

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeCategory(event) {
    this.selectedCategory = event
    this.router.navigate(['/books', this.selectedCategory]).then(() => {
      window.location.reload();
    });
  }

}
