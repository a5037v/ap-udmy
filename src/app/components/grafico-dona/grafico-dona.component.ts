import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() nombreGrafico: string;

  // Doughnut
  public doughnutChartLabels: string[] = [''];
  public doughnutChartData: number[] = [0];
  public doughnutChartType: string = 'doughnut';


  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data:  [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data:  [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data:  [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    },
  };

  elemHTML: any;

  constructor() { }

  ngOnInit() {
    // console.log('Nombre:1  ', this.nombreGrafico);
    // this.elemHTML = document.getElementsByName('grafico');
    return this.regresaGrafico(this.nombreGrafico);
  }

  regresaGrafico(grafico: string) {
    switch (grafico) {
      case 'grafico1':
          this.doughnutChartLabels = ['Con Frijoles', 'Con Natilla', 'Con tocino'];
          this.doughnutChartData = [24, 30, 46];
          this.doughnutChartType = 'doughnut';
          return;
      case 'grafico2':
          this.doughnutChartLabels = ['Hombres', 'Mujeres'];
          this.doughnutChartData = [4500, 6000];
          this.doughnutChartType = 'doughnut';
          return;
      case 'grafico3':
          this.doughnutChartLabels =  ['Si', 'No'];
          this.doughnutChartData = [95, 5];
          this.doughnutChartType = 'doughnut';
          return;
      case 'grafico4':
          this.doughnutChartLabels = ['No', 'Si'];
          this.doughnutChartData = [85, 15];
          this.doughnutChartType = 'doughnut';
          return;
    }
  }


}
