import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { HackathonCreateComponent } from './Hackathon/hackathon-create/hackathon-create.component';
import { HackathonDetailsComponent } from './Hackathon/hackathon-details/hackathon-details.component';
import { RegisterInHackathonComponent } from './User/register-in-hackathon/register-in-hackathon.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component:HomeComponent},
  {path:'createHackathon',component:HackathonCreateComponent},
  {path:'registerToHackathon/:id',component:RegisterInHackathonComponent},
  {path:'hackathon/:id',component:HackathonDetailsComponent},
  { path: 'login', component:LoginComponent  },
  { path: 'register', component:RegisterComponent  },
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
