//aservice
import { Injectable, signal } from '@angular/core';
import { moviesMock } from '../../../assets/data/movies.mock';

@Injectable({
    providedIn: 'root', // Automatically registers the service as a singleton
})
export class MoviesService {

    movies = signal(moviesMock);
}