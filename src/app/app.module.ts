import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { BookFilterPipe } from "./books/book-list/book-list-filter.pipe";
import { RatingComponent } from "./books/rating/rating.component";
import { BookDataService } from "./books/book-data.service";
import { HttpClientModule } from "@angular/common/http";
import { ShowBookComponent } from "./books/show-book/show-book.component";
import { RouterModule } from "@angular/router";
//import {SharedModule} from './books/shared/shared.module';
const table = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {path: 'calculator', component: CalculatorComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/id/:id', component: ShowBookComponent},
  {path: 'books/title/:title', component: ShowBookComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponent,
    BookFilterPipe,
    RatingComponent,
    ShowBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //SharedModule,
    RouterModule.forRoot(table, {enableTracing: true})
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// is_my_json_valid
