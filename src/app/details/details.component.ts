import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  // @Input() event: any;
  // @Input() index: number;

  // attractionDetails: any[];

  constructor() {}

  ngOnInit() {
    // this.attractionDetails = this.event["_embedded"].attractions;
  }
}
