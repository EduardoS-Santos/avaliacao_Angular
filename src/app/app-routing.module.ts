import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
