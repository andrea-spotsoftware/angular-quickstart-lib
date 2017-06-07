import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibComponent } from './component/lib.component';
import { NumericTextBoxComponent } from './numeric_text_box/numeric_text_box.component';
import { LibService } from './service/lib.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [LibComponent, NumericTextBoxComponent],
  providers: [LibService],
  exports: [LibComponent, NumericTextBoxComponent]
})
export class LibModule { }
