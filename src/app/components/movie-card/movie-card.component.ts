import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movies : any;
  
  constructor(private movieService : MovieListService,private router : Router) { }
  showLoader : boolean = false;
  ngOnInit(): void {
    this.showLoader = true;
    this.movieService.getData().subscribe(response=>{
      this.movies=response;
      this.showLoader = false;
    })
  }
  redirectTo(movie:any){
    console.log(movie);
    this.router.navigate(['movieDetails/'+movie.id]);
  }
}
