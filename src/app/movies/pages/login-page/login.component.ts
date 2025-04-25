import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.onSubmit();
  }
  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please input your email and password';
      // console.log('Please input your email and password')
      return;
    }
    console.log('login')
    // Simular carga
    // this.isLoading = true;
    this.errorMessage = '';

    // Simular llamada a API de autenticación
    setTimeout(() => {
      // Aquí iría la lógica real de autenticación
      // Por ahora simulamos un login exitoso con cualquier credencial
      // this.isLoading = false;

      // Guardar token simulado en localStorage
      // localStorage.setItem('authToken', 'token');

      // redirect to dashboard
      this.router.navigate(['/dashboard/movies']);
    }, 1500);
  }


}
