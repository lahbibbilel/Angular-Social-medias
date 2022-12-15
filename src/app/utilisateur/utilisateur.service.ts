import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {users} from "./utilisateur";
import {pub} from "./pub";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<users[]>('http://localhost:3000/users');
  }
  create(payload: pub) {
    return this.http.post<pub>('http://localhost:3000/pub', payload);
  }
}
