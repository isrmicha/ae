
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ControleMetasRelatorioComponent } from './controle-metas-relatorio/controle-metas-relatorio.component';
import { CabecalhoBotoesComponent } from './cabecalho-botoes/cabecalho-botoes.component';
import { ExibicaoRelatorioService } from './services/exibicao-relatorio.service';
import { DestaquesComponent } from './destaques/destaques.component';
import { GridComponent } from './grid/grid.component';
import { ControleMetasService } from './services/dados/controle-metas.service';
import { GraficoComponent } from './grafico/grafico.component';
import { FiltroAplicacoesComponent } from './filtro-aplicacoes/filtro-aplicacoes.component';
import { AppRoutingModule } from './/app-routing.module';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ControleMetasRelatorioComponent,
    CabecalhoBotoesComponent,
    DestaquesComponent,
    GridComponent,
    GraficoComponent,
    FiltroAplicacoesComponent,
    RelatorioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CabecalhoBotoesComponent,
    ExibicaoRelatorioService,
    ControleMetasService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
