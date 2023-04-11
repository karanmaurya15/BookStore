import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { WishlistService } from 'src/app/Services/WishlistService/wishlist.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit{
  constructor(private dataService: DataService, private cartservice:CartService, private snackbar: MatSnackBar, private wishlistServisce:WishlistService) {}
  Book: any;
  comment: any;
  feedBackList:any
  ngOnInit(): void {
    this.dataService.getbookdetails.subscribe((result: any) => {
      this.Book = result;
      console.log('data of quickview',this.Book);
      
    });
    this.getFeedBackList()
  }
  addToCart(){
    let reqpayLoad= {
      bookid:this.Book._id,
    };
    console.log(reqpayLoad)
    console.log('bookid', this.Book._id)
    this.cartservice.addBookToCart(reqpayLoad).subscribe((res:any)=>{
      console.log(res)
    })
    this.snackbar.open('Book Added to Cart', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }
  addToWishlist(){
    let reqpayLoad= {
      bookid:this.Book._id,
    };
    this.wishlistServisce.addBookToWishlist(reqpayLoad).subscribe((result)=>{
      console.log('added to wishlist',result)
    })
    this.snackbar.open('Book Added to Wishlist', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }
  sumitFeedBack(){
    let data = {
      comment: this.comment,
      rating: '4',
      // bookid: this.Book._id,
    };
    console.log(data)
    this.cartservice.addFeedback(data, this.Book._id).subscribe((res:any)=>{
      console.log('feedBack Added', res);
    })
  }
   getFeedBackList(){
    this.cartservice.getAllFeedBack(this.Book._id).subscribe((res:any)=>{
      console.log(res)
      this.feedBackList= res.result;
      console.log(this.feedBackList)
    })
   }
}
