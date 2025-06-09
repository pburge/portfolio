import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [
	RouterModule,
	NgbCollapseModule,
	NgbNavModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {

	public isMenuCollapsed: boolean = true;

	public themeMode: string = 'Dark Mode';
	public themeIcon: string = 'fa-moon';

	  toggleDarkMode() {
		const currentTheme = document.body.getAttribute('data-bs-theme');

		if (currentTheme === 'light') {
			this.themeIcon = 'fa-sun';
			this.themeMode = 'Light Mode';
			document.body.setAttribute('data-bs-theme', 'dark');
		} else {
			this.themeIcon = 'fa-moon';
			this.themeMode = 'Dark Mode';
			document.body.setAttribute('data-bs-theme', 'light');
		}
  }
}