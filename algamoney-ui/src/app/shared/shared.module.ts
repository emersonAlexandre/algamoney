import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [MessageComponent, DialogComponent],
  exports: [MessageComponent]
})
export class SharedModule { }
