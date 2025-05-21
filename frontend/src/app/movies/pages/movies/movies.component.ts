import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './movies.component.html',
})
export default class MoviesComponent { }
