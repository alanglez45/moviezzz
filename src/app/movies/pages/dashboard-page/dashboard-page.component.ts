import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MobileNavbarComponent, NgIf],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  titleService = inject(TitleService);

  mobileNavOpen = false;

  constructor(public router: Router) { }


  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  onMobileNavClosed() {
    this.mobileNavOpen = false;
  }

  shouldShowSearch(): boolean {
    // console.log(this.router.url);
    return !this.router.url.endsWith('/dashboard/settings');
  }
}
