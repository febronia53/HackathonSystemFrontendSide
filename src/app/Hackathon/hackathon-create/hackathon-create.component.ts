import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
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
    eventDate:new FormControl(null,[Validators.required]),
    registrationStartDate:new FormControl(null,[Validators.required]),
    registrationEndDate:new FormControl(null,[Validators.required]),
    maxTeamSize:new FormControl(null,[Validators.required]),
    maxTeams:new FormControl(null,[Validators.required]),
    challengeTitles :new FormControl([]),
    teamRegisterations:new FormControl([]),
  });
  onSubmit(){
    this.hackathonService.CreateHackathon(this.addHackathonform.value);
  }
}
