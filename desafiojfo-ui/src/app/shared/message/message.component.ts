import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="mensagem-erro">
      {{ text }}
    </div>
  `,
  styles: [`
    .mensagem-erro {
      margin: 0;
      margin-top: 4px;
      color: red;
    }
  `]
})
export class MessageComponent  {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean{
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
