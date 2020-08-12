import { Component, OnInit } from '@angular/core';
import { request } from 'graphql-request';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';

const BASE_URL = 'http://istio-ingressgateway-patientcare-istio.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/patientbff/graphql';

const QueryClaims = `
query {
  claimsHistory {
    claimsid
    claimsdate
    status
    opioidflag
    druglist {
      drugid
      userid
      claimsid
      drugname
      count
    }
  }
}
`;

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.scss']
})
export class ClaimsListComponent implements OnInit {

  public model = new TableModel();
  public claimsHistory;
  public showLoader = true;


  constructor() { }

  ngOnInit() {
    request(BASE_URL, QueryClaims).then(
      (resp: any) => {
        console.log(resp.claimsHistory);
        this.claimsHistory = resp.claimsHistory;
        this.showLoader = false;
      });
  }

  selected(i) {
    this.model = new TableModel();
    let drugList = this.claimsHistory[i].druglist;
    drugList.forEach(drug => {
      let row = [
        new TableItem({ data: drug.drugname }),
        new TableItem({ data: drug.count })
      ]
      this.model.addRow(row);
    });
    this.model.header = [
      new TableHeaderItem({ data: "Drug" }),
      new TableHeaderItem({ data: "Count" })
    ];

  }

}
