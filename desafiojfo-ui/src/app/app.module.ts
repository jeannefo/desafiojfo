import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { RouterModule, Routes } from '@angular/router';
import { PessoasPequisaComponent } from './pessoas/pessoas-pequisa/pessoas-pequisa.component';
import { PessoaFormularioComponent } from './pessoas/pessoa-formulario/pessoa-formulario.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoasPequisaComponent },
  { path: 'pessoas/novo', component: PessoaFormularioComponent },
  { path: 'pessoas/:codigo', component: PessoaFormularioComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes),
    PessoasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
