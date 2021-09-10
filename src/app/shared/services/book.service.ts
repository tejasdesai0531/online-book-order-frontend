import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { AuthEndPoints, ApiMethod } from '../../core/services/consts';
import { Observable } from 'rxjs';
import { BookList } from '../models/book-list.model';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpService) { }

  getBooksByCategory(category: string): Observable<BookList> {

    const params = new HttpParams()
                        .set('page', '1')
                        .set('limit', '100')
                        .set('category', category)

    // const opts = { params: new HttpParams({fromString: "_page=1&_limit=100"}) };
    return this._http.requestCall(`${AuthEndPoints.BOOKS}`, ApiMethod.GET, null, params).pipe(
      map(data => {
        console.log(data)
        return data
      })
    )
  }

  addBook(book: JSON,): Observable<BookList> {
    const opts = { params: new HttpParams({fromString: "_page=1&_limit=10"}) };
    return this._http.requestCall(AuthEndPoints.BOOKS, ApiMethod.POST, book, opts)
      .pipe(map(data => {
        return data
      }))
  }
}
