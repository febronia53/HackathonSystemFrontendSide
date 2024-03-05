import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authSer:AuthService){}
  signUpForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(),
      Confirmpassword:new FormControl(),
      userName:new FormControl()
  })

  OnSubmit(){
  console.log(this.signUpForm.value);
  this.authSer.register(this.signUpForm);
  }
}
