import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { EventListComponent } from './search-criteria/event-list/event-list.component';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';

const appRoutes: Routes = [
  { },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketlistPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
