import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { DefiPage } from '../defi/defi';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {
  defiPage = DefiPage;
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {

  }
}
