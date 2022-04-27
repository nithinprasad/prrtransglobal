import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public mockData:any=[
    {
      "icon":"ship",
      "service":"Ocean Freight Forwarding",
      "desc": "Our sea freight service stands for reliability, flexibility and transparency. The team of small and professional sea freight specialists simplifies the options and improves methods for faster pace. We nurture relationships with our carriers and negotiate continuously on market based rates and space availability. We provide a personalised freight forwarding service to all major international ports. There is a complete range of ocean freight services for all types of cargo - consolidated shipments full-container, full and partial charters roll on / roll off and barge cargo transportation. All these services are reliable and cost effective solutions on all major trade lanes. We negotiate as independent freight forwarders with our preferred shipping lines to offer competitive rates for FCL (full container load) and LCL (less than container load) to import, export and cross trade shipments.",
      "image": "../assets/img/prr/ship.jpg"
    },
    {
      "icon":"plane",
      "service":"Air Freight Forwarding",
      "desc": "We aim to find the air freight solution that best suits your needs. We can provide air freight services to and from all destinations worldwide, for import and export. Through our worldwide agents we keep you informed of your freight movements with excellent communication at all times, providing timely and accurate notice of arrivals, ensuring the earliest possible customs clearance and delivery of your goods. We cover every aspect of your general or time sensitive international freight shipping. Thanks to our strategic agreements with all major carriers you can rely on a timely and dependable service every time.PRR offers the cheapest and fastest Air freight; most direct connection between your shipment origin and destination, The PRR Air Freight team will ensure professional management for the entire Air Export and Import shipping process.",
      "image": "../assets/img/prr/flight.jpg"
    },
    {
      "icon":"ship",
      "service":"Custom Clearance",
      "desc": "PRR customs brokers are industry-leaders is handling a wide range of commodities from all origins. PRR offers you an extensive logistics service package, including the handling of all your customs formalities. Our well experienced and certified staff can provide tailor made services to fit your unique Customs requirements and needs.PRR Professional and expert examination team, growing day by day as a trustworthy and popular custom clearing service agent, offering world class services to the customers. It is our endeavor to enhance our customer's delight by offering them right solution at the right time for all their all export and import consignments.Our unique offerings include highly experienced customs broker service to ensure the seamless arrival of your imports including the expertised handling of refrigerated shipping containers for the transport of sensitive goods by both sea and air.",
      "image": "../assets/img/prr/custom.png"
    },
    {
      "icon":"truck",
      "service":"Land Transportation",
      "desc": "PRR can handle container transportation like 20 Feet, 40 Feet, Flat racks, Open tops, reefer containers etc. of exports and Imports,  all over the world. We are also offering cargo transportation from customer door to CFS/CY and CFS/CY to customer door. Our cutting edge technology and experienced staff allow us to provide our customers with tailor made road freight solution.",
      "image": "../assets/img/prr/land.jpg"
    },
    {
      "icon":"store",
      "service":"Project Handling",
      "desc": "Our Specialised team can handle your projects safely and timely manner. We are experienced to handle odd dimensions cargos by air and ocean.",
      "image": "../assets/img/prr/logo4.png"
    },
    {
      "icon":"store",
      "service":"Warehousing and distribution",
      "desc": "PRR have well laid out connections to outsource storage and warehousing facility for import and export cargos. We can handle any consignment from very small to the very large with complete facility for full scanning in and our process. We provide outsourced warehousing facility and custom bonded warehousing facility to the customers, based on their requirements and demands",
      "image": "../assets/img/prr/warehouse.png"
    },
    {
      "icon":"store",
      "service":"Marine Insurance ",
      "desc": "PRR can arrange Marine Insurance for your valuable goods to avoid risk at transit.",
      "image": "../assets/img/prr/logo4.png"
    },
    {
      "icon":"store",
      "service":"Door to door Cargo movements ",
      "desc": "PRR ready pick the cargo from your door step and deliver the same to your customer door and vice versa. We offer all types of specialized services like EXW (ex works), FCA (free carrier), CPT (carriage paid to), CIP (carriage and insurance paid to), DAT (delivered at terminal) , DAP (delivered at place), DDP (delivered duty paid), FAS( free alongside ship), FOB( free on board), CFR (cost and freight) and CIF( cost, insurance and freight).",
      "image": "../assets/img/prr/logo4.png"
    },
    {
      "icon":"store",
      "service":"Buyers consolidation and groupage ",
      "desc": "We offer regular LCL groupage services, which are cost effective and keeps us in control of service standards. Furthermore, we do buyer consolidation to all over the Indian ports through our reliable worldwide network.",
      "image": "../assets/img/prr/logo4.png"
    },
    {
      "icon":"store",
      "service":"Consolidation by Air and Sea",
      "desc": "Combining cargo of more than one consignee or shippers into one lot and then prepare it for shipping to the destination is known as consolidation.  PRR can arrange consolidation to/from major destinations by air and sea with fast and smooth delivery. We offer regular LCL groupage services, which are cost effective and keeps us in control of service standards. Furthermore, we do buyer consolidation to all over the Indian ports through our reliable worldwide network.",
      "image": "../assets/img/prr/logo4.png"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
