import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AdminComponent } from './admin/admin.component';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { ProductgetComponent } from './productget/productget.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  {path:"logindashboard",component:LogindashboardComponent},
  {path:"productmanage",component:ProductmanageComponent},
  {path:"updateproduct/:id",component:UpdateproductComponent},
  {path:"productget",component:ProductgetComponent},
  {path:"product",component:ProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
