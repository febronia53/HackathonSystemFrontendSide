import { Component } from '@angular/core';
import { AuthService } from '../Authentication/Authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated=false;
  role:boolean|null=false;
constructor(private authSer:AuthService,private router:Router){
  authSer.user.subscribe(res=>{
    console.log(res);
    this.isAuthenticated=<boolean>res;
  })
  authSer.roles.subscribe(res=>{
    this.role=res;
  })
}
logout(){
  this.authSer.logout();
  this.router.navigateByUrl("/login")
}

}
