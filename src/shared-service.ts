import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedOption = new BehaviorSubject<number | null>(null);
  selectedOption$ = this.selectedOption.asObservable();

  updateSelectedOption(option: number) {
    this.selectedOption.next(option); // Emit new value
  }
}
