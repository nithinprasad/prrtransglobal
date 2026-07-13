import { Component } from '@angular/core';

interface Statistic {
  label: string;
  value: string;
}

interface ProgramInfo {
  university: string;
  program: string;
  duration: Statistic;
}

interface InternshipDetails {
  summary: string;
  highlights: string[];
  trainingAreas: string[];
}

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
  // Program information
  readonly programInfo: ProgramInfo = {
    university: 'SRM Arts & Science College',
    program: 'Logistics & Supply Chain Internship',
    duration: {
      label: 'Duration',
      value: '3 Months'
    }
  };

  // Internship details
  readonly internshipDetails: InternshipDetails = {
    summary: 'Over 300 students from SRM Arts & Science College and colleges across Chennai, Coimbatore, Bengaluru, and Mumbai completed a three‑month internship at PRR Trans Logistics Pvt. Ltd. Working alongside seasoned industry professionals, interns gained practical, hands‑on experience in core freight forwarding processes and end‑to‑end logistics operations.',
    highlights: [
      'Freight coordination and shipment tracking',
      'Air and sea freight operations',
      'Customs clearance process',
      'Supply chain documentation',
      'Vendor and customer communication',
      'End-to-end logistics operations',
      'Supply chain data analysis and reporting',
      'International trade and freight forwarding practices'
    ],
    trainingAreas: [
      'Freight Forwarding',
      'Customs Clearance',
      'Supply Chain Management',
      'International Trade',
      'Import & Export Documentation',
      'Air Freight and Ocean Freight Operations',
      'Warehouse and Distribution Management'
    ]
  };
}