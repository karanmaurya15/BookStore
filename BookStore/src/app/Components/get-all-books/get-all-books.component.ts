import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';


@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit{

  bookArray=[];
  ngOnInit(){
    this.getAllBooks();

  }

  constructor(private bookService:BookService){}

  getAllBooks(){
    this.bookService.getAllBook().subscribe((responce:any )=>{
      console.log('Book Api is calling ', responce)
      this.bookArray=responce.result
      console.log('data', this.bookArray);

    })
  }
}
