import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formbuilder: FormBuilder, 
              private auth: AuthService, 
              private router: Router) {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/']);
    }
   }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get form() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.register(this.form.email.value, this.form.login.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        () => { this.router.navigate(['/login']); }, // Może być do zmiany
        err => {
          this.loading = false;
          console.log(err);
        }
      )
  }
}
