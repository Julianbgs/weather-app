import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../../search/services/search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  cityInfo: any;

  constructor(
    private searchService: SearchService,
    private routerActive: ActivatedRoute,
  ) { }

  ngOnInit() {
    const city =this.routerActive.snapshot.queryParams['city'];
    this.searchService.getCityWeatherInfo(city).subscribe(data => {
      this.cityInfo = data;
    });
  }

}
