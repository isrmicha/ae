import { Component, OnInit, Input } from '@angular/core';
import { ControleMetasService } from '../services/dados/controle-metas.service';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {

   retencao: number = 0;
   meta: number = 0;
   entrantes: number = 0;
   retidas: number = 0;
   derivadas: number = 0;
  
  constructor(private controleMetasService: ControleMetasService) { }

  ngOnInit() {
    this.controleMetasService.getDadosPorAplicacaoPorMesPorTipoMock()
      .subscribe((resposta: Object) => {
        let retencaoTotal = 0;
        let metaTotal = 0;
        let retidasTotal = 0;
        let derivadasTotal = 0;
        let entrantesTotal = 0;
        for ( let i=0; i<12 ; i++ ) {
          retencaoTotal += resposta['Mobilidade']['Retenção'][i];
          metaTotal += resposta['Mobilidade']['Meta'][i];
          retidasTotal += resposta['Mobilidade']['Retidas'][i];
          derivadasTotal += resposta['Mobilidade']['Derivadas'][i];
          entrantesTotal += resposta['Mobilidade']['Entrantes'][i];
        }
        this.retencao = Math.floor(retencaoTotal/12);
        this.meta = Math.floor(metaTotal/12);
        this.entrantes = Math.floor(entrantesTotal/12);
        this.retidas = Math.floor(retidasTotal/12);
        this.derivadas = Math.floor(derivadasTotal/12);

      })
  }



}
