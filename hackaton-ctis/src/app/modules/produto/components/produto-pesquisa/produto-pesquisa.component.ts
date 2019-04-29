import { Component, OnInit } from '@angular/core';
import { ProdutoModels } from '../../models/produto-models';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.scss']
})
export class ProdutoPesquisaComponent implements OnInit {
  produtos : ProdutoModels[];
  constructor(private service : ProdutoService) { }

  ngOnInit() {

  }

  listarProdutos(){
    this.service.get().subscribe(res => this.produtos = res);
  }
}
