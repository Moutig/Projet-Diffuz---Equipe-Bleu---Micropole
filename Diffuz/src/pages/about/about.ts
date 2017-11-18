import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { DefiPage } from '../defi/defi';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  filterPage = FilterPage;
  defiPage = DefiPage;
  constructor(public navCtrl: NavController) {

  }

}
