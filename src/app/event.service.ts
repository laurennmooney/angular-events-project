import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  
  eventList: any[] = [];

  getEventData(    
    keyword: string,
    city: string,
    startDate: string,
    endDate: string) {
      this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=cXlfgaVOkdGE8RepkWBgQEwQL6FUgYq7&keyword=${keyword}&locale=*&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z&city=${city}`).subscribe(response => {
        this.eventList.push(response['_embedded'].events);
        console.log(this.eventList);
      })
  }

}
