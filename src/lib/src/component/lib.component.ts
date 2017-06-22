import { Component, OnInit } from '@angular/core';
import answer from 'the-answer';

@Component({
  selector: 'my-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent implements OnInit {
  result = 0;
  name = 'Angular Library';

  ngOnInit(): void {
    this.result = answer;
  }
}
