import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { Company } from '../model/company';
import { DatainfoService } from '../service/datainfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {
  userInfo:User;
  companyInfo:Company;
  constructor(private activeRoute:ActivatedRoute, private data : DatainfoService) {
   this.userInfo = this.data.userInfo;
   this.companyInfo = this.data.companyInfo;
    
    console.log("data :",this.data.userInfo)
 
   }

  ngOnInit() {
  }

}
