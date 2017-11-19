import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-defi',
  templateUrl: 'defi.html'
})
export class DefiPage {
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {

  }

}
