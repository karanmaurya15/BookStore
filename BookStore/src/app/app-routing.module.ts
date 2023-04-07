import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaybookComponent } from './Components/displaybook/displaybook.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';

const routes: Routes = [
  {path : '' , redirectTo: '/login', pathMatch: 'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],
  children:[
    // {path:'get-all-books',component:GetAllBooksComponent},
    {path:'displaybook',component:GetAllBooksComponent},
    {path:'quickview',component:QuickviewComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'order-placed',component:OrderPlacedComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
