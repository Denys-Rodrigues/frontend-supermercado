import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'test-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent implements OnInit {

  constructor(private route: Router, private clienteService : ClientesService) { }

  cliente: Cliente = new Cliente;


  ngOnInit(): void {
  }

  OnSubmit() {
    this.clienteService.Adicionar(this.cliente).subscribe((data) => {
      if (data > 0) {
        console.log("cliente cadastrado com sucesso!");
      }
    });
  }

  voltarParaLista() {
    this.route.navigate(["/clientes"]);
  }

}
