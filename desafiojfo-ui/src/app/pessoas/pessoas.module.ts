import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoasPequisaComponent } from './pessoas-pequisa/pessoas-pequisa.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PessoasRountingModule } from './pessoas-routing.module';

@NgModule({
  declarations: [
    PessoaFormularioComponent,
    PessoasPequisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    TooltipModule,
    SelectButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    InputMaskModule,
    SharedModule,
    PessoasRountingModule
  ], exports: [
    PessoaFormularioComponent,
    PessoasPequisaComponent
  ]
})
export class PessoasModule { }
