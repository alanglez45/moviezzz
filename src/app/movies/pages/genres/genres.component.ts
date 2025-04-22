import { Component, inject, input, OnInit } from '@angular/core';
// import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [MovieCardComponent, CarouselComponent],
  templateUrl: './genres.component.html',
})
export default class GenresComponent {
  title = 'Genres'
  // public moviesService = inject(MoviesService);
}
