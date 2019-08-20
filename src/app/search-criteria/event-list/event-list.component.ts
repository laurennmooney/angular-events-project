import { Component, OnInit } from "@angular/core";
import { EventService } from "../../event.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventList: any[];
  details: any;
  show: boolean;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventList = this.eventService.eventList;
    this.eventList.forEach(event => {
      event.show = false;
    });
    console.log(this.eventList);
    this.details = this.eventService.eventDetails;
  }

  addFave(index: number) {
    this.eventService.addToFavorites(index);
  }

  getDetails(id: string, index: number) {
    this.eventService.getEventDetails(id).subscribe(response => {
      this.details = response;
      console.log(this.details);
      console.log(index);
      console.log(this.eventList);
      this.eventList[index].show = !this.eventList[index].show;
    });
  }
}
