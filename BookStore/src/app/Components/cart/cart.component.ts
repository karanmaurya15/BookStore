import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/CartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartitems: any = []
  addressType: any[] = ['Home', 'work', 'others'];
  createForm!: FormGroup
  customerDetails = false;
  address = true;
  placeOrder = true;
  summary = true;
  continue = true;
  Book: any;
  items: any

  constructor(private cartService: CartService, private snackbar: MatSnackBar, private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.getAllBooks()
    this.createForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  getAllBooks() {
    this.cartService.getCartBook().subscribe((responce: any) => {
      console.log(responce);
      this.cartitems = responce.result
      console.log('items added', responce)
    })
  }

  removeBook(book: any) {
    console.log(book);
    this.cartService.removeCartItems(book).subscribe((responce: any) => {
      console.log('remove book', responce)
      location.reload();
    })
    this.snackbar.open('Book Removed', '', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
  increaseQty(item: any) {
    item.quantityToBuy += 1;
    console.log('item added');
    this.itemInCart(item);
  }

  decreaseQty(item: any) {
    if (item.quantityToBuy > 1) {
      item.quantityToBuy -= 1;
      console.log('item removed');
      this.itemInCart(item);
    }
  }

  itemInCart(book: any) {
    let data = {
      quantityToBuy: book.quantityToBuy
    };
    this.cartService.itemQuantity(book._id, data).subscribe((res) => {
      console.log('quantity updated', res);
    });
  }

  addressDetails() {
    this.address = false;
    this.placeOrder = false;
  }

  onContinue() {
    this.customerDetails = true;
    if (this.createForm.valid) {
      this.summary = false;
      this.continue = false;
      console.log('customers Details', this.createForm.value);
      let data = {
        addressType: this.addressType,
        fullAddress: this.createForm.value.address,
        city: this.createForm.value.city,
        state: this.createForm.value.state,
      };
      console.log('data', data)
      this.cartService.customerDetails(data).subscribe((response: any) => {
        console.log(response)
      })
      this.snackbar.open('Customers Details filled Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
    }
  }
  orderPlaced() {
    let orders: Array<any> = []
    for (this.Book of this.cartitems) {
      let Book = {
        product_id: this.Book.product_id._id,
        product_name: this.Book.product_id.bookName,
        product_quantity: this.Book.product_id.quantity,
        product_price: this.Book.product_id.price,
      }
      orders.push(Book)
    }
    let payload = {
      orders: orders
    }
    this.cartService.Order(payload).subscribe((response) => {
      console.log(response);
    })
    this.snackbar.open('Order is Successfully placed!', '', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
}
