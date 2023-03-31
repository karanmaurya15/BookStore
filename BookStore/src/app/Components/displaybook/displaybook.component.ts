import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent {
  @Input() childArray:any;
}
