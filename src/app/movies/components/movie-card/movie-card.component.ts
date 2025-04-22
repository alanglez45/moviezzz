import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieModalComponent } from "../movie-modal/movie-modal.component";
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MovieModalComponent],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() movie: any;
  isModalOpen = false;
  active = false;
  modalTitle = '';
  modalMessage = '';
  modalConfirmText = '';

  constructor(private toastService: ToastService) { }


  openModal(action: 'watch' | 'hide') {
    if (action === 'watch') {
      this.modalTitle = this.movie.title;
      this.modalMessage = this.movie.description;
      this.modalConfirmText = 'Watch movie';
    } else {
      this.modalTitle = `¿Ocultar ${this.movie.title}?`;
      this.modalMessage = 'Esta película no aparecerá más en tus recomendaciones.';
      this.modalConfirmText = 'Sí, ocultar';
    }
    this.isModalOpen = true;
    this.active = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleConfirm() {
    if (this.modalConfirmText === 'Play') {
      alert(`Reproduciendo: ${this.movie.title}`);
    } else {
      // alert(`"${this.movie.title}" ha sido ocultada`);
      this.toastService.show(`${this.movie.title} has been hidden!`);
    }
    this.closeModal();
  }

}
