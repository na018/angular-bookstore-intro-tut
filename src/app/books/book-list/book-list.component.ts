import { Component, OnInit, OnChanges } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges {

  date = new Date();
  coverIsVisible = true;
  searchValue = '';
  books: Book[] = [
    {title: 'The hero of Angular', coverUrl: '/assets/img/book-list/angular-hero.png', price: 25, rating: 4},
    {title: 'Angular Hunter 2', coverUrl: '/assets/img/book-list/angular.jpeg', price: 5, rating: 3},
    {title: 'Angular Hunter 1', coverUrl: '/assets/img/book-list/angular.jpeg', price: 15, rating: 1},
    {title: 'Majesty of Vue', coverUrl: '/assets/img/book-list/vue.jpg', price: 15, rating: 5},
  ];

  constructor() { console.log('Hello from Book-list constructor'); }

  ngOnInit() {
    console.log('Hello from Book-list ngOnInit');
  }
  ngOnChanges() {
    console.log('Hello from Book-list ngOnChanges');
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
  newRating(event) {
    console.log(event);
  }

}
