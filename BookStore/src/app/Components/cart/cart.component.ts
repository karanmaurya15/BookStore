import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/CartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartitems: any = []
  
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks() {
    this.cartService.getCartBook().subscribe((responce: any) => {
      console.log(responce);
      this.cartitems = responce.result
      console.log('items added', responce)
      console.log(this.cartitems)
    })
  }

  removeBook(book:any){
    console.log(book);
    this.cartService.removeCartItems(book).subscribe((responce:any)=>{
      console.log('remove book', responce)
      
    })
  }
  increaseQty(item:any) {
    item.quantityToBuy++;
    console.log('item added')
  }

  decreaseQty(item :any) {
    if (item.quantityToBuy > 1) {
      item.quantityToBuy--;
      console.log('item removed')
    }
  }
}
