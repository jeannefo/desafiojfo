import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = `Erro ao processar serviço remoto. Tente novamente. ${errorResponse.message}`;
      console.log(errorResponse);
      console.error('Ocorreu um erro', errorResponse);
    }

    this.messageService.add({ severity: 'error', summary: 'ERRO', detail: msg });
  }
}
