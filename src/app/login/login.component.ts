import { Component, OnInit } from '@angular/core';
import {Login} from './login'
import {FormGroup, FormControl,Validator, Validators} from '@angular/forms'
import { UdataService } from '../udata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  

  form =new FormGroup({
    customer_name:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    customer_password:new FormControl(""),
    customer_email:new FormControl("",[Validators.required]),
    customer_mobile:new FormControl("",[Validators.required,Validators.pattern("[6-9]\d{9}")]),
    customer_city:new FormControl(""),
  })






  register()
  {
    this.udataservice.saveData(this.form.value).subscribe((res)=>{
    alert("Data saved Sucessfully");
  })
  }


  
  

  constructor(private udataservice:UdataService) { }

  ngOnInit() {
   
  }
  
  }


