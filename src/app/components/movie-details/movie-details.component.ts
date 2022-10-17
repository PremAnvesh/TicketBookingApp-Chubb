import { Component, OnInit } from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie : any;
  constructor(private route:ActivatedRoute,private movieService : MovieListService,private router : Router) {}
  ngOnInit(): void {
    let movieID = this.route.snapshot.paramMap.get('id')
    console.log(movieID);
    const passmovieID: string = movieID !== null ? movieID : '';
    this.movieService.getMovieDetails(parseInt(passmovieID)).subscribe(response=>{this.movie=response});
  }
  
  onBookClick(movie: any){
      this.router.navigate(['bookTicket/'+movie.id]);
  }
}
