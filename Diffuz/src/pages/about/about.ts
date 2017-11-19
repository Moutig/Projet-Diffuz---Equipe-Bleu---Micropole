import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { DefiPage } from '../defi/defi';
import { CreatedefiPage } from '../createdefi/createdefi';
import { FavoritePage } from '../favorite/favorite';
import { MyprofilPage } from '../myprofil/myprofil';
import { MycontactPage } from '../mycontact/mycontact';
import { SuggestionPage } from '../suggestion/suggestion';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  filterPage = FilterPage;
  defiPage = DefiPage;
  createdefiPage = CreatedefiPage;
  favoritePage = FavoritePage;
  myprofilPage = MyprofilPage ;
  mycontactPage = MycontactPage ;
  suggestionPage = SuggestionPage;
  constructor(public navCtrl: NavController) {

  }

}
