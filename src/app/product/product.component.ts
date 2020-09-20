import { Component, OnInit } from '@angular/core';
import {Product} from './product'
import {FormGroup, FormControl} from '@angular/forms'
import {ProductsavedataService} from '../productsavedata.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
 

 
  form =new FormGroup({
    mobile_name:new FormControl(""),
    mobile_ailability:new FormControl(""),
    mobile_battery:new FormControl(""),
    mobile_Processsor:new FormControl(""),
    mobile_price:new FormControl(""),
    mobile_image:new FormControl(""),
    mobile_description:new FormControl("")
  })

   register()
  {
    this.productsavedata.saveData(this.form.value).subscribe((res)=>
    {
      alert("Data save Successfully")
    })
  }
  
  



  constructor(private productsavedata:ProductsavedataService) { }

  ngOnInit(): void {



  }

}
