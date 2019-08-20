import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() index: number;
  @Output() toggleDetailsEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  // toggleMoreDetails(index: number) {
  //   this.toggleDetailsEvent.emit(index);
  // }



}
