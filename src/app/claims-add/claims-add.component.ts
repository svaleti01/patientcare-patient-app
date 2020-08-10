import { Component, OnInit, Inject } from '@angular/core';
import { request } from 'graphql-request';
import { WatsonService } from './../watson.service';

const BASE_URL = 'https://patient-bff-arun205.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/graphql';

@Component({
  selector: 'app-claims-add',
  templateUrl: './claims-add.component.html',
  styleUrls: ['./claims-add.component.scss']
})
export class ClaimsAddComponent implements OnInit {

  public drugname1 = "";
  public count1 = 0;
  public drugname2 = "";
  public count2 = 0;
  public drugname3 = "";
  public count3 = 0;
  public showLoader = false;
  public job = "";
  public finance = '';
  public community = '';
  public survey = false;
  public drugToast = false;
  public surveyToast = false;

  constructor(@Inject(WatsonService) private watsonService) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.drugname1);
    if (this.drugname1.length > 0) {
      this.sendRequest(this.drugname1, this.count1)
    }

    if (this.drugname2.length > 0) {
      this.sendRequest(this.drugname2, this.count2)
    }

    if (this.drugname3.length > 0) {
      this.sendRequest(this.drugname3, this.count3)
    }
    this.drugname1 = '';
    this.drugname2 = '';
    this.drugname3 = '';
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
  }

  sendRequest(drug, count) {
    this.showLoader = true;
    let claimsMutation = `mutation {addClaims(username: "user1", date: "2020-02-02", drug: "`;
    claimsMutation = claimsMutation + drug + '", count: ' + count + ')}';

    request(BASE_URL, claimsMutation).then(
			(resp: any) => {
        this.showLoader = false;
        if (resp.addClaims == 'survey needed') {
          this.survey = true;
        } else {
          this.drugToast = true;
        }
			});
  }

  submitSurvey() {
    this.showLoader = true;
    const reqObj = {
      survey: this.job + ' ' + this.finance
    }
    this.watsonService.analyzeEmotions(reqObj).subscribe(response => {
      console.log(response);
      this.surveyToast = true;
      this.showLoader = false;
    });
  }

  clicked() {
    console.log('clicked');
    this.drugToast = false;
    this.surveyToast = false;
    this.survey = false;
  }
}
