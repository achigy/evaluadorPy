// ui.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  expresion: string = '';

  @Output() expresionEvaluada = new EventEmitter<string>();

  evaluarExpresion() {
    this.expresionEvaluada.emit(this.expresion);
  }
}

