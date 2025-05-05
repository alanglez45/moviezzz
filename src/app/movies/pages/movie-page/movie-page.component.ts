import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MoviesJsonService } from '../../services/movies-json.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-page.component.html',
})
export class MoviePageComponent {
  private route = inject(ActivatedRoute);
  // private moviesService = inject(MoviesService);
  private moviesService = inject(MoviesJsonService);

  movie: any;

  constructor() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.movie = this.moviesService.movies().find(m => m.id === Number(id));
    // this.moviesService.getMovies().subscribe(movies => {
    //   this.movie = movies.find(m => m.id === Number(id));
    // });

    const id = Number(inject(ActivatedRoute).snapshot.paramMap.get('id'));
    inject(MoviesJsonService).getMovies().subscribe(movies => {
      this.movie = movies.find(m => m.id === id);
    });
  }
}
