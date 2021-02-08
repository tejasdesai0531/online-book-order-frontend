import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookLandingComponent } from './book-landing/book-landing.component';



@NgModule({
  declarations: [BooksComponent, BookListComponent, BookCategoriesComponent, BookLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
