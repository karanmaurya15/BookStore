import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaybookComponent } from './Components/displaybook/displaybook.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    // {path:'get-all-books',component:GetAllBooksComponent},
    {path:'displaybook',component:GetAllBooksComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
