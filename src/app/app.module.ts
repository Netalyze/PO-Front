import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FragmentEditComponent } from './fragment-edit/fragment-edit.component';
import { FragmentAddComponent } from './fragment-add/fragment-add.component';
import { FragmentsMenuComponent } from './fragments-menu/fragments-menu.component';
import { FragmentsListComponent } from './fragments-list/fragments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FragmentEditComponent,
    FragmentAddComponent,
    FragmentsMenuComponent,
    FragmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
