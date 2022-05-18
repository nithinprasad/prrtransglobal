import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mockData:any=[
    {
      
      "name":"Rajesh Kumar P R",
      "designation": "Managing Director",
      "image": "../assets/img/prr/team/r.jpg",
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
      "image": "../assets/img/prr/team/m.png",
      "email": "info@prrtransglobal.com",
      "phone": "+91 9840740198"
    },
    {
      
      "name":"Harish Santhanam ",
      "designation": "Manager Customer support ",
      "image": "../assets/img/prr/team/harish.jpeg",
      "email": "admin@prrtransglobal.com",
      "phone": "+91 9791033392"
    },
    {
      
      "name":"Nadhiya",
      "designation": "Manager Finance",
      "image": "../assets/img/prr/team/n.png",
      "email": "accounts@prrtransglobal.com",
      "phone": "+91 7904058994"
    }
    
  ]

}
