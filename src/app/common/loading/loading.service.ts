import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LoadingService {

  isLoading = new Subject<boolean>();
  show() {
    this.isLoading.next(true);
    this.isLoading.subscribe(val => console.log(val));
  }
  hide() {
    this.isLoading.next(false);
    this.isLoading.subscribe(val => console.log(val));
  }
}
