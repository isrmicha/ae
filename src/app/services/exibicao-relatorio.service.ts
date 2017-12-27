import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ExibicaoRelatorioService {
  
  private exibeGrid:boolean = true;
  private exibeGridChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private exibeFiltroAplicacoes:boolean = false;
  private exibeFiltroAplicacoesChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  alternaExibicaoGrid():void {
  	this.exibeGrid = !this.exibeGrid;
  	this.exibeGridChange.emit(this.exibeGrid);
  }

  getExibeGridChange(): EventEmitter<boolean>{
  	return this.exibeGridChange;
  }

  alternaExibicaoFiltroAplicacoes():void {
    this.exibeFiltroAplicacoes = !this.exibeFiltroAplicacoes;
    this.exibeFiltroAplicacoesChange.emit(this.exibeFiltroAplicacoes);
  }

  getExibeFiltroAplicacoesChange(): EventEmitter<boolean>{
    return this.exibeFiltroAplicacoesChange;
  }

}
