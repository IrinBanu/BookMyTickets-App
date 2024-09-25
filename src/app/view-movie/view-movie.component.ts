import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [],
  templateUrl: './view-movie.component.html',
  styles: ``
})
export class ViewMovieComponent implements OnInit {

movieName!:string;

movie:any;

constructor(private route: ActivatedRoute, private moviesservice:MoviesService){
  this.movieName=this.route.snapshot.params['id'];
 //this.movie=this.movies.find(obj=>obj.title==this.movieName);
}

  ngOnInit(): void {
this.movie=this.moviesservice.getMovieDetails(this.movieName);
  }
  

}
