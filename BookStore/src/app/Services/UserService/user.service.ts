import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private http:HttpService){ }

  signup(data:any){
   let httpOptions ={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
   }
   console.log(data)
   return this.http.PostService('bookstore_user/registration',data,false,httpOptions)
  }

  login(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization : this.token  
      })
    }
    console.log(data);
    return this.http.PostService('bookstore_user/login', data, true, httpOptions);
  }

}
