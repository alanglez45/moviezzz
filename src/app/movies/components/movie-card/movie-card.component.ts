import { Component, Input } from '@angular/core';
import { MovieModalComponent } from "../movie-modal/movie-modal.component";
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

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

  constructor(private toastService: ToastService, private router: Router) {
  }


  openModal(action: 'watch' | 'hide') {
    if (action === 'watch') {
      this.modalTitle = this.movie.title;
      this.modalMessage = this.movie.description;
      this.modalConfirmText = 'Play';
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
      this.toastService.show(`${this.movie.title} has been hidden!`);
    }
    this.closeModal();
  }

  watchMovie() {
    this.router.navigate(['/dashboard/movie', this.movie.id]);
  }



}
