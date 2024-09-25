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

 

}
