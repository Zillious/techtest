import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkUtilitiesService } from './service/network/network-utilities.service';
import { Network } from '@ionic-native/network/ngx';
import { DatainfoService } from './service/datainfo.service';
import { EventsService } from './service/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  aNetworkFMsg = 'Network not available.';
  aTitle = 'RailRecipe';
  aNetworkAMsg = 'Network is available.';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private alert: AlertController,
    private data: DatainfoService,
    private event:EventsService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkForNetwork();
    });
  }

 async checkForNetwork() {
   

    this.network.onConnect().subscribe(async () => {
      const alt = await this.alert.create({
        header: this.aTitle,
        message: this.aNetworkAMsg,
        buttons: ["OK"]

      });
       await alt.present();
      this.data.isNetworkAvailable = true;
      this.event.publish('NetworkEvent',{
        
      });
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection!');
        }
      }, 3000);
    });

    this.network.onDisconnect().subscribe(async () => {
      
      this.data.isNetworkAvailable = false;
    });
  }
  
}
