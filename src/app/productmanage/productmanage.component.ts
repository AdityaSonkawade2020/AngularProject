import { Component, OnInit } from '@angular/core';
import { ProductsavedataService } from '../productsavedata.service';

@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.css']
})
export class ProductmanageComponent implements OnInit {


  
  constructor(private productsavedata:ProductsavedataService) { }
  product:any =[]

  delete(id){
    this.productsavedata.deleteData(id).subscribe((res)=>
    {
      alert("Data deleted Successfully")
      this.getProductData()
    })
  }


  getProductData()
  {
    this.productsavedata.getData().subscribe((res)=>{
       this.product =res
    }
    )
  }

  ngOnInit(): void {

    this.getProductData()
  }

}
