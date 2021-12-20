import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinerasFavListComponent } from './components/objetoPerdido-fav-list/objetoPerdido-fav-list.component';
import { GasolinerasListComponent } from './components/objetoPerdido-list/gasolineras-list.component';
import { ListasComponent } from './components/listas/listas.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' },
  { path: 'gasolineras', pathMatch: 'full', component: GasolinerasListComponent },
  { path: 'gasolineras-fav', pathMatch: 'full', component: GasolinerasFavListComponent }, 
  { path: 'listas', pathMatch: 'full', component: ListasComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
