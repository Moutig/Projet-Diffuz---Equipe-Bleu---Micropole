import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FilterPage } from '../filter/filter';
import { DefiPage } from '../defi/defi';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FilterPage;
  tab5Root = DefiPage;

  constructor() {

  }
}
