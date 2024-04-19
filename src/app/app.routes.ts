import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConversionComponent } from './conversion/conversion.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'conversion', component: ConversionComponent},
    { path: 'about', component: AboutComponent},
    { path: '', redirectTo : '/home' , pathMatch: 'full'},
    { path: '404', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent},

];
