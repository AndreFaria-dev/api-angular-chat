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
    HttpClientModule
  ],
  providers: [MensagemService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
