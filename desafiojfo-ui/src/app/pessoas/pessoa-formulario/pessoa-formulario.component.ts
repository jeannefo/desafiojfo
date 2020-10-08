import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorsHandlerService } from 'src/app/core/errors-handler.service';
import { Pessoa } from 'src/app/core/model';
import { PessoaServiceService } from '../pessoa-service.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css']
})
export class PessoaFormularioComponent implements OnInit {

  pessoa = new Pessoa();

  sexos: SelectItem[];
  previousVal: any;
  currentVal: any;

  constructor(
    private pessoaService: PessoaServiceService,
    private messageService: MessageService,
    private errorHandler: ErrorsHandlerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarSexos();

    const codigoPessoa = this.route.snapshot.params['codigo'];
    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
    console.log(this.pessoa);
  }

  carregarSexos(): void {
    this.sexos = [
      { label: 'Feminino', value: 'F' },
      { label: 'Masculino', value: 'M' }
    ]
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

  salvar(form: NgForm): void {
    this.pessoaService.adicionar(this.pessoa)
      .then(pessoaAdicionada => {
        this.messageService.add({ severity: 'success', summary: 'CADASTRAR PESSOA', detail: 'Pessoa adicionada com sucesso' });
        this.router.navigate(['/pessoas', pessoaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: NgForm): void {
    form.reset();
    this.pessoa = new Pessoa();
    this.router.navigate(['/pessoas/novo']);
  }

}
