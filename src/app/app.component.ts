import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SidenavComponent,
    RouterModule,
],
  templateUrl: './app.component.html',
  styleUrls: [
	'./app.component.scss', 
],
  standalone: true
})
export class AppComponent {
  title = 'portfolio';
}
