import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaModels } from '../../models/pessoa-models';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.scss']
})
export class PessoaPesquisaComponent implements OnInit {
  pessoas : PessoaModels[];
  constructor(private service: PessoaService) { }

  ngOnInit() {

  }

  listaDePessoas(){
    this.service.get().subscribe(res => this.pessoas = res);
  }



}
