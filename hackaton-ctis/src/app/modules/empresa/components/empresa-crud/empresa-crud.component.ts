import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-empresa-crud',
  templateUrl: './empresa-crud.component.html',
  styleUrls: ['./empresa-crud.component.scss']
})
export class EmpresaCrudComponent implements OnInit {
  formulario: FormGroup;
  endereco: FormGroup;
  telefone: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private routeatv: ActivatedRoute) { }

  ngOnInit() {
    this.verificarOpcao();
    this.criarFormulario();
    this.apresentarView();
  }

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      //Entidade Empresa
      razaoSocial: [''],
      nomeFantasia: [''],
      email: [''],
      cnpj: [''],
      //Endereço
      rua: [''],
      bairro: [''],
      numero: [''],
      complemento: [''],
      cidade: [''],
      estado: [''],
      //Entidade Telefone
      telefoneEmpresa: ['']
    })


  }
  verificarOpcao() {
    this.routeatv.params.subscribe(params => {
      console.log(params) //log the entire params object
      //this.id = params['id'] 
    });

  }
  carregarDados() {

  }

  addEmpresa() {
  }
  apresentarView() {
    if (this.router.url.indexOf('empresa/visualizar') > -1) {
      this.carregarDados();
      this.formulario.disable();
    } else if (this.router.url.indexOf('empresa/editar') > -1) {
      this.formulario.enable();
      this.carregarDados();
    }
  }
}
