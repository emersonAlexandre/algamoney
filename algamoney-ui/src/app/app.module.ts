import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosPageComponent } from './lancamento/lancamentos-page/lancamentos-page.component';
import { PessoasPageComponent } from './pessoa/pessoas-page/pessoas-page.component';
import { LancamentoCadastroComponent } from './lancamento/lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import {LancamentoModule} from './lancamento/lancamento.module';
import {PessoaModule} from './pessoa/pessoa.module';

const appRoutes: Routes = [
  {path: 'lancamentos-page', component: LancamentosPageComponent},
  {path: 'pessoas-page', component: PessoasPageComponent},
  {path: 'lancamento-cadastro', component: LancamentoCadastroComponent},
  {path: 'pessoa-cadastro', component: PessoaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    LancamentoModule,
    PessoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
