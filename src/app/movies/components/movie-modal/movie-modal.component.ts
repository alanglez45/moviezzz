import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [],
  templateUrl: './movie-modal.component.html',
})
export class MovieModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() message = '';
  @Input() confirmText = '';
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();


  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }

  closeModal() {
    this.close.emit();
  }
}
