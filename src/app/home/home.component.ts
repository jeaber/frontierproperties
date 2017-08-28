import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
/* 
import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { Availability} from './availability';
import { FireData } from '../services';
import { FirebaseObjectObservable } from 'angularfire2';
import { AngularFire } from 'angularfire2';
 */
@Component({
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.style.styl'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class HomeComponent {
  constructor() {
  }

  ngOnInit() {
  }
}
