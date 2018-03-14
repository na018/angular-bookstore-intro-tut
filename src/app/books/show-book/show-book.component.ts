import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../book";
import { BookDataService } from "../book-data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-show-book",
  templateUrl: "./show-book.component.html",
  styleUrls: ["./show-book.component.scss"]
})
export class ShowBookComponent implements OnInit {
  @Input() bookTitle: string;
  @Input() bookId: Number;

  book: Book;
  errorText: String;

  constructor(private _bookDataService: BookDataService, private _route: ActivatedRoute) {}

  ngOnInit() {
    if (this.bookId || this._route.snapshot.params['id']) {
      this._bookDataService.getBookById(this.bookId).subscribe(
        data => {
          this.book = data;
        },
        error => {
          this.errorText = error;
        },
        () => {
          console.log("data received");
        }
      );
    } else {
      this._bookDataService.getBook(this.bookTitle || this._route.snapshot.params['title']).subscribe(
        data => {
          this.book = data[0];
        },
        error => {
          this.errorText = error;
        },
        () => {
          console.log("data received");
        }
      );
    }
  }
}
