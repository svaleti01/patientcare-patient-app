import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatsonService {

  public watsonUrl = 'https://watson-nlu-arun205.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/analyzeEmotions';

  constructor(private http: HttpClient) { }

  public analyzeEmotions(reqObj) {
    return this.http.post(this.watsonUrl, reqObj,  {
      headers: new HttpHeaders().set('Content-type', 'application/json')})
    .pipe(
    map(resp => {
      return resp;
    } ));
  }
}
