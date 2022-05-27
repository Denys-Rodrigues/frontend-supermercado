import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-lst-clientes',
  templateUrl: './lst-clientes.component.html',
  styleUrls: ['./lst-clientes.component.css']
})
export class LstClientesComponent implements OnInit {

  constructor(private route: Router, private clienteService: ClientesService) { }

  clientes!: Cliente[];

  cadastrarCliente() {
    this.route.navigate(["/cliente"]);
  }

  ngOnInit(): void {
    this.obterTodos();
  }

  obterTodos(){
    this.clienteService.ObterTodos().subscribe(
    data =>{
      this.clientes = data;
    }
  )}

}
