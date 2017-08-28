import { Component } from '@angular/core';

import { FireData } from '../../services';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'amenities-mora',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./amenities.style.css'],
  templateUrl: './amenities.template.html'
})
export class AmenitiesMora {
  data;
  listOne: FirebaseListObservable<any>;
  listTwo: FirebaseListObservable<any>;

  constructor( public fd: FireData, public af: AngularFire,) {
    this.data = fd.pinecity;
    this.listOne = af.database.list('/mora/amenities/listOne');
    this.listTwo = af.database.list('/mora/amenities/listTwo');
  }

  ngOnInit() {
  }
}