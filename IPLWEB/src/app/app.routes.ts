import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TeamsComponent } from './teams/teams';
import { PlayersComponent } from './players/players';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'players', component: PlayersComponent }
];
