import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})





export class ContactPage {

  constructor(public navCtrl: NavController) {
  }

  radioChecked(qid, answer) {
    console.log(qid, answer)
    if (answer === 1){
      console.log("Ind")
    }
    else {
      console.log("Gr")
    }
  }
}
