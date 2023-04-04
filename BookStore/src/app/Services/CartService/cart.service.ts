import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;

  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token')
  }

  addBookToCart(reqData: any) {
    this.token = localStorage.getItem('token')
    console.log('token', this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.PostService('bookstore_user/add_cart_item/'+ reqData.bookid, {}, true, httpOptions)
  }
   getCartBook(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.GetService('bookstore_user/get_cart_items',true,httpOptions);
   }
  removeCartItems(reqData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.DeleteService('bookstore_user/remove_cart_item/'+ reqData._id, true,httpOptions)
  }
}
