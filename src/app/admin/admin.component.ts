import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FireData } from '../services'


/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Admin` component loaded asynchronously');

@Component({
  selector: 'admin',
  providers: [FireData],
  styleUrls: ['./admin.style.styl'],
  templateUrl: './admin.template.html'
})
export class Admin {
  sub$;
  localState: any;
  data: any;
  form: any;
  newData: any;
  singleListings: FirebaseListObservable<any>;
  doubleListings: FirebaseListObservable<any>;
  listOne: FirebaseListObservable<any>;
  listTwo: FirebaseListObservable<any>;
  listOneItem;
  listTwoItem;

  pushDouble: string;
  pushSingle: string;

  selectedCityString: string;
  constructor(public route: ActivatedRoute, public fd: FireData, public af: AngularFire, ) {
    const context = this;
    this.selectedCityString = '/pinecity'

    this.data = fd.pinecity;
    this.pushSingle = "";
    this.pushDouble = "";
    this.listOneItem = "";
    this.listTwoItem = "";

    // uh needs to load as any apartment
    this.singleListings = af.database.list(this.selectedCityString + '/rooms/single/availability');
    this.doubleListings = af.database.list(this.selectedCityString + '/rooms/double/availability');
    this.listOne = af.database.list(this.selectedCityString + 'amenities/listOne');
    this.listTwo = af.database.list(this.selectedCityString + 'amenities/listTwo');

    this.form = {
      welcomeText: "",
      neighborhoodText: "",
      amenities: {
        paragraphOne: "",
        paragraphTwo: ""
      },
      rooms: {
        subtext: "",
        single: { sqft: "" },
        double: { sqft: "" },
      }
    };
    this.loadPinecity();
  }
  loadPinecity() {
    const context = this;
    if (this.sub$)
      this.sub$.unsubscribe();
    this.selectedCityString = '/pinecity';
    this.data = this.fd.pinecity;
    this.sub$ = this.fd.pinecitySubject.subscribe((data) => {
      for (let prop in data) {
        if (context.form[prop] !== undefined) {
          console.log('changing ', context.form[prop], ' to', data[prop]);
          context.form[prop] = data[prop];
        }
      }
      //sub$.unsubscribe();
    });
    this.singleListings = this.af.database.list(this.selectedCityString + '/rooms/single/availability');
    this.doubleListings = this.af.database.list(this.selectedCityString + '/rooms/double/availability');
    this.listOne = this.af.database.list(this.selectedCityString + 'amenities/listOne');
    this.listTwo = this.af.database.list(this.selectedCityString + 'amenities/listTwo');
  }
  loadMora() {
    const context = this;
    if (this.sub$)
      this.sub$.unsubscribe();
    this.selectedCityString = '/mora';
    this.data = this.fd.mora;
    this.sub$ = this.fd.moraSubject.subscribe((data) => {
      for (let prop in data) {
        if (context.form[prop] !== undefined) {
          console.log('changing ', context.form[prop], ' to', data[prop]);
          context.form[prop] = data[prop];
        }
      }
      //sub$.unsubscribe();
    });
    this.singleListings = this.af.database.list(this.selectedCityString + '/rooms/single/availability');
    this.doubleListings = this.af.database.list(this.selectedCityString + '/rooms/double/availability');
    this.listOne = this.af.database.list(this.selectedCityString + 'amenities/listOne');
    this.listTwo = this.af.database.list(this.selectedCityString + 'amenities/listTwo');
  }
  public cityString() {
    if (this.selectedCityString === '/pinecity')
      return 'Pine City'
    else
      return 'Mora'

  }
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  onSave() {
    const context = this;
    console.log('saved');
    this.data.update(context.form);
  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
    console.log('hello `Admin` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
