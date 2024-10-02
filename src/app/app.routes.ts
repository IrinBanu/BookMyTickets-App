import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'movies', component:MoviesListComponent},
    {path:'movies/:id', component:ViewMovieComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'cart', component:CartComponent},
    {path:'payment', component:PaymentComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];
