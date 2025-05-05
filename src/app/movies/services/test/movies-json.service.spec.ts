import { MoviesJsonService } from '../movies-json.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('MoviesJsonService', () => {
    let service: MoviesJsonService; // instancia del servicio
    const mockMovies = [ // datos falsos para las pruebas
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' }
    ];

    // beforeEach se ejecuta antes de cada prueba (it)
    beforeEach(() => {
        // configurar el módulo de testing
        TestBed.configureTestingModule({});

        // obtener una instancia  del servicio antes de cada prueba
        service = TestBed.inject(MoviesJsonService);

        // spyOn espía el método y lo reemplaza con el mock
        // and.returnValue devuelve el array mockMovies
        spyOn(service, 'getMovies').and.returnValue(of(mockMovies));
    });

    // verificar que el servicio se crea correctamente
    it('should be created', () => {
        expect(service).toBeTruthy(); // verificar que service no es null / undefined
    });

    describe('getMovies', () => {
        it('should return movies', (done) => {
            // llamar al método mockeado
            service.getMovies().subscribe(movies => {
                // verificar que solo son 2 películas
                expect(movies.length).toBe(2);

                // indicar que la prueba terminó
                done();
            });
        });
    });

    describe('getMovieById', () => {
        // verificar que encuentra una pelicula por id
        it('should find movie by id', (done) => {

            // buscar la película con el id 1
            service.getMovieById(1).subscribe(movie => {
                // verificar que el titulo coincida con el mock
                expect(movie?.title).toBe('Movie 1');
                done();
            });
        });
    });
});