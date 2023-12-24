import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  constructor(private sanitizer: DomSanitizer) {

  }

  public officeLocations:any=[
    {
      "location": "Chennai",
      "mapurl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7772.125451507498!2d80.28424943567109!3d13.095211198804625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f4492027b7d%3A0x41eb69c9903935!2sPRR%20Trans%20Logistics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1703391601118!5m2!1sen!2sin",
      "name":"PRR Trans Logistics Pvt Ltd",
      "line1": "Old No 269/1, New No 126",
      "line2": "Office No C2, Third Floor",
      "line3": "Thambuchetty Street, Chennai 600 001",
      "line4": "TamilNadu, India ",
      "email": "info@prrtransglobal.com",
      "phone": "+91 44 4355 6538",
      "mobile": "91 80562 33911"
    },
    {
      "location": "MUMBAI",
      "mapurl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.327957787838!2d73.02119739043468!3d19.016108471726504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3acc48aabd9%3A0x29aef0ea363ba694!2sSai%20Chambers%2C%20Sector%2011%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1703392255154!5m2!1sen!2sin",
      "name":"PRR Trans Logistics Pvt Ltd",
      "line1": "Office No. 31, 3RD Floor, SAI CHAMBER",
      "line2": "Plot Number :44 & SECTOR NUMBER :11",
      "line3": "CBD BELAPUR NAVI MUMBAI-400614",
      "line4": "Maharashtra, India ",
      "email": "mumbai@prrtransglobal.com",
      "phone": "00 917904267429",
      "mobile": "00 917904267429"
    },
    {
      "location": "Kochi",
      "mapurl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.781910781649!2d76.27347887014598!3d9.959274528695088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872b8f9644213%3A0x87e0d2fa8c529140!2sAlappat%20Cross%20Rd%2C%20Perumanoor%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682016!5e0!3m2!1sen!2sin!4v1703392355308!5m2!1sen!2sin",
      "name":"PRR Trans Logistics Pvt Ltd",
      "line1": "No 61/2250, 2nd Floor, Narayanajayam Building ",
      "line2": "Alappatrun cross Road, Ernakulam",
      "line3": "Rasipuram, Kochi 682016, ",
      "line4": "Kerala, India",
      "email": "sales.kochi@prrtransglobal.com",
      "phone": "0484 356 3661",
      "mobile": "0091 7010181158"
    }
    
  ]

  getSanitizedUrl(url: string) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
