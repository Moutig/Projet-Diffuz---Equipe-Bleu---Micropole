import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { DefiPage } from '../defi/defi';
import { CreatedefiPage } from '../createdefi/createdefi';
import { SuggestionPage } from '../suggestion/suggestion';
import { MyprofilPage } from '../myprofil/myprofil';
import { MycontactPage } from '../mycontact/mycontact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  filterPage = FilterPage;
  defiPage = DefiPage;
  createdefiPage = CreatedefiPage;
  suggestionPage = SuggestionPage;
  myprofilPage = MyprofilPage ;
  mycontactPage = MycontactPage ;
  constructor(public navCtrl: NavController) {

  }

}
