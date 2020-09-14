import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class DatainfoService {
userInfo:User=new User();
isNetworkAvailable:boolean = false;
companyInfo:Company = new Company();
  constructor() { }
}
