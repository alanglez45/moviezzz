import { Routes } from '@angular/router';
import { LoginComponent } from './movies/pages/login-page/login.component';
import { DashboardPageComponent } from './movies/pages/dashboard-page/dashboard-page.component';
import GenresComponent from './movies/pages/genres/genres.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        redirectTo: 'dashboard/genres',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        children: [
            {
                path: 'genres',
                loadComponent: () => import('./movies/pages/genres/genres.component')
                // component: GenresComponent
            },
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

        ]
    },


    {
        path: '**',
        redirectTo: 'dashboard/genres'
    },
];
