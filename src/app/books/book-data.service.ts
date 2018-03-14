import { Injectable } from "@angular/core";
import { Book } from "./book";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";


@Injectable()
export class BookDataService {
  constructor(private _httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
   return this._httpClient
   .get<Book[]> ('http://localhost:4200/assets/db/books.json')
   .pipe(tap(x => {console.log(x); }));
  }

  getBooksOld(): Book[] {
    return [
      {
        title: "The hero of Angular",
        coverUrl: "/assets/img/book-list/angular-hero.png",
        price: 25,
        rating: 4
      },
      {
        title: "Angular Hunter 2",
        coverUrl: "/assets/img/book-list/angular.jpeg",
        price: 5,
        rating: 3
      },
      {
        title: "Angular Hunter 1",
        coverUrl: "/assets/img/book-list/angular.jpeg",
        price: 15,
        rating: 1
      },
      {
        title: "Majesty of Vue",
        coverUrl: "/assets/img/book-list/vue.jpg",
        price: 15,
        rating: 5
      }
    ];
  }
}
