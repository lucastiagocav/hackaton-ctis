import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'pessoa',
    loadChildren: './modules/pessoa/pessoa.module#PessoaModule',
  },
  {
    path: 'empresa',
    loadChildren: './modules/empresa/empresa.module#EmpresaModule',
  },
  {
    path: 'produto',
    loadChildren: './modules/produto/produto.module#ProdutoModule',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
