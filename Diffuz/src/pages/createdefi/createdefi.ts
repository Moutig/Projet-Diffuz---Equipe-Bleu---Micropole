import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-createdefi',
  templateUrl: 'createdefi.html'
})
export class CreatedefiPage {
  aboutPage = AboutPage;

  constructor(public navCtrl: NavController) {

  }

}
