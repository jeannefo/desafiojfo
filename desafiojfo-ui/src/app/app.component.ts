

class Pessoa{
  nome: string;
  email: string;
  sexo: string;
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sexos = [{codigo: 'F', descricao:'Feminino'}, {codigo: 'M', descricao: 'Masculino'}];
  pessoa: Pessoa = new Pessoa();

  salvar(form: NgForm){
    console.log('Salvando...');

    console.log('Nome: ' + form.value.nome);
    console.log('E-mail: ' + form.value.email);
    console.log('Sexo: ' + form.value.sexo);

    console.log(this.pessoa);
    form.reset();
  }
}
