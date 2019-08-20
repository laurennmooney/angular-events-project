import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private http: HttpClient, private router: Router) {}

  eventList: any[] = [];
  favorites: any[] = [];
  eventDetails: any;
  showDetails: boolean = false;

  getEventData(
    keyword: string,
    city: string,
    startDate: string,
    endDate: string
  ) {
    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=cXlfgaVOkdGE8RepkWBgQEwQL6FUgYq7&keyword=${keyword}&locale=*&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z&city=${city}`
      )
      .subscribe(response => {
        console.log(response);
        this.eventList = response["_embedded"].events;
        this.router.navigate(["/eventlist"]);
      });
  }

  addToFavorites(index: number) {
    console.log("you favorited this");
    this.favorites.push(index);
  }

  getEventDetails(id: string) {
    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=cXlfgaVOkdGE8RepkWBgQEwQL6FUgYq7`
      )
      .subscribe(response => {
        console.log(response);
        this.eventDetails = response;
      });
  }
}
