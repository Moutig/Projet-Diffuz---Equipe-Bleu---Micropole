import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-myprofil',
  templateUrl: 'myprofil.html'
})
export class MyprofilPage {
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {

  }



}
