import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Book } from "../book";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  @Input() stars: number;
  @Input() book: Book;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  starWidth = 0;
  maxStars = 5;

  constructor() {
    this.reCalc();
  }

  ngOnInit() {
    this.reCalc();
  }

  reCalc() {
    this.starWidth = this.stars / this.maxStars * 100;
    console.log(`recalc starWidth: ${this.starWidth}`);
  }
  clickOnStars() {
    this.notify.emit(`"${this.book.title}" was clicked!`);
  }
  add() {
    if (this.stars < this.maxStars) {this.stars++;  this.reCalc(); }
  }
  sub() {
    if (this.stars > 0) {this.stars--;  this.reCalc(); }
  }
}
