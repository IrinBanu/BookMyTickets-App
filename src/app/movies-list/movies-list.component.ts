import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './movies-list.component.html',
  styles: ``
})
export class MoviesListComponent  implements OnInit{

movies!:any[];

language!:string;
movieType!:string;
price!:number;
minPrice!:number;
maxPrice!:number;
  

constructor(private moviesservice:MoviesService){
console.log('MoviesListComponent'); 
}
 ngOnInit(): void {
   console.log('OnInit Method Called');
   this.movies=this.moviesservice.getAllMovies();
   console.log('movies', this.movies); 
 };

reset(){
  this.movies=this.moviesservice.getAllMovies();
}

 applyFilter(){
  alert("language" + this.language);
 alert("movieType" + this.movieType);

 if(this.language) {
this.movies=this.movies.filter(obj=>obj.language.includes(this.language));
  
 }

 if(this.movieType){
  console.log('movietype called');
  this.movies=this.movies.filter(obj=>obj.description.includes(this.movieType));
 }

if(this.minPrice && this.maxPrice){
  console.log('mini to max price');
  console.table(this.movies);
  this.movies=this.movies.filter(obj=>obj.price>=this.minPrice && obj.price<=this.maxPrice);
}

}
}
