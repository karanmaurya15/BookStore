import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit{
  constructor(private dataService: DataService, private cartservice:CartService) {}
  Book: any;
  ngOnInit(): void {
    this.dataService.getbookdetails.subscribe((result: any) => {
      this.Book = result;
      console.log('data of quickview',this.Book);
    });
  }
  addToCart(){
    let reqpayLoad= {
      bookid:this.Book.id,
    };
    console.log(reqpayLoad)
    console.log('bookid', this.Book._id)
    this.cartservice.addBookToCart(reqpayLoad).subscribe((res:any)=>{
      console.log(res)
    })
  }

  
}
