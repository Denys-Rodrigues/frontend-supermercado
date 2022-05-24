import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lst-clientes',
  templateUrl: './lst-clientes.component.html',
  styleUrls: ['./lst-clientes.component.css']
})
export class LstClientesComponent implements OnInit {

  constructor(private route: Router) { }

  Cliente = [
    {
      id: 1,
      nome: 'Alfredo',
      telefone: '16 994011665',
      email: "alfredo22@gmail.com",
      documento: "1234567890",
      dataNascimento: "30/04/2000",
      uf: "SP",
      cidade: "Ribeirao preto",
      bairro: "Jardim Botânico",
      logradouro: "Rua logo ali",
      numero: "32",
      cep: "1404891102",
      complemento: "Casa"
    },

    {
      id: 2,
      nome: 'Neto',
      telefone: '16 993175789',
      email: "neto22@gmail.com",
      documento: "52975648560",
      dataNascimento: "20/02/2001",
      uf: "GO",
      cidade: "Caldas Novas",
      bairro: "Centro",
      logradouro: "Caldas Quentes",
      numero: "87",
      cep: "1405264802",
      complemento: "Apartamento"
    },
    {
      id: 3,
      nome: 'Alemão',
      telefone: '16 993541054',
      email: "alemao22@gmail.com",
      documento: "52614547960",
      dataNascimento: "31/12/1975",
      uf: "DF",
      cidade: "Brasília",
      bairro: "Planalto Branco",
      logradouro: "Rua Tudo Nosso",
      numero: "314",
      cep: "1953125453",
      complemento: "Mansão"
    }
  ]


  cadastrarCliente() {
    this.route.navigate(["/cliente"]);
  }

  ngOnInit(): void {
  }

}
