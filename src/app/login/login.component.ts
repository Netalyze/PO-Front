import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

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
    private router: Router,
    private messageService: MessageService) {
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
          this.messageService.addMessage(err.error, 'error');
          console.log(err.error);
        })
  }
}
