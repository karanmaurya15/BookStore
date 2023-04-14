import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  originalBookArray = [];
  sortedBookArray = [];

  ngOnInit() {
    this.getAllBooks();
  }

  constructor(private bookService: BookService) {}

  getAllBooks() {
    this.bookService.getAllBook().subscribe((response: any) => {
      console.log('Book Api is calling ', response)
      this.originalBookArray = response.result
      this.sortedBookArray = [...this.originalBookArray]; // spread operator to concatenate the arrays. 
      console.log('data', this.originalBookArray);
    })
  }

  lowtohigh() {
    console.log(this.sortedBookArray)
    this.sortedBookArray = this.originalBookArray.sort((a: any, b: any) => a.discountPrice - b.discountPrice);
    console.log('low to high', this.originalBookArray);
  }

  hightolow() {
    this.sortedBookArray = this.originalBookArray.sort((a: any, b: any) => b.price - a.price);
    console.log('high to low', this.sortedBookArray);
  }

  newestarrivals() {
    this.sortedBookArray = [...this.originalBookArray].reverse(); 
    console.log('newest', this.sortedBookArray);
  }
}
