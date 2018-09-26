import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MatFormFieldModule, MatDialogModule, MatButtonModule, MatIconModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [DialogComponent],
  declarations: [MessageComponent, DialogComponent],
  exports: [MessageComponent, DialogComponent]
})
export class SharedModule { }
