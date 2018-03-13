import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  number_1: number;
  number_2: number;
  result: number;

  constructor() {}

  ngOnInit() {}

  addNumbers() {
    this.result = this.number_1 + this.number_2;
  }
  subNumbers() {
    this.result = this.number_1 - this.number_2;
  }
  reset() {
    this.number_1 = null;
    this.number_2 = null;
    this.result = null;
  }
}
