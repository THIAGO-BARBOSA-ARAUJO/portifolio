import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css'],
})
export class EvaluateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  star: string = '';

  @Output() changeStar: EventEmitter<any> = new EventEmitter();

  getInputStar(value: string) {
    this.star = value;
  }

  handleClick() {
    this.changeStar.emit(this.star);
  }
}
