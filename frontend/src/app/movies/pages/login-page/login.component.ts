import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  // isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.onSubmit();
  }
  // onSubmit() {
  //   if (!this.email || !this.password) {
  //     this.errorMessage = 'Please input your email and password';
  //     // console.log('Please input your email and password')
  //     return;
  //   }
  //   console.log('login')
  //   // Simular carga
  //   // this.isLoading = true;
  //   this.errorMessage = '';

  //   // Simular llamada a API de autenticación
  //   setTimeout(() => {
  //     // Aquí iría la lógica real de autenticación
  //     // Por ahora simulamos un login exitoso con cualquier credencial
  //     // this.isLoading = false;

  //     // Guardar token simulado en localStorage
  //     // localStorage.setItem('authToken', 'token');

  //     // redirect to dashboard
  //     this.router.navigate(['/dashboard/movies']);
  //   }, 1500);
  // }

  onSubmit(): void {
    // validacion simple 
    if (!this.email || !this.password) {
      this.errorMessage = 'Please input your email and password';
      return;
    }
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (typeof response === 'string') {
          this.authService.saveToken(response);
          const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard/movies';
          this.router.navigateByUrl(returnUrl);
        } else if (response?.errorMessages) {
          // si hay mensajes de error, mostrar el primero
          this.errorMessage = response.errorMessages[0];
        } else {
          this.errorMessage = 'Invalid credentials';
        }
      },
      error: () => {
        // Manejo genérico de errores inesperados
        this.errorMessage = 'An unexpected error occurred.';
      }
    });
  }
}

