import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { async } from 'q';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/responsemodel';
import { NetworkUtilitiesService } from '../service/network/network-utilities.service';
import { WebapiService } from '../service/api/webapi.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { DatainfoService } from '../service/datainfo.service';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userArray: User[];
  responseModel : ResponseModel;


  constructor(private platform: Platform, private networkService: NetworkUtilitiesService,
    private webApi: WebapiService, private loadingCtrl: LoadingController,
    private router:Router,private data : DatainfoService, private alert : AlertController,
    private event:EventsService
    ) {
      console.log("data network :",this.data.isNetworkAvailable);
      this.event.subscribe('NetworkEvent',()=>{
        this.getUser();
      })
  }

  async showNetworkError(){
    const alt = await this.alert.create({
      header:"RailRecipe",
      message:"Network not available check mobile settings.",
      buttons:["OK"]
    })
    await alt.present();
  }
  async getUser() {
    const loader = await this.loadingCtrl.create({
      message: "Please wait ..",
      duration: 6000
    });
    await loader.present();
    this.webApi.getUserList().subscribe(res => {
      this.userArray = res.data;
      this.responseModel = res;
      console.log("data info :", res)
      loader.dismiss();
    })
  }
onListTapped(user){
  console.log("index data:",this.userArray[0]);
  this.data.userInfo = user;
  this.data.companyInfo = this.responseModel.ad;

  this.router.navigate(['userinfo']);
}
}


