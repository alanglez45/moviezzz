import { Routes } from '@angular/router';
import { LoginComponent } from './movies/pages/login-page/login.component';
import { DashboardPageComponent } from './movies/pages/dashboard-page/dashboard-page.component';
import GenresComponent from './movies/pages/genres/genres.component';
import { MoviePageComponent } from './movies/pages/movie-page/movie-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        redirectTo: 'dashboard/movies',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        children: [
            {
                path: 'favorites',
                loadComponent: () => import('./movies/pages/favorites/favorites.component')
                // component: FavoritesComponent
            },
            {
                path: 'movies',
                loadComponent: () => import('./movies/pages/movies/movies.component')
                // component: MoviesComponent
            },
            {
                path: 'series',
                loadComponent: () => import('./movies/pages/series/series.component')
                // component: SeriesComponent
            },
            {
                path: 'settings',
                loadComponent: () => import('./movies/pages/settings/settings.component')
                // component: SettingsComponent
            },
            {
                path: '',
                component: GenresComponent,
                pathMatch: 'full'
            },
            {
                path: 'movie/:id',
                component: MoviePageComponent,
                pathMatch: 'full'
            },

        ]
    },


    {
        path: '**',
        redirectTo: 'dashboard/movies'
    },
];
