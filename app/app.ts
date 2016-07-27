import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MenuPage} from './pages/menu/menu';
import {AboutPage} from './pages/about/about';
import {MapPage} from './pages/map/map';
import {SchedulePage} from './pages/schedule/schedule';
import {WelcomePage} from './pages/welcome/welcome';


@Component({
  templateUrl: 'build/pages/menu/menu.html' 
})
export class MyApp {

  private rootPage: any;
  private about: any;
  private map: any;
  private schedule: any;
  private welcome: any;

  constructor(private platform: Platform) {

    this.about = AboutPage;
    this.map = MapPage;
    this.schedule = SchedulePage;
    this.welcome = WelcomePage;

    this.rootPage = this.welcome;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(option) {
    this.rootPage = option;
  }
}

ionicBootstrap(MyApp);
