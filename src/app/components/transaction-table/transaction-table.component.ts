import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  transDetails :any;
  movie : any
  displayedColumns = ['id','name','movie','theater','showTime','price','transID','transDateTime','updateDetails']
  transactionsSource !: MatTableDataSource<any>
  

  @ViewChild(MatSort) matSort !: MatSort 
  constructor(private movieService : MovieListService,private router : Router) { }
  ngOnInit(): void {
    this.movieService.getTransactionsData().subscribe((Response : any) => {
      this.transactionsSource = new MatTableDataSource(Response)
      this.transDetails = Response;
      this.transactionsSource.sort = this.matSort
      console.log(Response);
    })
    }
    
    transactionUpdate(user : any){
      console.log(user);
      this.router.navigate(['updateTicket/' + user.id]);
    }

    transactionDelete(user : any){
      console.log(user.id);
      this.router.navigate(['cancel/' + user.id]);
    }
  }

