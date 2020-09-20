import { Component, OnInit } from '@angular/core';
import { UdataService } from '../udata.service';

@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {

  constructor(private udataservice:UdataService) { }

  login:any=[]


  getLoginData()
  {
     this.udataservice.getData().subscribe((res)=>{
       this.login=res
     })
    }

  ngOnInit(): void {
    this.getLoginData()
  }

}
