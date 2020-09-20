import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


const api="http://localhost:4444/login"


@Injectable({
  providedIn: 'root'
})
export class UdataService {


  saveData(data)
  {
      return this.httpclient.post(api,data)
  }

  getData()
  {
    return this.httpclient.get(api)
  }
  

  constructor(private httpclient:HttpClient) { }
}
