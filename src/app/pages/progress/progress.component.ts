import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }
  // Se elimina de aquí ya que se puso como un módulo re-utilizable en incrementador.component
  /*
  cambiarValor(valor: number){
    if (this.progreso < 0 || this.progreso > 100) {
      this.progreso = 5;
      return;
    };
    this.progreso = this.progreso + valor;
  }
*/

// Se define el método que se estará ejecutando en la llamda al 
// decorador @Output definido en el componente (hijo) incrementador.component
// NO OBSTABTE, esta función está de más ya que se puede hacer en una sola línea
// en el html como se deja para fines reales de lapráctica de la clase

/*
actualizar( event: number){
  console.log('Evento: ', event)
  // Alternativa:
  // this.progreso1 = event;
}

*/
}
