import { Injectable } from '@angular/core';
import { Book } from './book'

@Injectable()
export class BookDataService {

  constructor() { }

  getBooks(): Book[] {
    return [
      {title: 'The hero of Angular', coverUrl: '/assets/img/book-list/angular-hero.png', price: 25, rating: 4},
      {title: 'Angular Hunter 2', coverUrl: '/assets/img/book-list/angular.jpeg', price: 5, rating: 3},
      {title: 'Angular Hunter 1', coverUrl: '/assets/img/book-list/angular.jpeg', price: 15, rating: 1},
      {title: 'Majesty of Vue', coverUrl: '/assets/img/book-list/vue.jpg', price: 15, rating: 5},
    ];
  }

}
