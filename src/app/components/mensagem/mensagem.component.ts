import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  idCliente : String;
  inscricao : Subscription;
  mensagens : Array<any> = new Array();

  //Instanciando objeto globalmente
  constructor(private mensagensService : MensagemService, private route : ActivatedRoute) {
    this.idCliente = this.route.snapshot.params['id'];
    //console.log("ROTA ID DO CLIENTE",this.idCliente);
    
  }

  ngOnInit(): void {
    

    //Alterar o parâmetro da rota
    this.inscricao = this.route.params.subscribe(
      (params : any) => {
        this.idCliente = params['id'];
        console.log("CLIENTE SELECIONADO",this.idCliente);
        this.listarMensagens(this.idCliente);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  listarMensagens(cliente: String){
    console.log('Executando o método listarMensagens', this.mensagensService);

    cliente = this.idCliente;

    


    this.mensagensService.listarMensagens(cliente).subscribe(msgs => {

      msgs.tempo_envio = new Date(msgs.tempo_envio);
  

      console.log("RESULTADO",msgs);

      /* Definindo o nome da variável para a diretiva no html */
      this.mensagens = msgs;
    });
  }

  
}
