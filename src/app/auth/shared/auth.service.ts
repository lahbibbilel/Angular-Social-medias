import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignupRequestPayload } from 'src/model/singup-request-payload';
import { map, Observable } from 'rxjs';
import { LoginRequestPayload } from 'src/model/login-request-payload';
import { LoginResponsePayload } from 'src/model/login-response-payload';
//import { LocalStorageService } from 'ngx-webstorage';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  signup(siginupRequestPayload:SignupRequestPayload):Observable<any>{
   return this.signup(siginupRequestPayload);


  }
  login(loginRequestPayload:LoginRequestPayload): Observable<Boolean>{
    console.log("its work");
   return this.login(loginRequestPayload) ;
  }
    ;

}
