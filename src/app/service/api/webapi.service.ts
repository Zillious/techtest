import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/model/responsemodel';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  getUserURL = 'https://reqres.in/api/users';
  constructor(private httpClient: HttpClient) { }

getUserList(): Observable<ResponseModel>{
  return this.httpClient.get<ResponseModel>(this.getUserURL);
}

}
