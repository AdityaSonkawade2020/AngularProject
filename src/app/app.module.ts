import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { Routes, RouterModule, Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import {UdataService} from './udata.service';
import { ProductComponent } from './product/product.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductgetComponent } from './productget/productget.component'
import { ProductsavedataService } from './productsavedata.service';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AddcartComponent } from './addcart/addcart.component';








@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SuccessComponent,
    HomeComponent,
    ProductComponent,
    LogindashboardComponent,
    AdminComponent,
    ProductgetComponent,
    ProductmanageComponent,
    UpdateproductComponent,
    UpdateuserComponent,
    AddcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  
  providers: [UdataService,ProductsavedataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
