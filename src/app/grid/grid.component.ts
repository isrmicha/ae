import { ControleMetasService } from '../services/dados/controle-metas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  destaquesObj : Array<Object>;
  traduzMeses : Array<string>;
  aplicacoes : Array<string>;
  anoSelecionado : number;
  metaMes : any[] = [];
  Math : Math;
  mockDados : any[] = [];
  iconsHtml : Array<string>;
  tiposLabel : Array<string>;
  mockDadosRaw : Object;
  tempObject : any = Object;
  constructor(private dadosAplicacao: ControleMetasService){
    this.dadosAplicacao.getDadosPorAplicacaoPorMesPorTipoMock().subscribe((valor)=>{
      for(let aplicacao in valor){
        delete valor[aplicacao]['Derivadas'];
      }
      this.mockDados=valor;
      console.log(valor);
    });
  }
  ngOnInit() {
      this.traduzMeses = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO',
        'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
      ];
      this.aplicacoes = ['NGRPRE', 'OCT', 'OICONTROLE', 'OIPOS'];
      this.anoSelecionado = new Date().getFullYear();
      this.Math = Math;
      this.iconsHtml = ['fa fa-chevron-up', 'fa fa-caret-up', 'fa fa-caret-down'];
  }
}
// Entrantes = Retidas e derivadas 
// Retidas = finalizada+abandonadas
// Meta = random
// Retenção = retidas/entrantes*100
// Derivadas = Derivadas