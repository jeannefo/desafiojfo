import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorsHandlerService } from 'src/app/core/errors-handler.service';
import { PessoaFilter, PessoaServiceService } from '../../pessoas/pessoa-service.service';

@Component({
  selector: 'app-pessoas-pequisa',
  templateUrl: './pessoas-pequisa.component.html',
  styleUrls: ['./pessoas-pequisa.component.css']
})
export class PessoasPequisaComponent implements OnInit {

  pessoas = [];
  filtro = new PessoaFilter();
  totalRegistros = 0;

  sexos = [
    { descricao: 'Feminino', value: 'F' },
    { descricao: 'Masculino', value: 'M' },
  ];
  sexoSelecionado: any;
  @ViewChild('tabela', { static: true }) grid: Table;


  constructor(
    private pessoaService: PessoaServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorsHandlerService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;

    if (this.sexoSelecionado) {
      this.filtro.sexo = this.sexoSelecionado.value;
    }

    this.pessoaService.pesquisar(this.filtro).then(resultado => {
      this.totalRegistros = resultado.total;
      this.pessoas = resultado.pessoas;
    })
    .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    console.log(event);
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
    console.log(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja realizar a operação?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.grid.reset();
      })
      .catch(erro => this.errorHandler.handle(erro));

    this.messageService.add({ severity: 'success', summary: 'EXCLUIR PESSOA', detail: 'Pessoa excluída com sucesso' });

  }
}
