import { Component, OnInit, OnChanges } from "@angular/core";
import { Book } from "../book";
import { BookDataService } from "../book-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnChanges {
  date = new Date();
  coverIsVisible = true;
  searchValue = "";
  books: Book[];
  errorText: String;

  constructor(private _bookDataService: BookDataService,
    private _router: Router) {
    console.log("Hello from Book-list constructor");
  }

  ngOnInit() {
    console.log("Hello from Book-list ngOnInit");
   // this.books = this._bookDataService.getBooks();
   this._bookDataService.getBooks().subscribe(
     data => {
     this.books = data;
   }, error => {
     this.errorText = error;
   }, () => {console.log('data received'); });
  }
  ngOnChanges() {
    console.log("Hello from Book-list ngOnChanges");
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
  newRating(event) {
    console.log(event);
  }
  changeBook(title) {
    this._router.navigate(['/books/title', title]);
  }
}
