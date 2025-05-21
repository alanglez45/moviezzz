import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-navbar.component.html',
})
export class MobileNavbarComponent {

  @Input() isOpen = false; // Asegúrate de tener este decorador @Input()
  @Output() closed = new EventEmitter<void>();

  closeNavbar() {
    this.closed.emit();
  }
}
