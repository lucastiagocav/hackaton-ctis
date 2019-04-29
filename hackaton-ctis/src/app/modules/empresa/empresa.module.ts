import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaCrudComponent } from './components/empresa-crud/empresa-crud.component';
import { EmpresaPesquisaComponent } from './components/empresa-pesquisa/empresa-pesquisa.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/app/shared/shared-directives/shared-directives.module';
import { EmpresaService } from './services/empresa.service';

@NgModule({
  declarations: [ EmpresaCrudComponent, EmpresaPesquisaComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedDirectivesModule
    
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }
