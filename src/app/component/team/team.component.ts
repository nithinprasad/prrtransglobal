import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  public mockData:any=[
    {
      
      "name":"Rajesh Kumar P R",
      "designation": "Managing Director",
      "image": "../assets/img/prr/team/rajesh.jpg",
      "email": "rajesh@prrtransglobal.com",
      "phone": "+918056233911"
    },
    {
      
      "name":"Rajani M Nair ",
      "designation": "Director Adminstration and Sales ",
      "image": "../assets/img/prr/team/rajani.jpeg",
      "email": "rajani@prrtransglobal.com",
      "phone": "+918124318717"
    },
    {
      
      "name":"B Magesh",
      "designation": "Manager Operations",
      "image": "../assets/img/prr/magesh.jpeg",
      "email": "info@prrtransglobal.com",
      "phone": "+91 9840740198"
    },
    {
      
      "name":"Harish Santhanam ",
      "designation": "Customer support ",
      "image": "../assets/img/prr/team/harish.jpeg",
      "email": "admin@prrtranaglobal.com",
      "phone": "+91 9791033392"
    },
    {
      
      "name":"Nadhiya",
      "designation": "Finance",
      "image": "../assets/img/prr/nadhiya.jpeg",
      "email": "accounts@prrtransglobal.com",
      "phone": "+91 7904058994"
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
