import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaPesquisaComponent } from './components/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCrudComponent } from './components/pessoa-crud/pessoa-crud.component';

const routes: Routes = [
  {
    path: '', component: PessoaPesquisaComponent
  },
  //ESSE VAI CADASTRAR
  {
    path: 'cadastrar', component: PessoaCrudComponent
  },
  // ESSE VAI EDITAR
  {
    path: 'editar/:id', component: PessoaCrudComponent
  },
  // ESSE VAI VISUALIZAR
  {
    path: 'visualizar/:id', component: PessoaCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
