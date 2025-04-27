import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-page.component.html',
})
export class MoviePageComponent {
  private route = inject(ActivatedRoute);
  private moviesService = inject(MoviesService);

  movie: any;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.moviesService.movies().find(m => m.id === Number(id));
  }
}
