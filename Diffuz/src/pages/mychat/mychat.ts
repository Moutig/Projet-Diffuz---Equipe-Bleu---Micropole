import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-mychat',
  templateUrl: 'mychat.html'
})
export class MychatPage {
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {

  }



}
