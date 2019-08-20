import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Output() toggleDetailsEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails() {
    this.toggleDetailsEvent.emit();
  }



}
