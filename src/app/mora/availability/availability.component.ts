import { Component } from '@angular/core';

import { FireData } from '../../services';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'availability-mora',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./availability.style.css'],
  templateUrl: './availability.template.html'
})
export class AvailabilityMora {
  data;
  singleListings: FirebaseListObservable<any>;
  doubleListings: FirebaseListObservable<any>;

  /*
    data.rooms.subtext
              .single
              .double.sqft
                     .availability
  */
  constructor( public fd: FireData, public af: AngularFire,) {
    this.data = fd.pinecity;
    this.singleListings = af.database.list('/mora/rooms/single/availability');
    this.doubleListings = af.database.list('/mora/rooms/double/availability');
  }
  // image floor plans
  isActive(e) {
    if (e.target.className === "active")
      e.target.className = ""
    else
      e.target.className = "active"

  }
  ngOnInit() {
  }
}