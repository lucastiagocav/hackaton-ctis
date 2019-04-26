import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-crud',
  templateUrl: './pessoa-crud.component.html',
  styleUrls: ['./pessoa-crud.component.scss']
})
export class PessoaCrudComponent implements OnInit {

  formulario: FormGroup;
  listaDePessoas: any[];
  constructor(private formBuilder: FormBuilder, private router: Router, private routeatv: ActivatedRoute) { }

  ngOnInit() {
    this.verificaOpcao();
    this.criarFormulario();
    this.apresentarView();

  }


  verificaOpcao() {
    this.routeatv.params.subscribe(params => {
      console.log(params) //log the entire params object
      //this.id = params['id'] 
    });
  }

  carregaDados() {

  }

  apresentarView() {
    if (this.router.url.indexOf('pessoa/visualizar') > -1) {
      //pessoa/visualizar/12
      this.carregaDados();
      this.formulario.disable();
    } else if (this.router.url.indexOf('pessoa/editar') > -1) {
      this.carregaDados();
    }
  }

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      cpf: [''],
      email: [''],

      rua: [''],
      bairro: [''],
      numero: [''],
      complemento: [''],
      cidade: [''],
      estado: [''],

      telefone: [''],


    })
  }
}
