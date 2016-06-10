import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AppState} from './app.service';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, public appState: AppState) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

export function main(initialHmrState?: any): Promise<any> {

   return ionicBootstrap(MyApp, [AppState])
  .catch(err => console.error(err));

}

// activate hot module reload
let ngHmr = require('angular2-hmr');
ngHmr.hotModuleReplacement(main, module);