import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { AuthRepository } from "./Authentication.repository";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthService{
    user: BehaviorSubject<boolean|null> = new BehaviorSubject<boolean|null>(null);
    roles: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    registerationAdjustedForm={email:"",username:"",password:""};
    roleValue=[];
    constructor(private authRepo:AuthRepository,private router:Router){
     
      //  this.roles.next(false);
            var token=localStorage.getItem('token');
            if(token){
                this.user.next(true);
            }
            else{
                this.user.next(false);
            }

    }
    login(loginForm:FormGroup){
        this.authRepo.login(loginForm.value).subscribe(data=>{
            console.log(data.token)
            localStorage.setItem('token',data.token);
            this.roleValue=data.roles;
            if(data.roles.length>0){
                this.roles.next(true);
            }else{
                this.roles.next(false);
            }
            this.user.next(true);
            this.router.navigate(['']);

        })
    }
    register(registerForm:FormGroup){
        this.registerationAdjustedForm.email=registerForm.value.email;
        this.registerationAdjustedForm.password=registerForm.value.password;
        this.registerationAdjustedForm.username=registerForm.value.userName;
        this.authRepo.register(this.registerationAdjustedForm).subscribe(data=>{
            console.log(data.token);
            //console.log(data.token)
            localStorage.setItem('token',data.token);
            this.user.next(true);
        });
    }
    logout(){
        localStorage.removeItem('token');
        this.user.next(false);
    }
}