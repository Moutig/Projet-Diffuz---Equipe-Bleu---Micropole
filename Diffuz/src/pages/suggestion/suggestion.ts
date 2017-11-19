import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-suggestion',
  templateUrl: 'suggestion.html'
})
export class SuggestionPage {
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {

  }
}
