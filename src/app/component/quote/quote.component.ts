import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor( private formBuilder: UntypedFormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  onSubmit(): void {
    // Process checkout data here
   
    console.log('Your order has been submitted', this.checkoutForm.value);
    var formData: any = new FormData();
    formData.append("email", this.checkoutForm.get('email')?.value);
    var name= this.checkoutForm.get('name')?.value;
    var phone= this.checkoutForm.get('phone')?.value;
    var msg= this.checkoutForm.get('message')?.value;

    var string=""+name+"\n";
    string+="Phone:"+phone+"\n";
    string+="Message:"+msg+"\n";

    formData.append("message", string);
    this.checkoutForm.reset();
    this.http.post("https://formspree.io/f/mlezolyp", formData).subscribe(data=>{
      
      console.log(data);
    });
  }

}
