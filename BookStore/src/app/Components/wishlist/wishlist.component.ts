import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/WishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any = []

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.getWishlist();
  }
  getWishlist(){
    this.wishlistService.getWishlistBook().subscribe((response :any) =>{
      console.log(response);
      this.wishlistItems = response.result
      console.log(this.wishlistItems)
      this.wishlistItems.reverse();
    })
  }
  removebook(book:any){
    console.log(book)
    this.wishlistService.removeWishlistBook(book).subscribe((result:any)=>{
      console.log('book remove',result)
    })
  }

}
