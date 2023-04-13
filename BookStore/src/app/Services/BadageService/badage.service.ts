import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadageService {

  constructor() { }

  private cartItemCountSubject = new BehaviorSubject<number>(0);
  public cartItemCount = this.cartItemCountSubject.asObservable();

  updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
  }
}
