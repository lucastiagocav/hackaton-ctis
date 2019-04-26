import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-pesquisa',
  templateUrl: './empresa-pesquisa.component.html',
  styleUrls: ['./empresa-pesquisa.component.scss']
})
export class EmpresaPesquisaComponent implements OnInit {
  empresas = [
    {
      nomeEmpresa: 'Sonda',
      id: 1
    },
    {
      nomeEmpresa: 'CTIS',
      id: 2
    },
    {
      nomeEmpresa: 'Unifacsa',
      id: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
