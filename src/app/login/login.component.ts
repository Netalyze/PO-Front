import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) {
      if (this.auth.isLoggedIn) {
        this.router.navigate(['/']);
      }
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.form.login.value, this.form.password.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['/']);
      },
        err => {
          this.loading = false;
          console.log(err);
        })
  }
}
