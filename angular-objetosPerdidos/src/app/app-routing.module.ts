import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ObjetoPerdidoListComponent } from './components/objetosPerdidos-list/objetosPerdidos-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' },
  { path: 'objetosPerdidos', pathMatch: 'full', component: ObjetoPerdidoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
