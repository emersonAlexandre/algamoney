import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [MessageComponent, DatepickerComponent],
  exports: [MessageComponent, DatepickerComponent, MatDatepickerModule, MatNativeDateModule]
})
export class SharedModule { }
