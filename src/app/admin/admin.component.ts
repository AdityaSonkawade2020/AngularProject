import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  loginForm:FormGroup
  
  login()
  { 
    if(this.loginForm.value.uname == "aditya" && this.loginForm.value.pass=="aditya123")
    {
      
       alert("Admin login Sucessfull")
        this.router.navigateByUrl("/productget");
        
    }
    else{
    
        alert("Id or password is incorrect")
    }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      uname:new FormControl(""),
      pass:new FormControl(""),
    })
  }
  }


