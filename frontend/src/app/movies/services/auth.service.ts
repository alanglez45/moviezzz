import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../enviroments/enviroment';
import { Observable, of, catchError, map } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = environment.apiUrl;
    private loginPath = environment.loginPath;

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string): Observable<string | { errorMessages: string[] } | null> {
        return this.http
            .post<AuthResponse>(`${this.API_URL}${this.loginPath}`, { email, password })
            .pipe(
                map((response: AuthResponse) => {
                    if (response.isSuccess && response.result.token) {
                        return response.result.token;
                    }
                    return null;
                }),
                catchError((error) => {
                    if (error.error?.errorMessages) {
                        // si la API retornó mensajes de error
                        return of({ errorMessages: error.error.errorMessages });
                    }
                    return of(null);
                })
            );
    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    saveToken(token: string): void {
        localStorage.setItem('token', token);
    }
}