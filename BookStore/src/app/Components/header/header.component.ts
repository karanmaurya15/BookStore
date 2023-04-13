import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BadageService } from 'src/app/Services/BadageService/badage.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  cartItemCount: any
  constructor(private router: Router, private dataService: DataService, private badageService: BadageService) {}
  token: any;
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
 
ngOnInit(){
  this.badageService.cartItemCount.subscribe((count:any)=>{
    console.log(count)
    this.cartItemCount = count;
  })
}
  

  searchBook(event:any){
    this.dataService.SendBookDetails(event.target.value);
  }
}
