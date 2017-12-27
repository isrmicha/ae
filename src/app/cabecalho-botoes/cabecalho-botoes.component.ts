import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ExibicaoRelatorioService } from '../services/exibicao-relatorio.service'

@Component({
  selector: 'app-cabecalho-botoes',
  templateUrl: './cabecalho-botoes.component.html',
  styleUrls: ['./cabecalho-botoes.component.css']
})
export class CabecalhoBotoesComponent implements OnInit {

  constructor(private exibicaoRelatorioService: ExibicaoRelatorioService) { }

  ngOnInit() {
  }


  alternaVisaoGrid(): void {
  	this.exibicaoRelatorioService.alternaExibicaoGrid();
  }

  alternaFiltroRelatorio(): void{
  	this.exibicaoRelatorioService.alternaExibicaoFiltroAplicacoes();
  }

}
