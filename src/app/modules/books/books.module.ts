import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [BooksComponent, BookListComponent, BookCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
