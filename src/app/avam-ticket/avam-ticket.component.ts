import { Component, OnInit } from '@angular/core';
import { DataHelper } from "app/avam-ticket/data-helper";
import * as _ from 'lodash';

@Component({
  selector: 'f-avam-ticket',
  templateUrl: './avam-ticket.component.html',
  styleUrls: ['./avam-ticket.component.scss']
})
export class AvamTicketComponent {
  order : any;
  legs : any[];
  selectedLeg : any;

  constructor() { 
    this.order = DataHelper.getParentData();
    this.legs = _.values(this.order.children);
    this.selectedLeg = this.legs[0];
  }

  getLegClass(leg: any) : any {
    return {
      'sov-bid' : leg.side==='BUY',
      'sov-ask': leg.side==='SELL',
      'muted' : this.selectedLeg.symbol !== leg.symbol
    };
  }
  onLegSelected(leg: any) : void {
    this.selectedLeg = leg;
  }

}
