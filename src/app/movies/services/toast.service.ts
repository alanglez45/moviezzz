import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<{ message: string, show: boolean }>({ message: '', show: false });

  show(message: string): void {
    this.toastSubject.next({ message, show: true });

    setTimeout(() => {
      this.hide();
    }, 6000);
  }

  hide(): void {
    this.toastSubject.next({ message: '', show: false });
  }

  getToastState() {
    return this.toastSubject.asObservable();
  }

}
