import { Component, OnInit, OnChanges } from "@angular/core";
import { Book } from "../book";
import { BookDataService } from "../book-data.service";

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

  constructor(private _bookDataService: BookDataService) {
    console.log("Hello from Book-list constructor");
  }

  ngOnInit() {
    console.log("Hello from Book-list ngOnInit");
    this.books = this._bookDataService.getBooks();
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
}
