import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaybookComponent } from './Components/displaybook/displaybook.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { AuthguardService } from './Services/AuthguardService/authguard.service';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './Components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    GetAllBooksComponent,
    DisplaybookComponent,
    QuickviewComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,MatInputModule,HttpClientModule,FormsModule,MatIconModule,
    BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,MatToolbarModule,MatMenuModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
