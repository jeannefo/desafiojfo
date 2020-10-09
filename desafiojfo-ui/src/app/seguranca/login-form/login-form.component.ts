import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login: string;
  senha: string;

  constructor(private authService: AuthService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  autenticar(login: string, senha: string): void {

    //this.authService.autenticar(login, senha);
    this.messageService.add({ severity: 'error', summary: 'FALHA', detail: 'Autenticação ainda não está pronta' });
  }

}
