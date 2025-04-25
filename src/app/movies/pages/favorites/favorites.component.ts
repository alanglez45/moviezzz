import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './favorites.component.html',
})
export default class FavoritesComponent {
  public moviesService = inject(MoviesService);

}
