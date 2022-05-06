import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimoninal',
  templateUrl: './testimoninal.component.html',
  styleUrls: ['./testimoninal.component.css']
})
export class TestimoninalComponent implements OnInit {

  public mockData:any=[
    {
      "url":"https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      "name":"Robert Garrison",
      "company": "Some Company",
      "review": "I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know."
    },
    {
      "url":"https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      "name":"Robert Garrison 2 ",
      "company": "Some Company 2",
      "review": "I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know."
    }
  ]

  public mockDataCert:any=[
    {
      "name":"Robert Garrison",
      "image": "../assets/img/prr/1.pdf",
      "desc": "Sample"
    },
    {
      "name":"Robert Garrison",
      "image": "../assets/img/prr/1.pdf",
      "desc": "Sample"
    }, {
      "name":"Robert Garrison",
      "image": "../assets/img/prr/1.pdf",
      "desc": "Sample"
    }, {
      "name":"Robert Garrison",
      "image": "../assets/img/prr/1.pdf",
      "desc": "Sample"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
