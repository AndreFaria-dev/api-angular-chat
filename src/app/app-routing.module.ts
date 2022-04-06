import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';

const APP_ROUTES: Routes = [
  { path : ':meu_id',  component: DefaultComponent },
  { path : 'cliente/:id/inbox', component : MensagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
