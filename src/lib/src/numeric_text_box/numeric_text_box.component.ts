import { Component, OnInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';
// import * as Inputmask from 'inputmask';
import Inputmask from 'inputmask/dist/inputmask/inputmask.numeric.extensions';

@Component({
  selector: 'et-numeric-text-box',
  templateUrl: './numeric_text_box.html'
})
export class NumericTextBoxComponent implements OnInit {

  @Input() value: number;

  @ViewChild('inputmask') inputmask: ElementRef;

  ngOnInit() {

    let mask = new Inputmask({
      'alias': 'numeric',
      'allowMinus': true,
      'allowPlus': false,
      'unmaskAsNumber': true,
      'radixPoint': ',',
      'groupSeparator': '.',
      'autoGroup': true,
      'showMaskOnHover': false,
      'digits': 4,
      'digitsOptional': false,
      'prefix': '',
      'clearMaskOnLostFocus': false,
      'placeholder': '0',
      'integerDigits': 4,
      'integerOptional': true,
      'nullable': false,
      'positionCaretOnClick': 'none',
      'rightAlign': false
    });

    mask.mask(this.input);

  }

  protected get input(): HTMLInputElement {
    return this.inputmask.nativeElement;
  }

}
