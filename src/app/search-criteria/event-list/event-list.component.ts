import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: any[];
  details: any;
  show: boolean;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventList = this.eventService.eventList;
    this.eventList.forEach(event => {
      event.show = false;
    });
    console.log(this.eventList);
    this.details = this.eventService.eventDetails;
    this.show = false;
  }

  addFave(index: number) {
    this.eventService.addToFavorites(index);
  }

  getDetails(id: string) {
    this.details = this.eventService.getEventDetails(id);
  }

  toggleDetails() {
    console.log("toggle");
    this.show = !this.show;
  }



}
