import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';
import { ToastService } from '../../services/toast.service';
import { Router, provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';


describe('MovieCardComponent', () => {
    let component: MovieCardComponent;
    let fixture: ComponentFixture<MovieCardComponent>;
    let toastServiceSpy: jasmine.SpyObj<ToastService>;
    let router: Router;

    const mockMovie = {
        id: 1,
        title: 'Test Movie',
        description: 'Test Description',
        image: 'test-image.jpg'
    };

    beforeEach(async () => {
        // crear spy para ToastService
        toastServiceSpy = jasmine.createSpyObj('ToastService', ['show']);

        await TestBed.configureTestingModule({
            imports: [MovieCardComponent],
            providers: [
                { provide: ToastService, useValue: toastServiceSpy },
                provideRouter(routes) // proveer el router
            ]
        }).compileComponents();

        // crear instancia del componente
        fixture = TestBed.createComponent(MovieCardComponent);
        component = fixture.componentInstance;

        component.movie = mockMovie;
        router = TestBed.inject(Router);
        spyOn(router, 'navigate'); // espiar el metodo navigate
        fixture.detectChanges();
    });

    // verificar que el componente se creo
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // navegar a /dashboard/movie/id
    describe('watchMovie', () => {
        it('should navigate to movie details', () => {
            component.watchMovie();
            expect(router.navigate).toHaveBeenCalledWith(['/dashboard/movie', mockMovie.id]);
        });
    });

    // button ver pelicula
    describe('openModal', () => {
        /* it('should set up modal for watching', () => {
             component.openModal('watch');
 
             // Verificar que el modal se abrió 
             expect(component.isModalOpen).toBeTrue();
             expect(component.modalTitle).toBe(mockMovie.title);
             expect(component.modalMessage).toBe(mockMovie.description);
             expect(component.modalConfirmText).toBe('Play');
         });*/

        // button ocultar pelicula 
        it('should set up modal for hiding', () => {
            component.openModal('hide');

            // Verificar que el modal se abrió 
            expect(component.isModalOpen).toBeTrue();
            expect(component.modalTitle).toBe(`¿Ocultar ${mockMovie.title}?`);
            expect(component.modalMessage).toBe('Esta película no aparecerá más en tus recomendaciones.');
            expect(component.modalConfirmText).toBe('Sí, ocultar');
        });
    });

    describe('closeModal', () => {
        it('should close the modal', () => {
            // Abrir modal 
            component.isModalOpen = true;
            // cerrar modal
            component.closeModal();
            // Verificar que el modal se cerró 
            expect(component.isModalOpen).toBeFalse();
        });
    });

    describe('handleConfirm', () => {
        it('should handle play confirmation', () => {
            spyOn(window, 'alert');
            component.modalConfirmText = 'Play';
            component.handleConfirm();

            expect(window.alert).toHaveBeenCalledWith(`Reproduciendo: ${mockMovie.title}`);
            expect(component.isModalOpen).toBeFalse();
        });

        it('should handle hide confirmation', () => {
            component.modalConfirmText = 'Sí, ocultar';
            component.handleConfirm();

            expect(toastServiceSpy.show).toHaveBeenCalledWith(`${mockMovie.title} has been hidden!`);
            expect(component.isModalOpen).toBeFalse();
        });
    });

    describe('Template', () => {
        it('should display movie image with correct src and alt', () => {
            const img = fixture.nativeElement.querySelector('img');
            expect(img.src).toContain(mockMovie.image);
            expect(img.alt).toBe(mockMovie.title);
        });

        it('should call watchMovie when Watch button is clicked', () => {
            spyOn(component, 'watchMovie');
            const button = fixture.nativeElement.querySelector('.watch-btn');
            button.click();
            expect(component.watchMovie).toHaveBeenCalled();
        });

        it('should call openModal with "hide" when Hide button is clicked', () => {
            spyOn(component, 'openModal');
            const button = fixture.nativeElement.querySelector('.hide-btn');
            button.click();
            expect(component.openModal).toHaveBeenCalledWith('hide');
        });

        it('should show modal when isModalOpen is true', () => {
            component.isModalOpen = true;
            fixture.detectChanges();
            const modal = fixture.nativeElement.querySelector('app-movie-modal');
            expect(modal).toBeTruthy();
        });
    });
});