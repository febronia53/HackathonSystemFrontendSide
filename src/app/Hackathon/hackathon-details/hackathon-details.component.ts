import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { hackathonService } from '../hackathon.service';
import { AuthService } from 'src/app/Authentication/Authentication.service';
import { User } from 'src/app/Authentication/User.model';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.scss']
})
export class HackathonDetailsComponent implements OnDestroy,OnInit{
  routeSubscription!:Subscription;
  hackData:any;

  //events=[{date:this.hackathon.RegStartDate,name:'Registeration start'},{date:this.hackathon.RegEndDate,name:'Registration end'},{date:this.hackathon.EventStartDate,name:'Event launch'},{date:this.hackathon.EventEndDate,name:'Event end'}];
  user!:User;
  isLoaded=false;
//for testing only 
typeOfUser=false;

  constructor(private route: ActivatedRoute,private hackService:hackathonService,
    private authServ:AuthService){
      
    }

  ngOnInit(): void {
    console.log(this.hackService.allHackathonsArray)
  this.routeSubscription = this.route.params.subscribe(params => {
    const id = params['id']; 
    this.hackData=this.hackService.getHackathonById(id);
    console.log(this.hackData);
  });
  this.authServ.user.subscribe((res)=>{
  console.log(res);
  });
  this.authServ.roles.subscribe(roleFlag=>{
    this.typeOfUser=!roleFlag;
    console.log(this.typeOfUser)
  })
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }


}
 