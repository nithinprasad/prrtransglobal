import { Component } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {

  internshipDetails = {
    university: 'SRM Institute of Science and Technology',
    program: 'Logistics & Supply Chain Internship',
    duration: '3 months',
    focusAreas: [
      'Freight coordination and shipment tracking',
      'Supply chain data analysis and reporting',
      'Vendor and client communication',
      'End-to-end logistics operations exposure'
    ],
    summary: 'Students from SRM Institute of Science and Technology completed a hands-on ' +
      'internship with PRR Trans Global, gaining direct exposure to real-world freight ' +
      'and logistics operations under the guidance of our operations team.'
  };
}