import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { IniciarSessioRubioComponent } from "./pages/iniciar-sessio-rubio/iniciar-sessio-rubio.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'isessiorubio'
  },
  {
    path: 'isessiorubio',
    component: IniciarSessioRubioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
