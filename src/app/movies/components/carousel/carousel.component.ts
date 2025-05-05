import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MoviesService } from '../../services/movies.service';
import { MoviesJsonService } from '../../services/movies-json.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  // public moviesService = inject(MoviesService);

  @ViewChild('carousel') carouselRef!: ElementRef<HTMLElement>;
  @ViewChild('prevBtn') prevBtnRef!: ElementRef<HTMLElement>;
  @ViewChild('nextBtn') nextBtnRef!: ElementRef<HTMLElement>;

  movies$: Observable<any[]>;
  private moviesService = inject(MoviesJsonService);

  // constructor(public moviesService: MoviesService) { }
  constructor() {
    this.movies$ = this.moviesService.getMovies();
  }


  ngAfterViewInit(): void {
    this.setupCarousel();
  }

  private setupCarousel(): void {
    const carousel = this.carouselRef.nativeElement;
    const prevBtn = this.prevBtnRef.nativeElement;
    const nextBtn = this.nextBtnRef.nativeElement;

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      // Controlar visibilidad del botón anterior
      if (scrollLeft <= 10) {
        prevBtn.classList.add('hidden');
      } else {
        prevBtn.classList.remove('hidden');
      }

      // Controlar visibilidad del botón siguiente
      if (scrollLeft >= maxScroll - 10) {
        nextBtn.classList.add('hidden');
      } else {
        nextBtn.classList.remove('hidden');
      }
    });

    // Configurar evento para botón anterior
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -carousel.clientWidth,
        behavior: 'smooth'
      });
    });

    // Configurar evento para botón siguiente
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: carousel.clientWidth,
        behavior: 'smooth'
      });
    });

    // Estado inicial del botón anterior
    if (carousel.scrollLeft <= 10) {
      prevBtn.classList.add('hidden');
    }
  }

}

