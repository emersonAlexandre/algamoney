import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatChipsModule, MatDatepickerModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {NgxMaskModule} from 'ngx-mask';
import {PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';
import {PessoasPageComponent} from './pessoas-page/pessoas-page.component';
import {DatatablePessoasComponent} from './datatable-pessoas/datatable-pessoas.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [PessoaCadastroComponent, PessoasPageComponent, DatatablePessoasComponent],
  exports: [PessoaCadastroComponent, PessoasPageComponent]
})
export class PessoaModule {
}
