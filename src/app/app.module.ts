import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TicketBookingFormComponent } from './components/ticket-booking-form/ticket-booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { CancelComponent } from './components/cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    AboutUsComponent,
    TicketBookingFormComponent,
    MainScreenComponent,
    TransactionTableComponent,
    UpdateFormComponent,
    SuccessPageComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
