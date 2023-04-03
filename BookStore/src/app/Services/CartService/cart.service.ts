import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any;

  constructor(private http:HttpService) {
    this.token= localStorage.getItem('token')
   }

   addBookToCart(reqData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
         Authorization : this.token  
      })
    }
    return this.http.PostService('',reqData,true,httpOptions)
   }
}
