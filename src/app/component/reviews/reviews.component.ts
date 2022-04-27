    import { Component, OnInit } from '@angular/core';
    import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
 
  public _url:String="";
  
  constructor(private http: HttpClient) { }
    
  ngOnInit(): void {


    //this.http.get<String>("https://widget.tagembed.com/38525?view").subscribe(data=>{
      //this._url=data;
      console.log(this._url);
    //});
    this._url='<div class="tagembed-container" style=" width:100%;height:500px;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="38525" view-url="https://widget.tagembed.com/38525?view">  </div> </div>'
  }

}
