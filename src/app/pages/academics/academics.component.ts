import { Component } from '@angular/core';
 
interface InternshipRole {
  title: string;
  department: string;
  duration: string;
  location: string;
  description: string;
}
 
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
 
  openRoles: InternshipRole[] = [
    {
      title: 'Logistics Operations Intern',
      department: 'Operations',
      duration: '3 months',
      location: 'On-site / Hybrid',
      description: 'Support day-to-day freight coordination, shipment tracking, and vendor communication.'
    },
    {
      title: 'Supply Chain Analyst Intern',
      department: 'Analytics',
      duration: '6 months',
      location: 'Remote',
      description: 'Analyze shipment data, build reporting dashboards, and support process improvement initiatives.'
    },
    {
      title: 'Marketing & Communications Intern',
      department: 'Marketing',
      duration: '3 months',
      location: 'On-site',
      description: 'Assist with content creation, social media management, and outreach campaigns.'
    }
  ];
 
  formData = {
    name: '',
    email: '',
    university: '',
    roleInterest: '',
    resumeLink: '',
    message: ''
  };
 
  submitted = false;
  submitError = '';
 
  onSubmit(): void {
    this.submitError = '';
 
    if (!this.formData.name || !this.formData.email || !this.formData.university) {
      this.submitError = 'Please fill in your name, email, and university before submitting.';
      return;
    }
 
    // TODO: wire this up to your backend endpoint or email service.
    // Example:
    // this.http.post('/api/internship-applications', this.formData).subscribe(...)
 
    console.log('Internship application submitted:', this.formData);
    this.submitted = true;
  }
 
  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      university: '',
      roleInterest: '',
      resumeLink: '',
      message: ''
    };
    this.submitted = false;
    this.submitError = '';
  }
}