import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Con la siguiente instrucción se logra resolve los valores
  // numéricos en rango de 1 al 100 de la caja de texto en el view
  // Se colocó casi al final de la sesión del curso porque se estuvo
  // trabajando con getElementByName
  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  // Las siguientes son las declaraciones de los atributos que
  // estará trabajando el componente para interacción INPUTs y OUTPUTs
  // en comunicación con Padres-Hijos
  // AL UTILIZAR el decorador @Input se activa el uso de los parámetros INPUT
  // QUE SON VALORES DE ENTRADA

  // NOTA. Las variables que se colocan dentro de los paréntesis del
  // Decorador INPUT, es como queremos que se llame la variable desde el 
  // html, esto es, en el siguiente caso, nombre es como se conocerá la
  // variable en la vista (html) pero en el componente (.component.ts) 
  // se usará el nombre leyenda

  @Input('nombre') leyenda: string = 'leyenda';
  @Input('progreso') progreso: number = 50;


  // NOTA. Las variables a continuación, son las que este componente
  // va a enviar como salida al html, se utiliza el decorador OUTPUT
  // OJO::::::::::  Se define del tipo evento Emitter y se tiene que
  //                especificar de que tipo será lo devuelto por el Emitter

  // tslint:disable-next-line: no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso constr ', this.progreso);
  }

  ngOnInit() {
    // console.log('leyenda: ', this.leyenda);
    // console.log('progreso init : ', this.progreso);
  }

  // La siguiente método se definió para poder validar dentro de la caja de texto en el html
  // que se pueda colocar solo valores númericos en rango de 1 a 100

  onChanges( newValue: number ) {

    console.log( newValue );
    console.log( this.cambioValor.emit( this.progreso ) );

    // La siguiente fue la primer práctica, usando js puro, se referenció
    // al dom y se obtuvo el valor del elemento HTML con nombre PROGRESO
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log( elemHTML.value );
    // console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    // En lugar de usar el native js, se usa el viewChild
    this.txtProgress.nativeElement.value = this.progreso;

    // se maneja el eventEmitter
    // se emite el valor núnerico que tenga progreso en el momento
    // en el que cambiamos
    this.cambioValor.emit( this.progreso );
  }


  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;

    if (this.progreso < 0) {
      this.progreso = 0;
      return;
    }

    if (this.progreso > 100) {
      this.progreso = 100;
      return;
    }
    // La siguiente sentencia indica el evento emitido por 
    // Se emite el progreso (valor numérico) que tenga en el preciso momento
    // que lo cambiamos
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }



}
