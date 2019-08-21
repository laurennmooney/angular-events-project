import { Component, OnInit } from "@angular/core";
import { EventService } from "../../event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventList: any[];
  details: any;
  show: boolean;
  attractions: any[];
  index: number;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.eventService
        .getEventData(
          queryParams.keyword,
          queryParams.city,
          queryParams.startDate,
          queryParams.endDate
        )
        .subscribe(response => {
          this.eventList = response["_embedded"].events;
          this.eventList.forEach(event => {
            event.show = false;
          });
          console.log(this.eventList);
        });
    });
    console.log(this.eventList);
  }

  addFave(index: number) {
    this.eventService.addToFavorites(index);
  }

  getDetails(index: number) {
    this.eventList[index].show = !this.eventList[index].show;
  }

  // getDetails(id: string, index: number) {
  //   this.eventService.getEventDetails(id).subscribe(response => {
  //     this.details = response;
  //     console.log(this.details);
  //     console.log(index);
  //     console.log(this.eventList);
  //     this.eventList[index].show = !this.eventList[index].show;
  //   });
  // }
}
