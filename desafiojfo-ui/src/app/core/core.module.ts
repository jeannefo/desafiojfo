import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorsHandlerService } from './errors-handler.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PessoaServiceService } from '../pessoas/pessoa-service.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent, ConfirmDialogModule, ToastModule],
  providers: [ErrorsHandlerService, MessageService, ConfirmationService, PessoaServiceService]
})
export class CoreModule { }
