import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatChipsModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {NgxMaskModule} from 'ngx-mask';
import {LancamentosPageComponent} from './lancamentos-page/lancamentos-page.component';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {DatatableLancamentosComponent} from './datatable-lancamentos/datatable-lancamentos.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [LancamentosPageComponent, LancamentoCadastroComponent, DatatableLancamentosComponent],
  exports: [LancamentosPageComponent, LancamentoCadastroComponent]
})
export class LancamentoModule { }
