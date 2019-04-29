import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { EmpresaModels } from '../../models/empresa-models';
@Component({
  selector: 'app-empresa-pesquisa',
  templateUrl: './empresa-pesquisa.component.html',
  styleUrls: ['./empresa-pesquisa.component.scss']
})
export class EmpresaPesquisaComponent implements OnInit {
  empresas : EmpresaModels[];
  constructor(private service: EmpresaService) { }

  ngOnInit() {

  }

  listarEmpresas(){
    this.service.get().subscribe(res => this.empresas = res);
  }


}
