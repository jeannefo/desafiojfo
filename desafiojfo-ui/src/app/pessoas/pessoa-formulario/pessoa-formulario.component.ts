import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorsHandlerService } from 'src/app/core/errors-handler.service';
import { Pessoa } from 'src/app/core/model';
import { PessoaServiceService } from '../pessoa-service.service';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css']
})
export class PessoaFormularioComponent implements OnInit {

  pessoa = new Pessoa();

  sexos = [];
  sexoSelecionado: any;

  constructor(
    private pessoaService: PessoaServiceService,
    private messageService: MessageService,
    private errorHandler: ErrorsHandlerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const codigoPessoa = this.route.snapshot.params['codigo'];
    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
    this.carregarSexos();
    console.log('Sexos: ');
    console.log(this.sexos);
  }

  carregarSexos(): void {
    this.pessoaService.buscarOpcoesSexo()
      .then(opcoes => {
        console.log('Opções: ');
        console.log(opcoes);
        this.sexos = opcoes.map(c => ({ label: c.descricao, value: c.codigo }));
        console.log(this.sexos);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get isEditando(): boolean {
    return Boolean(this.pessoa.codigo);
  }

  carregarPessoa(codigo: string): void {
    this.pessoaService.buscarPorCodigo(codigo)
      .then(p => {
        this.pessoa = p;
      }).catch(erro => this.errorHandler.handle(erro));
  }

  getValue(changedValue): void {
    this.pessoa.sexo = changedValue.value;
  }

  salvar(form: NgForm): void {

    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'CADASTRAR PESSOA', detail: 'Pessoa adicionada com sucesso' });
        this.router.navigate(['/pessoas', this.pessoa.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
