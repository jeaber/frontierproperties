import { Component } from '@angular/core';

import { FireData } from '../../services';
import { FirebaseObjectObservable, FirebaseListObservable, AngularFire } from 'angularfire2';

@Component({
  selector: 'contact',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./contact.style.css'],
  templateUrl: './contact.template.html'
})
export class Contact {
  data: any;
  messages: any;
  form: any;
  constructor(public fd: FireData, public af: AngularFire) {
    const context = this;
    this.form = {
      name: '',
      date: '',
      email: '',
      text: '',
      message: ''
    };
    this.data = fd.pinecity;
    this.messages = af.database.list("pinecity/messages");
  }
  onSubmit() {
    const context = this;
    if (this.form)
      this.messages.push(context.form);
  }
  ngOnInit() {
  }
}