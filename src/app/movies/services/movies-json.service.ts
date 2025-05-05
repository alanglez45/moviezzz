import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesJsonService {


  private readonly moviesData = import('../../../data/movies.mock.json')
    .then(m => m.default);

  getMovies(): Observable<any[]> {
    return from(this.moviesData);
  }

  getMovieById(id: number): Observable<any> {
    return this.getMovies().pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }
}