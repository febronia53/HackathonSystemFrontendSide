export interface Hackathon{
        id:number,
        name:string,
        theme:string,
        maxTeamSize:number,
        numberOfTeams:number,
        status:string,
        EventStartDate:Date,
        EventEndDate:null|Date,
        RegStartDate:Date,
        RegEndDate:Date,
        ChallengeTitle:string[],
        teamRegisterations:null | [{
                id:string,
                name:string,
                position:string,
                PhoneNumber:number,
                email:string
        }]
        
}
// {    "hackathonID": 1,    "name": "AI Experience",    
// "theme": "AI",    
// "registrationStartDate": "2024-03-02T15:18:23.445",    "registrationEndDate": "2024-03-02T15:18:23.445", 
//    "eventDate": "2024-03-02T15:18:23.445",
//        "maxTeamSize": 5,    "maxTeams": 22,
//            "challengeTitles": [      {        "challengeTitleId": 1,        "title": "AIiii"      }    ],  
//              "teamRegisterations": []
//   }