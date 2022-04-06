import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente : Cliente[];
  cliente$ : Observable<Cliente[]>;
  contatos : any;
  
  
  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();

/*     this.contatos = setInterval(() =>{
      this.listarClientes()
    }, 3000); */
  }




  listarClientes(){
    console.log('Retornar lista de clientes');
/*     this.clienteService.buscarClientes().subscribe(ctt =>this.cliente = ctt);
 */
    this.cliente$ = this.clienteService.buscarClientes();
  }
}
