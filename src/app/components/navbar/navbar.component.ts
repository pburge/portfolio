import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  imports: [
	RouterModule,
	NgbDatepickerModule
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

	private offcanvasService = inject(NgbOffcanvas);
	closeResult: WritableSignal<string> = signal('');

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' });
	}
}