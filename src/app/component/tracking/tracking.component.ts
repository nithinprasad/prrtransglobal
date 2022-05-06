import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkoutForm = this.formBuilder.group({
    trackingid: '',
    email: ''
  });

  onSubmit(): void {
    // Process checkout data here
   
    console.log('Your order has been submitted', this.checkoutForm.value);
    var formData: any = new FormData();
    formData.append("email", this.checkoutForm.get('email')?.value);
    formData.append("message", this.checkoutForm.get('trackingid')?.value);
    this.checkoutForm.reset();
    this.http.post("https://formspree.io/f/xnqwozkp", formData).subscribe(data=>{
      
      console.log(data);
    });
  }

}
