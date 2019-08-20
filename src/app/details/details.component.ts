import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() eventDetails: any;

  attractionDetails: any[];

  constructor() { }

  ngOnInit() {
    this.attractionDetails = this.eventDetails["_embedded"].attractions;
  }



}
