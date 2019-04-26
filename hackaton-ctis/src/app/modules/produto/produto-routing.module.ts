import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoPesquisaComponent } from './components/produto-pesquisa/produto-pesquisa.component';
import { ProdutoCrudComponent } from './components/produto-crud/produto-crud.component';

const routes: Routes = [
  {
    path: '', component: ProdutoPesquisaComponent
  },
  { // Para Cadastrar
    path: 'cadastrar', component: ProdutoCrudComponent,
  },
  { //Para Editar
    path: 'editar/:id', component: ProdutoCrudComponent
  },
  { //Para visualizar
    path: 'visualizar/:id', component: ProdutoCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
