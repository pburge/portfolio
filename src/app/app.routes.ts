import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [

	{ path: '', component: HomeComponent, title: 'Home' },  
	{ path: 'home', component: HomeComponent, title: 'Home' },
	{ path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
	{ path: 'resume', component: ResumeComponent, title: 'Resume' },
	{ path: 'contact', component: ContactComponent, title: 'Contact' },
	{ path: '**', component: PageNotFoundComponent, title: '404' }

];
