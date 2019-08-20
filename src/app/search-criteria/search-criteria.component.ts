import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  eventData: any;
  eventList: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  getEventList() {
    this.eventList = this.eventService.eventList;
  }

  getData(    
    keyword: string,
    city: string,
    startDate: string,
    endDate: string): void {
    this.eventService.getEventData(keyword, city, startDate, endDate);
    this.getEventList();
    console.log(this.eventList);
  }
}
