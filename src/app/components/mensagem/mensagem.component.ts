import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  idCliente : String;
  idAtendente : String;
  inscricao : Subscription;
  mensagens : Array<any> = new Array();
  //mensagem : Mensagem[];
  mensagem$ : Observable <any>;

  msgs : any;

  //Instanciando objeto globalmente
  constructor(private mensagensService : MensagemService, private route : ActivatedRoute) {
    this.idCliente = this.route.snapshot.params['id'];
    console.log("ROTA ID DO CLIENTE",this.idCliente, this.route.snapshot.params);
    
  }

  ngOnInit(): void {
    

    //Alterar o parâmetro da rota
    this.inscricao = this.route.params.subscribe(
      (params : any) => {
        this.idCliente = params['id'];
        this.idAtendente = params['atendente_id'];
        console.log("CLIENTE SELECIONADO",this.idCliente, this.idAtendente);

        this.msgs = setInterval(()=>{
          this.listarMensagens(this.idCliente, this.idAtendente);
        }, 1000);

        

        
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  listarMensagens(cliente: String, atendente : String){
    console.log('Executando o método listarMensagens', this.mensagensService);

    cliente = this.idCliente;

    atendente = this.idAtendente;

    this.mensagensService.buscarCaixaEntrada(cliente,atendente).subscribe(msgs => {

      
  

      console.log("RESULTADO",msgs);

      
      

      /* Definindo o nome da variável para a diretiva no html */
      this.mensagens = msgs;

      console.log('TIMESTAMP', msgs.tempo_envio);
    });
  }

  
}
