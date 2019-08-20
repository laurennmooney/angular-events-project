import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";

@Component({
  selector: "app-bucketlist-page",
  templateUrl: "./bucketlist-page.component.html",
  styleUrls: ["./bucketlist-page.component.css"]
})
export class BucketlistPageComponent implements OnInit {
  faveList: any[];
  details: any;
  show: boolean;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.faveList = this.eventService.favorites;
    this.faveList.forEach(event => {
      event.show = false;
    });
    console.log(this.faveList);
    this.details = this.eventService.eventDetails;
  }
  removeFavorite(index: number) {
    this.eventService.removeFavorites(index);
  }
  getDetails(id: string, index: number) {
    this.eventService.getEventDetails(id).subscribe(response => {
      this.details = response;
      this.faveList[index].show = !this.faveList[index].show;
      // console.log("more details was pushed");
    });
  }
}
