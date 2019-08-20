import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventList: object[] = [];
  constructor(private http: HttpClient) {}
  getEventData(
    keyword: string,
    city: string,
    startDate: string,
    endDate: string
  ): Observable<any> {
    // https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=cXlfgaVOkdGE8RepkWBgQEwQL6FUgYq7&keyword=${keyword}&locale=*&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z&city=${city}`
    );
  }
}
