import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private eventService: EventService) {}

  ngOnInit() {}

  getData(
    keyword: string,
    city: string,
    startDate: string,
    endDate: string
  ): void {
    this.eventService.getEventData(keyword, city, startDate, endDate);
  }
}
