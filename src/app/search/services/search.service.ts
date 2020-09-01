import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private uri = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCityWeatherInfo(cityName) {
    return  this.http.get(`${this.uri}/forecast?q=${cityName}&appid=82acaccf4cc61f0a94a29dc5efad359a&units=metric`);
  }
}
