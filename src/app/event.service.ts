import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

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
  ): Observable<any> {
    // this.eventList = [];
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=cXlfgaVOkdGE8RepkWBgQEwQL6FUgYq7&keyword=${keyword}&locale=*&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z&city=${city}`
    );
  }

  addToFavorites(index: number) {
    console.log("you favorited this");
    this.favorites.push(index);
    this.favorites.forEach(fave => {
      fave.fave = true;
    });
    console.log(this.favorites);
  }

  removeFavorites(index: number) {
    this.favorites.splice(index, 1);
  }
}
