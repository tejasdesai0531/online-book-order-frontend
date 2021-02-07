import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
// import { HomeComponent } from './modules/home/home.component';
import { BooksComponent } from './modules/books/books.component'
import { BooksModule } from './modules/books/books.module'


const router: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'books',
        loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
