import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { MovieListService } from 'src/app/services/movie-list.service';
@Component({
  selector: 'app-ticket-booking-form',
  templateUrl: './ticket-booking-form.component.html',
  styleUrls: ['./ticket-booking-form.component.css']
})
export class TicketBookingFormComponent implements OnInit {
  movie  : any
  jsonData : any
  constructor(private movieService : MovieListService,private route : ActivatedRoute, private router : Router) {}

  ticketBooking = new FormGroup({
    name : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email]),
    no_T : new FormControl(0,Validators.required),
    date : new FormControl(null,Validators.required),
    pNo : new FormControl(null,[Validators.required,Validators.minLength(10),])
  });
  ngOnInit(): void {
    let movieID = this.route.snapshot.paramMap.get('id');
    console.log(movieID);
    const passmovieID: string = movieID !== null ? movieID : '';
    this.movieService.getMovieDetails(parseInt(passmovieID))
    .subscribe(response=>{this.movie=response})
    console.log(this.movie);
  }
    

  onBookClickUpdate(movie:Object, id:string, ticketsBooked:number){
    this.movieService.updateMovieDetails(movie,id,ticketsBooked).subscribe();
  }


  //Form Submit
  onSubmit(){
    //Combining Movie and User Data
    this.jsonData = this.ticketBooking.value;
    this.jsonData.movie = this.movie.name;
    this.jsonData.showTime = this.movie.showTime;
    this.jsonData.movieID = this.movie.id; //Movie ID
    this.jsonData.theater = this.movie.theater; // Theater Details
    this.jsonData.seatNumber = this.movieService.seatNumberGenerator(this.jsonData.no_T); //Seat Numbers(Not unique Randomly Generated)
    this.jsonData.transID = this.movieService.makeTransactionid(12); // Transaction ID
    this.jsonData.transDateTime = this.movieService.getDateTime(); // Transaction Date and Time
    this.jsonData.price = parseInt(this.movie.ticketPrice) * parseInt(this.jsonData.no_T) + " INR";
    console.log(this.jsonData);


    //Update Tickets Method
    this.onBookClickUpdate(this.movie,this.movie.id,parseInt(this.jsonData.no_T));
    this.movieService.addNewTransaction(this.jsonData);
    this.router.navigate(['success']);
}
}
