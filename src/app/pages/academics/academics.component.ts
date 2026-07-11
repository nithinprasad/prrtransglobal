import { Component } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {

  university = 'SRM Arts & Science college';
  program = 'Logistics & Supply Chain Internship';
  duration = '3 Months';

  summary = 'Students from SRM Arts & Science college successfully completed a ' +
    'three-month internship with PRR Trans Logistics Pvt. Ltd., gaining valuable hands-on ' +
    'experience in freight forwarding and logistics operations under the guidance of our ' +
    'experienced professionals.';

  highlights: string[] = [
    'Freight coordination and shipment tracking',
    'Air and sea freight operations',
    'Customs clearance process',
    'Supply chain documentation',
    'Vendor and customer communication',
    'End-to-end logistics operations',
    'Supply chain data analysis and reporting',
    'International trade and freight forwarding practices'
  ];

  trainingAreas: string[] = [
    'Freight Forwarding',
    'Customs Clearance',
    'Supply Chain Management',
    'International Trade',
    'Import & Export Documentation',
    'Air Freight and Ocean Freight Operations',
    'Warehouse and Distribution Management'
  ];
}