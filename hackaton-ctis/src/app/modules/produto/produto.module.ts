import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCrudComponent } from './components/produto-crud/produto-crud.component';
import { ProdutoPesquisaComponent } from './components/produto-pesquisa/produto-pesquisa.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutoCrudComponent, ProdutoPesquisaComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProdutoModule { }
