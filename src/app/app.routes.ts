import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CardsComponent } from './cards/cards.component';
import { Register2Component } from './register2/register2.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'movies', component:MoviesListComponent},
    {path:'movies/:id', component:ViewMovieComponent},
    {path:'login', component:LoginComponent},
   // {path:'register', component:RegisterComponent},
    {path:'register2', component:Register2Component},
    {path:'cart', component:CartComponent},
    {path:'payment', component:PaymentComponent},
    {path:'cards', component:CardsComponent},
    {path:'edit-profile', component:ProfileEditComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];
