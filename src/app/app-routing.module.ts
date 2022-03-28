import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DefaultComponent } from './components/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';

const APP_ROUTES: Routes = [
  { path : '',  component: DefaultComponent },
  { path : 'cliente/:id/inbox', component : MensagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
