import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { hackathonService } from '../hackathon.service';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent {
  constructor(private hackathonService:hackathonService){}
  addHackathonform=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    theme:new FormControl(null,[Validators.required]),
    EventStartDate:new FormControl(null,[Validators.required]),
    RegisterationStartDate:new FormControl(null,[Validators.required]),
    RegisterationEndDate:new FormControl(null,[Validators.required]),
    MaximumTeamSize:new FormControl(null,[Validators.required]),
    MaximumTeams:new FormControl(null,[Validators.required]),
    ListOfChallengeTitles:new FormControl([])
  });
  onSubmit(){
    console.log(this.addHackathonform)
  
  }
}
