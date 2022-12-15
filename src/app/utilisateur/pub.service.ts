import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pub} from "./pub";

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http: HttpClient) { }
  create(payload: pub) {
    return this.http.post<pub>('http://localhost:3000/pub', payload);
  }
  get() {
    return this.http.get<pub[]>('http://localhost:3000/pub');
  }

}
