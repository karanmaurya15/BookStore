import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 token:any
  constructor(private http:HttpService) { 
    this.token = localStorage.getItem('token')
  }

  addBookToWishlist(reqData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.PostService('bookstore_user/add_wish_list/'+ reqData.bookid, {}, true, httpOptions)
  }
  getWishlistBook(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.GetService('bookstore_user/get_wishlist_items', true, httpOptions)
  }

  removeWishlistBook(reqData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.DeleteService('bookstore_user/remove_wishlist_item/'+ reqData?.product_id?._id, true, httpOptions)
  
  }
}
