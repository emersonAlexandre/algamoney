import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

export interface SnackBarData {
  message: string;
  type: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) { }

  icon: string;
  class: string;


  ngOnInit() {
    this.class = 'mat-icon-' + this.data.type;
    if (this.data.type === 'success') {
      this.icon = 'check';
    } else if (this.data.type === 'error') {
      this.icon = 'error_outline';
    } else if (this.data.type === 'info') {
      this.icon = 'info';
    } else {
      this.icon = 'warning';
    }
  }
}
