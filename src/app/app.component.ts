import { Component } from "@angular/core";
//component is a decorator whit meta data info
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "the crazy & awesome book store";
  visitedItem = '';
  visited(item) {
    this.visitedItem = item;
  }
}
