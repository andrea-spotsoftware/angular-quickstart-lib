import { Component } from '@angular/core';
import { LibService } from '@op/quickstart-lib';

@Component({
  selector: 'integration-app',
  template: `
    <my-lib></my-lib>
    <h3>Meaning is: {{meaning}}</h3>
    <et-numeric-text-box></et-numeric-text-box>
  `,
})
export class AppComponent {
  meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
