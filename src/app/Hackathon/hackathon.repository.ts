import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hackathon } from "./Hackathon.model";

@Injectable({providedIn:'root'})
export class hackathonRepository{
    private hackathonArray:Hackathon[]=[
        {
          id: 1,
          name: 'Hackathon 1',
          theme: 'Theme 1',
          maxTeamSize: 5,
          numberOfTeams: 10,
          status: 'going',
          EventStartDate: new Date('2024-03-01T08:00:00'),
          EventEndDate: new Date('2024-03-03T18:00:00'),
          RegStartDate: new Date('2024-02-15T12:00:00'),
          RegEndDate: new Date('2024-02-28T23:59:59'),
          ChallengeTitle: ['Challenge 1-1', 'Challenge 1-2', 'Challenge 1-3'],
          teamRegisterations:null
        },
        {
          id: 2,
          name: 'Hackathon 2',
          theme: 'Theme 2',
          maxTeamSize: 6,
          numberOfTeams: 12,
          status: 'soon',
          EventStartDate: new Date('2024-03-05T08:00:00'),
          EventEndDate: new Date('2024-03-07T18:00:00'),
          RegStartDate: new Date('2024-02-20T12:00:00'),
          RegEndDate: new Date('2024-03-01T23:59:59'),
          ChallengeTitle: ['Challenge 2-1', 'Challenge 2-2', 'Challenge 2-3'],
          teamRegisterations:null

        },
        {
          id: 3,
          name: 'Hackathon 3',
          theme: 'Theme 3',
          maxTeamSize: 5,
          numberOfTeams: 10,
          status: 'going',
          EventStartDate: new Date('2024-03-01T08:00:00'),
          EventEndDate: new Date('2024-03-03T18:00:00'),
          RegStartDate: new Date('2024-02-15T12:00:00'),
          RegEndDate: new Date('2024-02-28T23:59:59'),
          ChallengeTitle: ['Challenge 1-1', 'Challenge 1-2', 'Challenge 1-3'],
          teamRegisterations:null

        },
        {
          id: 4,
          name: 'Hackathon 4',
          theme: 'Theme 4',
          maxTeamSize: 6,
          numberOfTeams: 12,
          status: 'soon',
          EventStartDate: new Date('2024-03-05T08:00:00'),
          EventEndDate: new Date('2024-03-07T18:00:00'),
          RegStartDate: new Date('2024-02-20T12:00:00'),
          RegEndDate: new Date('2024-03-01T23:59:59'),
          ChallengeTitle: ['Challenge 2-1', 'Challenge 2-2', 'Challenge 2-3'],
          teamRegisterations:null

        },
      ];
    constructor(private httpClient:HttpClient){ }
    fetchHackathondata(){
    }
    SaveHackathonData(){

    }
    getHackathonsArray(){
        return this.httpClient.get<any[]>("https://localhost:7296/api/Hackathon")
    }

    CreateHackathon(hackathonData:any){
      //return this.httpClient.post("")
    }
}
