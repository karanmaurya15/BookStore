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


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    GetAllBooksComponent,
    DisplaybookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,MatInputModule,HttpClientModule,
    BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
