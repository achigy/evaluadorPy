// evaluator.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluador.component.html',
  styleUrls: ['./evaluador.component.css']
})
export class EvaluatorComponent {
  resultado: any;

  constructor(private http: HttpClient) {}

  evaluarExpresion(expresion: string) {
    this.http.post<any>('http://localhost:5000/evaluar', { expresion: expresion })
      .subscribe(data => {
        this.resultado = data.resultado || data.error;
      });
  }
}



