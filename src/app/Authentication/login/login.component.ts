import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signInForm=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(),
})
constructor(private router:Router,private authSer:AuthService){}

OnSubmit(){
  this.authSer.login(this.signInForm);
}
}
