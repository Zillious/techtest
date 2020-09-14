import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { async } from 'q';
import { DatainfoService } from '../datainfo.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkUtilitiesService {
  aNetworkFMsg = 'Network not available.';
  aTitle = 'RailRecipe';
  aNetworkAMsg = 'Network is available.';
  constructor(private network: Network,
    private platform: Platform,
    private alert: AlertController,
    private data : DatainfoService
  ) {
     
  }

  checkForNetwork() {
    this.network.onDisconnect().subscribe(async () => {
      const alt = await this.alert.create({
        header: this.aTitle,
        message: this.aNetworkFMsg,
        buttons: ["OK"]
      });
      await alt.present();
      this.data.isNetworkAvailable = false;
    })

    this.network.onConnect().subscribe(async () => {
      const alt = await this.alert.create({
        header: this.aTitle,
        message: this.aNetworkAMsg,
        buttons: ["OK"]

      });

      this.data.isNetworkAvailable = true;
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection!');
        }
      }, 3000);
    })

  }
}
