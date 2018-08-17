import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatTooltipModule,
  MatTabsModule,
  MatSelectModule,
  TooltipPosition, MatButtonToggleModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosPageComponent } from './lancamentos-page/lancamentos-page.component';
import { PessoasPageComponent } from './pessoas-page/pessoas-page.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

const appRoutes: Routes = [
  {path: 'lancamentos-page', component: LancamentosPageComponent},
  {path: 'pessoas-page', component: PessoasPageComponent},
  {path: 'lancamento-cadastro', component: LancamentoCadastroComponent},
  {path: 'pessoa-cadastro', component: PessoaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    LancamentosPageComponent,
    PessoasPageComponent,
    DatepickerComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTooltipModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonToggleModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
