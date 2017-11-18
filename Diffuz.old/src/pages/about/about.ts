import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  filterPage = FilterPage;
  constructor(public navCtrl: NavController) {

  }

}
