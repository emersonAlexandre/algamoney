import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { APP_DATE_FORMATS, AppDateAdapter } from './data.adapter';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class DatepickerComponent {
}
