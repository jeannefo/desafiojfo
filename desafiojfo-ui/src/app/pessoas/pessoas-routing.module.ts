import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoasPequisaComponent } from './pessoas-pequisa/pessoas-pequisa.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoasPequisaComponent },
  { path: 'pessoas/novo', component: PessoaFormularioComponent },
  { path: 'pessoas/:codigo', component: PessoaFormularioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class PessoasRountingModule { }
