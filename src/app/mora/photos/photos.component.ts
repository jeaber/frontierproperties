import { Component } from '@angular/core';

import { FireData } from '../../services';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'photos-mora',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./photos.style.css'],
  templateUrl: './photos.template.html'
})
export class PhotosMora {
  data;
  storage;
  urls: Array<string>;
  active: Array<string>;
  isMore: string;
  constructor(public fd: FireData) {
    const context = this;
    this.data = fd.pinecity;
    this.isMore = "More";
    this.urls = [
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/7.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/5.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/4.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/1.png",
      
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/2.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/3.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/6.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/8.png",
      "http://res.cloudinary.com/dm6rsngpq/image/upload/v1503000520/mora/9.png"
    ];
    this.active = this.urls.slice(0, 3);
  }
  toggleMore() {
    if (this.active.length > 4) {
      this.active = this.urls.slice(0, 3);
      //document.getElementById("photos").style.height = "363 px";
      document.getElementById("photos").className += " hidden";
      this.isMore = "More";
    } else {
      this.active = this.urls;
      document.getElementById("photos").className = "gallery";      
      this.isMore = "Less";
    }
  }
  ngOnInit() {
    for (let i = 0; i < 12; i++) {
      
    }
  }
}