import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClinet: HttpClient) { }

  baseUrl = 'https://bookstore.incubation.bridgelabz.com/';

  PostService( url: string,reqData: any,token: boolean = false, httpOption: any) {
    return this.httpClinet.post(this.baseUrl +url,reqData,token && httpOption);
  }

  GetService(url: string, token: boolean = true, httpOption: any) {
    return this.httpClinet.get(this.baseUrl + url, token && httpOption);
  }

  DeleteService(url: string, token: boolean = true, httpOption: any) {
    return this.httpClinet.delete(this.baseUrl + url, token && httpOption)
  }
  PutService(url: string, reqData:any, token: boolean = true, httpOption: any){
    return this.httpClinet.delete(this.baseUrl + url, token && httpOption)}
   
}
