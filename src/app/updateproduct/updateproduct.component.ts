import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {ProductsavedataService} from '../productsavedata.service'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  form =new FormGroup(
    {
    mobile_name:new FormControl(""),
    //mobile_ailability:new FormControl(""),
    mobile_battery:new FormControl(""),
    mobile_Processsor:new FormControl(""),
    mobile_price:new FormControl(""),
    mobile_image:new FormControl(""),
    mobile_description:new FormControl("")
  })


  id:number
  product:any=[]


   update()
  {
    this.productsavedata.updateData(this.id,this.form.value).subscribe((res)=>
    {
      alert("Data Update Successfully")
      
    })
  }
  
  



  constructor(private productsavedata:ProductsavedataService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedroute.params.subscribe((param)=>{
      this.id =param["id"]
      this.productsavedata.getDataById(this.id).subscribe((data)=>
      {
        this.product=data
       this.form =new FormGroup(
          {
            mobile_name:new FormControl(this.product.mobile_name),
          //mobile_ailability:new FormControl(this.product.mobile_ailability),
            mobile_battery:new FormControl(this.product.mobile_battery),
            mobile_Processsor:new FormControl(this.product.mobile_Processsor),
            mobile_price:new FormControl(this.product.mobile_price),
            mobile_image:new FormControl(this.product.mobile_image),
            mobile_description:new FormControl(this.product.mobile_description)

            
          })
      })
     
    })

  }
}