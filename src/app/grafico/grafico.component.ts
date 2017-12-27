import { ControleMetasService } from './../services/dados/controle-metas.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import Chart from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: []
})
export class GraficoComponent implements OnInit {
  @ViewChild('canvasGrafico') canvasGrafico: ElementRef;
  @Input() grupo = '';
   dadosTotais
   dadosSeparadosPorGrupo
   totaisPorMes
   chart = []
   grupoNome: string

  constructor(private controleMetasService: ControleMetasService) { }

  ngOnInit() {

    // let retornaNomeGrupo = () => {
    //   switch(this.grupo) {
    //     case 'mobilidade': return 'MOBILIDADE'
    //     case 'pre': return 'PRÉ-PAGO'
    //     case 'pos': return 'Pós'
    //     case 'controle': return 'Controle'
    //     case 'oct': return 'OCT' 
    //     case 'oiTotal': return 'Oi Total' 
    //     case 'fixoEVelox': return 'Fixo e Velox' 
    //     case 'oiTv': return 'Oi TV' 
    //     case 'empresarial': return 'Empresarial' 
    //     case 'ussdPre': return 'USSD Pré' 
    //     case 'ussdControle': return 'USSD Controle' 
    //     case 'ussdPos': return 'USSD Pós' 
    //     case 'pre880': return '*880 Pré' 
    //     case 'controle880': return '*880 Controle'
    //   }
    // }

    // this.grupoNome = retornaNomeGrupo();

    let canvasGraficoCtx = this.canvasGrafico.nativeElement.getContext('2d');
    console.log('grupo',this.grupo)
    this.controleMetasService.getDadosAplicacaoMock()
      .subscribe((resposta: Array<Object>) => {
        this.dadosTotais = resposta;
    })

    this.controleMetasService.getDadosPorAplicacaoPorMesPorTipoMock()
      .subscribe ((resposta:any) => {
        this.dadosSeparadosPorGrupo = resposta;
    })



    // this.dadosSeparadosPorGrupo = this.controleMetasService.dadosSeparadosPorGrupo(this.dadosTotais);

    // this.totaisPorMes = this.controleMetasService.totaisPorMes(this.dadosSeparadosPorGrupo,this.grupo)

    this.chart = new Chart(canvasGraficoCtx, {
      type: 'bar',
      data: {
        labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        datasets: [
          {
            type: "line",
            label: "Retenção",
            backgroundColor: "#6D3552",
            borderColor: "#6D3552",
            data: this.dadosSeparadosPorGrupo[this.grupo].Retenção,
            yAxisID: 'y-axis-2',
            fill: false,
            lineTension: 0
          }, {
            type: "line",
            label: "Meta",
            backgroundColor: "#619292",
            borderColor: "#619292",
            data: this.dadosSeparadosPorGrupo[this.grupo].Meta,
            yAxisID: 'y-axis-2',
            fill: false,
            borderDash: [10,5],
            lineTension: 0
          }, {
            type: 'bar',
            label: 'Entrantes',
            backgroundColor: '#A22AFF',
            data: this.dadosSeparadosPorGrupo[this.grupo].Entrantes,
            yAxisID: 'y-axis-1'
          }, {
            type: 'bar',
            label: 'Retidas',
            backgroundColor: '#F67006',
            data: this.dadosSeparadosPorGrupo[this.grupo].Retidas,
            yAxisID: 'y-axis-1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: { mode: 'label' },
        elements: {
          line: { fill: true }
        },
        legend: {
          // display: false,
          labels: {
            boxWidth: 5,
            usePointStyle: true
          }
        },
        showAllToolTips: true,
        scales: {
          xAxes: [
            {
              barPercentage: 1.0,
              categoryPercentage: 0.6,
              gridLines: { display: false }
            }
          ],
          yAxes: [
            {
              position: "left",
              id: "y-axis-1",
              gridLines: { display: true },
              labels: { show: true, }
            }, {
              position: "right",
              id: "y-axis-2",
              gridLines: { display: false },
              labels: { show: true },
              ticks: { 
                beginAtZero:true,
                steps: 10,
                max: 100
              }
            }
          ]
        }
      }
    });
  }
}