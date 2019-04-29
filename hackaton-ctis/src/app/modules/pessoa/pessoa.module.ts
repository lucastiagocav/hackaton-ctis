import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaPesquisaComponent } from './components/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCrudComponent } from './components/pessoa-crud/pessoa-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/app/shared/shared-directives/shared-directives.module';
import { PessoaService } from './services/pessoa.service';

@NgModule({
  declarations: [PessoaPesquisaComponent, PessoaCrudComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule,
    SharedDirectivesModule
  ],
  providers : [
    PessoaService
  ]
})
export class PessoaModule { }
