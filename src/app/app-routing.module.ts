import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FragmentAddComponent } from './fragment-add/fragment-add.component';
import { FragmentEditComponent } from './fragment-edit/fragment-edit.component';
import { FragmentsListComponent } from './fragments-list/fragments-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthguardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dodaj-odcinek', component: FragmentAddComponent },
  { path: 'modyfikuj-odcinek/:id', component: FragmentEditComponent },
  { path: 'lista-odcinkow', component: FragmentsListComponent },

  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
