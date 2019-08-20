import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  eventData: any;
  constructor(private eventService: EventService) {}

  ngOnInit() {}
  getData(
    keyword: string,
    city: string,
    startDate: string,
    endDate: string
  ): void {
    this.eventService
      .getEventData(keyword, city, startDate, endDate)
      .subscribe(response => {
        this.eventData = response.data;
        console.log(response);
      });
  }
}
