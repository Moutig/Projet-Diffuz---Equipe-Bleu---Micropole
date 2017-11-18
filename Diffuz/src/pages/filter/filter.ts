import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {

  }

}
