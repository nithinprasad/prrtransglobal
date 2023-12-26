import { Component, OnInit } from '@angular/core';
import { DataSupplyService } from 'src/app/data-supply.service';

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

  public mockDataCert: any = [
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/3.png",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/4.jpg",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/5.png",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/6.png",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/8.jpeg",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/9.jpg",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/10.png",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/11.png",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/1.pdf",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/2.pdf",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/3.pdf",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/4.pdf",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/5.pdf",
    },
    {
      "title": "3 PMG",
      "src": "../../../assets/img/prr/cert/6.pdf",
    }
  ]

  constructor(public dataService:DataSupplyService) { }

  ngOnInit(): void {
  }

   selectedItemId: number | null = null;

  openModal(itemId: number): void {
    this.selectedItemId = itemId;
  }

  closeModal(): void {
    this.selectedItemId = null;
  }

}
