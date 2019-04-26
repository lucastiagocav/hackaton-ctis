import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaPesquisaComponent } from './components/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCrudComponent } from './components/pessoa-crud/pessoa-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaServiceService } from './service/pessoa-service.service';

@NgModule({
  declarations: [PessoaPesquisaComponent, PessoaCrudComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule
  ],
  providers : [
    PessoaServiceService
  ]
})
export class PessoaModule { }
