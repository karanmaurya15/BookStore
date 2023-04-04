import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  constructor(private router: Router, private dataService: DataService) {}
  token: any;
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  searchBook(event:any){
    this.dataService.SendBookDetails(event.target.value);
  }
}
