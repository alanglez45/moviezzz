import { Component, inject, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MobileNavbarComponent],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  titleService = inject(TitleService);

  mobileNavOpen = false;

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  onMobileNavClosed() {
    this.mobileNavOpen = false;
  }
}
