import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente : Array<any> = new Array();

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    console.log('Retornar lista de clientes');
    this.clienteService.buscarClientes().subscribe(ctt =>{

      console.log(ctt);
      
      this.cliente = ctt;
      
    });
  }
}
