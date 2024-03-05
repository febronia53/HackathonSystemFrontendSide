import { Injectable } from "@angular/core";
import { hackathonRepository } from "./hackathon.repository";
import { Hackathon } from "./Hackathon.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class hackathonService{
    role=[];
    allHackathonsArray:Hackathon[]=[];
    goingHackathons:Hackathon[]=[];
    soonHackathons:Hackathon[]=[];
    loaded=new Subject<boolean>();
    constructor(private hackRepo:hackathonRepository){
        this.getAllHackathons();
    }
    getHackathonById(id:number){
         console.log(this.allHackathonsArray)
        return this.allHackathonsArray.find(h=>h.id);
    }
    getAllHackathons(){
       this.hackRepo.getHackathonsArray().subscribe(data=>{
        console.log(data);
        for(var hack of data){                
            this.allHackathonsArray.push(this.mapping(hack));
        }
        for(var singleHackathon of this.allHackathonsArray){
            if(singleHackathon.status=='going'){
                this.goingHackathons.push(singleHackathon);
            }else{
                this.soonHackathons.push(singleHackathon);
            }
        }
        console.log(this.goingHackathons,this.soonHackathons)
        this.loaded.next(true);
       });
    }

    mapping(responseData:any){
        const date1 = new Date(responseData.eventDate);
            const date2 = new Date( Date.now());
        var hack:Hackathon ={
                id:responseData.hackathonID,
                name:responseData.name,
                theme:responseData.theme,
                RegStartDate:responseData.registrationStartDate,
                RegEndDate:responseData.registrationEndDate,
                EventStartDate:responseData.eventDate,
                EventEndDate:null,
                maxTeamSize:responseData.maxTeamSize,
                numberOfTeams:responseData.maxTeams,
                ChallengeTitle:responseData.challengeTitles,
                teamRegisterations:responseData.teamRegisterations,
                status: date2 < date1    ? 'soon':'going'
            }
            return hack;
    }
    CreateHackathon(){}

}