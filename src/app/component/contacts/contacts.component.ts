import { Component, OnInit } from '@angular/core';

// Interfaces for type safety
interface ContactInfo {
  title: string;
  address: string;
  phone: string;
  email: string;
  supportPhone: string;
  officeHours: string;
}

interface CompanyInfo {
  name: string;
  tagline: string;
}

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // Company Information
  readonly companyInfo: CompanyInfo = {
    name: 'PRR Trans Logistics Pvt. Ltd.',
    tagline: 'Professional Responsible Reliable'
  };

  // Contact Information (using readonly for immutability)
  readonly contactInfo: ContactInfo = {
    title: 'Contact US',
    address: 'Old No 269/1, New No 126, Office No C2, Third Floor\nThambuchetty Street, Chennai  PIN 600 001',
    phone: '+91 44 4355 6538',
    email: 'info@prrtransglobal.com',
    supportPhone: '+91 80562 33911',
    officeHours: 'Mon-Sat: 9:30am - 6:30pm\nSun: Closed'
  };

  // Team Members (using readonly for immutability)
  readonly teamMembers: TeamMember[] = [
    {
      name: 'Rajesh Kumar P R',
      designation: 'Managing Director',
      image: '../assets/img/prr/team/r.jpg',
      email: 'rajesh@prrtransglobal.com',
      phone: '+918056233911'
    },
    {
      name: 'Rajani M Nair',
      designation: 'Director Administration and Sales',
      image: '../assets/img/prr/team/rajani.jpeg',
      email: 'rajani@prrtransglobal.com',
      phone: '+918124318717'
    },
    {
      name: 'B Magesh',
      designation: 'Manager Operations',
      image: '../assets/img/prr/team/m.png',
      email: 'info@prrtransglobal.com',
      phone: '+91 9840740198'
    },
    {
      name: 'T Anitha',
      designation: 'Manager Customer Support',
      image: '../assets/img/prr/team/harish.jpeg',
      email: 'admin@prrtransglobal.com',
      phone: '+91 9791033392'
    },
    {
      name: 'Nadhiya',
      designation: 'Manager Finance',
      image: '../assets/img/prr/team/n.png',
      email: 'accounts@prrtransglobal.com',
      phone: '+91 7904058994'
    },
    {
      name: 'Divya Lakshmi M',
      designation: 'Overseas Pricing & Logistics Coordinator',
      image: '../assets/img/prr/team/n.png',
      email: 'sales@prrtransglobal.com',
      phone: '+91 7305953391'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Component initialization logic can go here
  }

}