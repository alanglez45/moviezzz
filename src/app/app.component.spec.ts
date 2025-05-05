/*import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'streaming-service' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('streaming-service');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, streaming-service');
  });
});


let fixture = TestBed.createComponent(MiComponente);
let component = fixture.componentInstance;
fixture.detectChanges(); // actualiza el DOM

*/

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToastService } from './movies/services/toast.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  // 1. Configuración mínima del test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent], // Importamos el componente standalone
      providers: [
        {
          provide: ToastService,
          useValue: { // Mock simple del servicio
            getToastState: () => of({ message: 'Test message', show: true })
          }
        }
      ]
    });
  });

  // 2. Test básico de creación
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // 3. Test de la suscripción al toast
  it('should update toastState from service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Trigger la detección de cambios (que ejecuta ngOnInit)
    fixture.detectChanges();

    // Verificar que el estado se actualizó
    expect(app.toastState).toEqual({
      message: 'Test message',
      show: true
    });
  });

  // 4. Test del título
  it(`should have the 'MovieZzz' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MovieZzz');
  });
});