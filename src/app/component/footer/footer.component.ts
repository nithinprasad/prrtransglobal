import { Component, OnInit } from '@angular/core';
import { DataSupplyService } from 'src/app/data-supply.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dataService:DataSupplyService) { }

  ngOnInit(): void {
  }
  

}
