import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { AuthEndPoints, ApiMethod } from '../../core/services/consts';
import { Observable } from 'rxjs';
import { BookModel } from '../models/BookModel';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpService) { }

  getBookByCategory(category: string): Observable<BookModel> {
    const opts = { params: new HttpParams({fromString: "_page=1&_limit=100"}) };
    return this._http.requestCall<BookModel>(`${AuthEndPoints.BOOKS}/${category}`, ApiMethod.GET, null, opts).pipe(
      map(value => Object.assign(new BookModel(), value))
    )
  }

  addBook(book: JSON,): Observable<BookModel> {
    const opts = { params: new HttpParams({fromString: "_page=1&_limit=10"}) };
    return this._http.requestCall<BookModel>(AuthEndPoints.BOOKS, ApiMethod.POST, book, opts).pipe(
      map(value => Object.assign(new BookModel(), value))
    )
  }
}
