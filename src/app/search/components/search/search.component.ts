import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  city: string;
  cityInfo: any;
  appearCard: boolean = false;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  getCityInformation() {
    this.appearCard = true;
    this.searchService.getCityWeatherInfo(this.city).subscribe(data => {
      console.log(data);
      this.cityInfo = data;
    });
  }

}
