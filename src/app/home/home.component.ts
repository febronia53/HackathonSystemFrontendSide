import { Component, OnInit } from '@angular/core';
import { hackathonService } from '../Hackathon/hackathon.service';
import { Hackathon } from '../Hackathon/Hackathon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[hackathonService]
})
export class HomeComponent {
  hackathons:Hackathon[]=[]
  isLoaded:boolean=false;
  soonHackathons:Hackathon[]=[];
  goingHackathons:Hackathon[]=[];
constructor(private hackService:hackathonService){
  this.hackathons=hackService.allHackathonsArray;
  this.soonHackathons=hackService.soonHackathons;  
  this.goingHackathons=hackService.goingHackathons;  

  console.log(this.goingHackathons);
  console.log(this.soonHackathons);
  console.log(this.hackathons);
  hackService.loaded.subscribe(flag=>{
    console.log(flag);
    this.isLoaded=flag;
  })
 
}
 



 responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

}
