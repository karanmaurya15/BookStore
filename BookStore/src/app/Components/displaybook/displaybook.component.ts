import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {
  @Input() childArray: any;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getbookdetails.subscribe((res: any) => {
      console.log('this is happen', res);
    });
  }
  onBookclick(book: any) {
    this.dataService.SendBookDetails(book);
  }
}
