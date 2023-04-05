import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/WishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  constructor(private wishlistService:WishlistService){}

  ngOnInit(): void {
    
  }
 getWishlistBook(){
  this.wishlistService.getWishlistBook().subscribe((responce)=>{
    console.log('get book', responce)
  })
 }
}
