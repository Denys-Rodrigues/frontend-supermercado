import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'test-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent implements OnInit {

  constructor(private route: Router) { }

  cliente: Cliente = new Cliente;


  ngOnInit(): void {
  }

  OnSubmit() {
    console.log(this.cliente)
  }

  voltarParaLista() {
    this.route.navigate(["/clientes"]);
  }

}
