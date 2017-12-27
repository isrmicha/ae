import { Component, OnInit, EventEmitter } from '@angular/core';
import { CabecalhoBotoesComponent } from '../cabecalho-botoes/cabecalho-botoes.component'
import { ExibicaoRelatorioService } from '../services/exibicao-relatorio.service'

@Component({
  selector: 'app-controle-metas-relatorio',
  templateUrl: './controle-metas-relatorio.component.html',
  styleUrls: ['./controle-metas-relatorio.component.css']
})
export class ControleMetasRelatorioComponent implements OnInit {

  exibeGrid:boolean = true;
   subscriptionGrid: any;

   exibeFiltroAplicacao:boolean = false;
   subscriptionFiltroAplicacao: any;

  constructor(private exibicaoRelatorio: ExibicaoRelatorioService) { }


  ngOnInit() {
  	this.subscriptionGrid = this.exibicaoRelatorio.getExibeGridChange().
  		subscribe(emitted => this.exibeGrid = emitted)

    this.subscriptionFiltroAplicacao = this.exibicaoRelatorio.getExibeFiltroAplicacoesChange().
      subscribe(emitted => this.exibeFiltroAplicacao = emitted);
  }




}
