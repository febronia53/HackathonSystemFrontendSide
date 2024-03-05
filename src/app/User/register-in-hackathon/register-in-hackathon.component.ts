import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hackathon } from 'src/app/Hackathon/Hackathon.model';
import { hackathonService } from 'src/app/Hackathon/hackathon.service';

@Component({
  selector: 'app-register-in-hackathon',
  templateUrl: './register-in-hackathon.component.html',
  styleUrls: ['./register-in-hackathon.component.scss']
})
export class RegisterInHackathonComponent {
  routeSubscription:Subscription;
  hackathon: undefined|Hackathon;
  teamMembers=new FormArray([]);
  RegisterHackathon= new FormGroup({
   teamName:new FormControl(null,[Validators.required]),
   ChallengeTitle:new FormControl(null,[Validators.required]),
   teamMembers:new FormArray([]),
 })

  constructor(private route:ActivatedRoute,private hackService:hackathonService){
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = params['id']; 
      this.hackathon=hackService.getHackathonById(id);
  });
}

onAddMember(){
  (<FormArray>this.RegisterHackathon.get('teamMembers')).push(new FormGroup({
    'id':new FormControl(),
    'name':new FormControl(),
    'title':new FormControl(),
    'Email':new FormControl(),
    'phoneNumber':new FormControl(),
  }));
  console.log(this.RegisterHackathon.value)
}
OnDeleteMember(index:number){
  (<FormArray>this.RegisterHackathon.get('teamMembers')).removeAt(index);
}

get controls() { 
  return (<FormArray>this.RegisterHackathon.get('teamMembers')).controls;
}

  onSubmit(){
    console.log(this.RegisterHackathon)
  }
  checkForTeamNumber(){
    
  }
}
