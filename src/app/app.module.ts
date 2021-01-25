import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FragmentEditComponent } from './fragment-edit/fragment-edit.component';
import { FragmentAddComponent } from './fragment-add/fragment-add.component';
import { FragmentsMenuComponent } from './fragments-menu/fragments-menu.component';
import { FragmentsListComponent } from './fragments-list/fragments-list.component';
import { TripSubmitComponent } from './trip-submit/trip-submit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DndDirective } from './directives/dnd.directive';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { AuthInterceptor } from './services/token-interceptor';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FragmentEditComponent,
    FragmentAddComponent,
    FragmentsMenuComponent,
    FragmentsListComponent,
    TripSubmitComponent,
    NavbarComponent,
    DndDirective,
    CreateTripComponent,
    HomeCardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
