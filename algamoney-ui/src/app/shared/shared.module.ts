import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MatFormFieldModule, MatDialogModule, MatButtonModule, MatIconModule, MatSnackBarModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogComponent, AlertComponent],
  declarations: [MessageComponent, DialogComponent, AlertComponent],
  exports: [MessageComponent, DialogComponent, AlertComponent]
})
export class SharedModule { }
