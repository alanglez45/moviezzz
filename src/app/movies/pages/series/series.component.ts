import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './series.component.html',
})
export default class SeriesComponent { }
