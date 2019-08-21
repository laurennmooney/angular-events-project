import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {}

  getData(
    keyword: string,
    city: string,
    startDate: string,
    endDate: string
  ): void {
    this.router.navigate([`/eventlist`], {
      queryParams: {
        keyword: keyword,
        city: city,
        startDate: startDate,
        endDate: endDate
      }
    });
  }
}
