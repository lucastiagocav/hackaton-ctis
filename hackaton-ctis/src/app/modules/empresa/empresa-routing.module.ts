import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaPesquisaComponent } from './components/empresa-pesquisa/empresa-pesquisa.component';
import { EmpresaCrudComponent } from './components/empresa-crud/empresa-crud.component';

const routes: Routes = [
  {
    path: '', component: EmpresaPesquisaComponent
  },
  {
    path: 'cadastrar', component: EmpresaCrudComponent
  },
  { //Para Editar
    path: 'editar/:id', component: EmpresaCrudComponent
  },
  { //Para Cadastrar
    path: 'visualizar/:id', component: EmpresaCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
