import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import {FormsModule} from "@angular/forms";
import {PubRoutingModule} from "./pub-routing.module";


@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    PubRoutingModule
  ]
})
export class PubModule { }
