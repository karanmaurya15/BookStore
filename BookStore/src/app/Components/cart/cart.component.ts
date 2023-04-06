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

  createForm!: FormGroup
  customerDetails = false;
  address = true;
  placeOrder = true;
  summary = true;
  continue = true;


  constructor(private cartService: CartService, private snackbar: MatSnackBar, private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.getAllBooks()
    this.createForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      addressType: ['', Validators.required]
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
      this.getAllBooks();
    })
    this.snackbar.open('Book Removed', '', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
  increaseQty(item: any) {
    item.quantityToBuy++;
    console.log('item added')
  }

  decreaseQty(item: any) {
    if (item.quantityToBuy > 1) {
      item.quantityToBuy--;
      console.log('item removed')
    }
  }

  addressDetails() {
    this.address = false;
    this.placeOrder = false;
  }

  onContinue() {
    this.customerDetails = true;
    console.log(this.customerDetails);
    if (this.createForm.valid) {
      this.summary = false;
      this.continue = false;
      console.log('customers Details is callled', this.createForm.value);
      let data = {
        fullname: this.createForm.value.fullName,
        mobileNumber: this.createForm.value.mobileNumber,
        address: this.createForm.value.address,
        city: this.createForm.value.city,
        state: this.createForm.value.state,
        addressType: this.createForm.value.addressType,
      };
      this.cartService.customerDetails(data).subscribe((response: any) => {
        console.log('details', response)
      })
      this.snackbar.open('Customers Details filled Sucessfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
    }
  }
}
