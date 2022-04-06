import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MensagemService } from './services/mensagem.service';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteService } from './services/cliente.service';
import { DefaultComponent } from './components/default/default.component';
// ... other imports
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://mensseger.eox.com.br/messenger/clientes', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    MensagemComponent,
    ClienteComponent,
    LoginComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [MensagemService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
