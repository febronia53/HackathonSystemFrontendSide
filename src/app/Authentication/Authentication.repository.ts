import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({providedIn:'root'})
export class AuthRepository{
    constructor(private httpClient:HttpClient){

    }
    
    login(loginForm:any){
        console.log(loginForm);
        return this.httpClient.post<{token:string,roles:[]}>("https://localhost:7296/api/Authentication/login",loginForm);
    }
    register(registerForm:any){
       return this.httpClient.post<{token:string}>("https://localhost:7296/api/Authentication/register",registerForm)
    }
}
