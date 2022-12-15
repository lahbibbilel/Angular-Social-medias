import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../utilisateur.service";
import {users} from "../utilisateur";
import {Router} from "@angular/router";
import {pub} from "../pub";
import {PubService} from "../pub.service";

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService ,private pubService: PubService,
              private router:Router ) { }
  allUsers: users[] = [];
  allpub: pub[] =[];
  pubForm: pub = {
    id: 0,
    content: '',
    subject: '',
    destTo: '',
  };


    ngOnInit(): void {
      this.get();
    this.getP();
    }

  getP() {
    this.pubService.get()
      .subscribe((data) => {
        this.allpub = data;
      });
  }


    get() {
      this.utilisateurService.get().subscribe((data) => {
        this.allUsers = data;
      });
    }
  create(){
    this.utilisateurService.create(this.pubForm)
      .subscribe({
        next:(data) => {
          alert('envoyer')
        },
        error:(err) => {
          console.log(err);
        }
      })
  }

}


