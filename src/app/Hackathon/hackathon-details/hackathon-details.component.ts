import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { hackathonService } from '../hackathon.service';
import { Hackathon } from '../Hackathon.model';
import { AuthService } from 'src/app/Authentication/Authentication.service';
import { User } from 'src/app/Authentication/User.model';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.scss']
})
export class HackathonDetailsComponent implements OnDestroy{
  routeSubscription:Subscription;
  hackData:any;
  hackathon: Hackathon= {
    id: 1,
    name: 'Sample Hackathon',
    theme: 'Awesome Theme',
    maxTeamSize: 5,
    numberOfTeams: 10,
    status: 'Active',
    EventStartDate: new Date('2024-03-01T08:00:00'),
    EventEndDate: new Date('2024-03-05T18:00:00'),
    RegStartDate: new Date('2024-02-15T12:00:00'),
    RegEndDate: new Date('2024-02-28T23:59:59'),
    ChallengeTitle: ['Challenge 1', 'Challenge 2', 'Challenge 3'],
    teamRegisterations:null
  };
  events=[{date:this.hackathon.RegStartDate,name:'Registeration start'},{date:this.hackathon.RegEndDate,name:'Registration end'},{date:this.hackathon.EventStartDate,name:'Event launch'},{date:this.hackathon.EventEndDate,name:'Event end'}];
  user!:User;
//for testing only 
typeOfUser=false;

  constructor(private route: ActivatedRoute,private hackService:hackathonService,
    private authServ:AuthService){

    this.routeSubscription = this.route.params.subscribe(params => {
      const id = params['id']; 
      console.log(id);
      this.hackData=hackService.getHackathonById(id);
    });
    authServ.user.subscribe((res)=>{
    console.log(res);
    });
    authServ.roles.subscribe(roleFlag=>{
      this.typeOfUser=!roleFlag;
      console.log(this.typeOfUser)
    })

  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }


}
