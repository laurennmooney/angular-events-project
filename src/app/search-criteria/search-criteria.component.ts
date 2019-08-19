import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  ticketmasterData: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  getDataFromTicketmaster(form: NgForm) {
    this.eventService.getTicketmasterData(form.value.keyword,).subscribe(response => {
      console.log(response);
    });
  }

}
