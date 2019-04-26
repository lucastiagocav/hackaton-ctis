import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.scss']
})
export class PessoaPesquisaComponent implements OnInit {
  pessoas = [
    {
      nome: 'Lucas',
      id: 1
    },
    {
      nome: 'Douglas',
      id: 2
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
