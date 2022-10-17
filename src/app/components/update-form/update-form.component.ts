import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieListService } from 'src/app/services/movie-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  user : any;
  updateData : any;
  movie : any;
  constructor(private movieService : MovieListService,private route : ActivatedRoute,private router : Router) { }

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


onUpdateClick(user : Object,id: string){
   this.movieService.updateTransactionDetails(user,id).subscribe();
 }

  onSubmit(movie : any){
    this.updateData = this.ticketBooking.value;
    this.updateData.movie = this.user.movie;
    this.updateData.showTime = this.user.showTime;
    this.updateData.movieID = this.user.id;
    this.updateData.seatNumber = this.movieService.seatNumberGenerator(this.updateData.no_T); //Seat Numbers(Not unique Randomly Generated)
    this.updateData.transID = this.movieService.makeTransactionid(12); // Transaction ID
    this.updateData.transDateTime = this.movieService.getDateTime(); // Transaction Date and Time
    this.updateData.price = 210 * parseInt(this.updateData.no_T) + " INR";
   
    var updateTickets = this.updateData.no_T - this.user.no_T;
    this.onUpdateClick(this.updateData,this.user.id);
    this.movieService.updateMovieDetails(movie,String(movie.id),updateTickets).subscribe();
    this.router.navigate(['success']);
  }
  ticketBooking = new FormGroup({
    name : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email]),
    no_T : new FormControl(0,Validators.required),
    date : new FormControl(null,Validators.required),
    pNo : new FormControl(null,[Validators.required,Validators.minLength(10)])
  })
}
