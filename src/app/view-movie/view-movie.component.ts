import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-movie.component.html',
  styles: ``
})
export class ViewMovieComponent implements OnInit {

  
//movieName!:string;
movieId!:number;

movie:any;

constructor(private route: ActivatedRoute, private moviesservice:MoviesService){
  this.movieId=this.route.snapshot.params['id'];
  //this.movie=this.movies.find(obj=>obj.title==this.movieName);
}

ngOnInit(): void {
  this.movie=this.moviesservice.getMovieById(this.movieId);
}

addToCart(movie:any){
  
  //1. find existing cart items and add item in that list
    const cartItemsStr=localStorage.getItem('CART');
    const cartItems=cartItemsStr != null ? JSON.parse(cartItemsStr):[];

    //add item
    cartItems.push(movie);

    //store in db
    localStorage.setItem('CART',JSON.stringify(cartItems));

//redirect to cart page
    alert('Added to cart successfully');
window.location.href='/cart'
  }
  

}
