import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class SharedModule { }
