import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TicketBookingFormComponent } from './components/ticket-booking-form/ticket-booking-form.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { CancelComponent } from './components/cancel/cancel.component';
const routes: Routes = [
  {path:"",component:MainScreenComponent},
  {path:"getMovies",component:MovieCardComponent},
  {path:'movieDetails/:id',component:MovieDetailsComponent},
  {path:'developerProfile',component:AboutUsComponent},
  {path:'bookTicket/:id',component:TicketBookingFormComponent},
  {path:'transactions',component:TransactionTableComponent},
  {path:'updateTicket/:id',component : UpdateFormComponent},
  {path:'success',component: SuccessPageComponent},
  {path:'cancel/:id',component : CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
