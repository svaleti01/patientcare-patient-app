import { Component, OnInit } from '@angular/core';
import { request } from 'graphql-request';

const BASE_URL = 'https://patient-bff-arun205.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/graphql';

const addPillbox = `mutation {
  addPillbox(userid: 5, status: "COMPLETED", consumed: 10,
    remaining: 0, frequency: "MONTHLY", time: "12:00")
}`;

@Component({
  selector: 'app-pillbox-add',
  templateUrl: './pillbox-add.component.html',
  styleUrls: ['./pillbox-add.component.scss']
})
export class PillboxAddComponent implements OnInit {

  public userid: number;
  public count: number;
  public time: String;
  public frequency: String;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    let pillboxMutation = `mutation {addPillbox(userid: ` + this.userid;
    pillboxMutation = pillboxMutation + ', status: "CONNECTED", consumed: 0, remaining: ';
    pillboxMutation = pillboxMutation + this.count;
    pillboxMutation = pillboxMutation + ', frequency: "' + this.frequency;
    pillboxMutation = pillboxMutation + '", time: "' + this.time + '")}';

    request(BASE_URL, pillboxMutation).then(
			(resp: any) => {
				console.log(resp);
			});
    console.log(pillboxMutation);
  }
}

