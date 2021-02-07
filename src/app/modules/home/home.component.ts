import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {

    this._bookService.getBookByCategory("Motivation").subscribe(book => {
      console.log(book)
    })

    const user:JSON = <JSON><unknown>{
      "username": "desaitejas",
      "password": "12345"
    }

    // this._bookService.addBook(user).subscribe(book => {
    //   console.log(book)
    // })

  }

}
