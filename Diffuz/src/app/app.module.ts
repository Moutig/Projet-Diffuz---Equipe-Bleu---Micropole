import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { FilterPage } from '../pages/filter/filter';
import { DefiPage } from '../pages/defi/defi';
import { ConnexionPage } from '../pages/connexion/connexion';
import { CreatedefiPage } from '../pages/createdefi/createdefi';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { MyprofilPage } from '../pages/myprofil/myprofil';
import { MycontactPage } from '../pages/mycontact/mycontact';
import { MychatPage } from '../pages/mychat/mychat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    FilterPage,
    DefiPage,
    ConnexionPage,
    CreatedefiPage,
    SuggestionPage,
    MyprofilPage,
    MycontactPage,
    MychatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    FilterPage,
    DefiPage,
    ConnexionPage,
    CreatedefiPage,
    SuggestionPage,
    MyprofilPage,
    MycontactPage,
    MychatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
