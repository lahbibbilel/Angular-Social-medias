import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";

const routes: Routes = [
  {
    path: 'users/page-accueil',
    component: PageAccueilComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
