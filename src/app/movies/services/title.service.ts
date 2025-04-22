import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private titleMap: { [key: string]: string } = {
        '/dashboard/genres': 'Genres',
        '/dashboard/favorites': 'Favorites',
        '/dashboard/series': 'Series',
        '/dashboard/movies': 'Movies',
        '/dashboard/settings': 'Settings'
    };

    currentTitle: string = '';

    constructor(private router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.updateTitle(event.url);
        });
    }

    private updateTitle(url: string): void {
        const matchedRoute = Object.keys(this.titleMap).find(key => url.includes(key));
        this.currentTitle = matchedRoute ? this.titleMap[matchedRoute] : 'Genres';
    }
}