import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MovieListService } from 'src/app/services/movie-list.service';
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  user : any;
  movie : any;
  constructor(private route : ActivatedRoute , private router : Router , private movieService : MovieListService) { }

  ngOnInit(): void {
    let userID = this.route.snapshot.paramMap.get('id');
    console.log(userID);
    const passuserID : string = userID !== null ? userID : '';
    this.movieService.getTransactionDetails(parseInt(passuserID))
    .subscribe((response) => {
       this.user = response;
       this.movieService.getMovieDetails(this.user.movieID).subscribe(res => {
        this.movie = res;
       })
    })
  }
 
onClickUpdate(user : any ,movie : any){
  var updateTickets = -user.no_T;
  this.movieService.updateMovieDetails(movie,String(movie.id),updateTickets).subscribe();
  this.movieService.deleteTransaction(user.id);
}

}
