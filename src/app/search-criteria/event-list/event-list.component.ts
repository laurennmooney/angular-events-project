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
  showDetails: boolean;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventList = this.eventService.eventList;
  }

  addFave(index: number) {
    this.eventService.addToFavorites(index);
  }

  getDetails(id: string) {
    this.details = this.eventService.getEventDetails(id);
    this.showDetails = !this.eventService.showDetails;
  }



}
