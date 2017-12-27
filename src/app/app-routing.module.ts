import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RelatorioComponent } from './relatorio/relatorio.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'controle-metas', component: RelatorioComponent },
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 	}
