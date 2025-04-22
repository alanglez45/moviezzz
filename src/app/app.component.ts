import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './movies/components/toast/toast.component';
import { ToastService } from './movies/services/toast.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'MovieZzz';

  toastState = { message: '', show: false };

  constructor(private toastService: ToastService) {
    this.toastService.getToastState().subscribe(state => {
      this.toastState = state;
    });
  }
}


