import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token:any

  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token');
   }


  getAllBook(){
    let httpOption = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.GetService('bookstore_user/get/book', true, httpOption)

  }
}
