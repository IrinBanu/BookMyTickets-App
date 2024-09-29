import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'movies', component:MoviesListComponent},
    {path:'movies/:id', component:ViewMovieComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'welcome', component:WelcomeUserComponent},
    {path:'logout', component:LogoutComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];
