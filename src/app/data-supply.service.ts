import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSupplyService {

  public certifications: any = [
    "A GOLDEN MEMBER OF GLA (Global Logistics Alliance) Membership ID 137894 ",
    "An Authorised Economic Operator (AEO) Approved by Indian Customs - INAAJCP6750G0F226",
    "MTO License from Director General of Shipping, Govt. of India (License No: MTO/DGS/2586/JAN/2025)",
    "Custom Broker License from Indian Customs (License No R-530/2019-CBS), issued by Chennai Customs",
    "Registered MSME as per MSME Act",
    "A Member of Federation of Freight Forwarders’ Associations in India",
    "A Member of The Chennai Customs Broker association",
    "A Member of Freight Global net work",
    "A Member of Freight net Associations"
  ]

  constructor() { }
}
