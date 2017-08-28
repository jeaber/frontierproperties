import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AvailabilityMora } from './availability';
import { FireData } from '../services';
//import { FirebaseObjectObservable } from 'angularfire2';
//import { AngularFire } from 'angularfire2';

@Component({
  selector: 'mora',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    FireData
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./mora.style.styl'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './mora.template.html'
})
export class Mora {
  _data;
  constructor(public data: FireData) {
    this._data = data.mora;
  }

  ngOnInit() {
  }
}
