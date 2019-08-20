import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-bucketlist-page',
  templateUrl: './bucketlist-page.component.html',
  styleUrls: ['./bucketlist-page.component.css']
})
export class BucketlistPageComponent implements OnInit {

  faveList: any[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.faveList = this.eventService.favorites;
    console.log(this.faveList);
  }

}
