import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { BookList } from '../../../shared/models/book-list.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() category: string;
  public selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.selectedCategory = this.route.snapshot.paramMap.get("category")
    console.log(this.selectedCategory)
    this.getBooks()
  }

  getBooks() {
  
    this.bookService.getBooksByCategory("architecture").subscribe(
      (bookList: BookList) => {
        console.log(bookList)
      },

      (error) => {
        console.log(error)
      }
    )

  }

}
