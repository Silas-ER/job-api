import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}