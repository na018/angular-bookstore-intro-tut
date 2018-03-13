import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { BookFilterPipe } from "./books/book-list/book-list-filter.pipe";
import { RatingComponent } from "./books/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponent,
    BookFilterPipe,
    RatingComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
