import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumericTextBoxComponent } from './numeric_text_box.component';

describe('LibComponent', function () {
  let de: DebugElement;
  let comp: NumericTextBoxComponent;
  let fixture: ComponentFixture<NumericTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NumericTextBoxComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericTextBoxComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('input'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected input type', () => {
    fixture.detectChanges();
    const input = de.nativeElement;
    expect(input.type).toEqual('tel',
      '<input> should be type "tel"');
  });

  it('input value should be properly formatted', () => {
    fixture.detectChanges();
    const input = de.nativeElement as HTMLInputElement;
    expect(input.value).toEqual('0,0000');
  });
  
  it('input value should be properly formatted when model value is 9999', fakeAsync(() => {
    comp.value = 9999;
    fixture.detectChanges();
    tick();
    const input = de.nativeElement as HTMLInputElement;
    expect(input.value).toEqual('9.999,0000');
  }));
});
