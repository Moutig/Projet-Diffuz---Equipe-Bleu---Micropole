import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MychatPage } from '../mychat/mychat';


@Component({
  selector: 'page-mycontact',
  templateUrl: 'mycontact.html'
})
export class MycontactPage {
  mychatPage = MychatPage;
  constructor(public navCtrl: NavController) {

  }



}
