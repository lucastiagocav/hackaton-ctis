import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.scss']
})
export class ProdutoCrudComponent implements OnInit {

  formularioProduto: FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder, private router: Router, private routeatv: ActivatedRoute) { }

  ngOnInit() {

    this.verificaOpcao();
    this.criarFormulario();
    this.apresentarView();


  }
  criarFormulario(){

    this.formularioProduto = this.formBuilder.group({
      nome : [''],
      preco : [''],
      dataFabricacao : [''],
      categoria: ['']
      })
  }

  verificaOpcao(){
    this.routeatv.params.subscribe(params => {
      console.log(params) //log the entire params object
      //this.id = params['id'] 
    });
  }

  carregaDados(){

  }

  apresentarView(){
    if( this.router.url.indexOf('produto/visualizar') > -1){
      this.carregaDados();
      this.formularioProduto.disable();
    } else if ( this.router.url.indexOf('produto/editar') > -1){
      this.formularioProduto.enable();
      this.carregaDados();
    }
  }

}
