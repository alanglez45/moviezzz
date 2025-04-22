import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() set show(value: boolean) {
    this.isVisible = value;
  }
  isVisible: boolean = false;
}

