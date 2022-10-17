import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  private url = environment.moviesURL
  private transactionsUrl = environment.transactionsURL;
  
  constructor(private httpClient: HttpClient) { }
  getData():Observable<object>{
    return this.httpClient.get(this.url);
  }

  getMovieDetails(id:number):Observable<object>{
    return this.httpClient.get(this.url+"/"+id);
  }

  updateMovieDetails(data:any, id:string ,noT:number):Observable<any>{
    data.tickets=data.tickets-noT
    return this.httpClient.put((this.url+"/"+id),data);
  }

  addNewTransaction(user : any){
    this.httpClient.post<any>(this.transactionsUrl,user).subscribe();
  }


  //Transaction Details (User API)
  getTransactionsData():Observable<object>{
    return this.httpClient.get(this.transactionsUrl);
  }

  getTransactionDetails(id:number):Observable<object>{
    return this.httpClient.get(this.transactionsUrl+"/"+id);
  }

  updateTransactionDetails(userData:any,id:string):Observable<any>{
    return this.httpClient.put((this.transactionsUrl+"/"+id),userData);
  }

  deleteTransaction(id:string){
    this.httpClient.delete((this.transactionsUrl+"/"+id)).subscribe();
  }

  //Seat Number Generator Function
  seatNumberGenerator(num : any){
    var arr = [];
    while(arr.length < num)
  {
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) 
    arr.push(r);
  }
  return arr;
  }

  //Unique Transaction ID Generator
  makeTransactionid(len: number) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < len; i++ ) 
    {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return 'T000'+result;
}


  //Function to Store Current Date and Time
  getDateTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
  }

}
