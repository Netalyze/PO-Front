import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm!: FormGroup;
  loading = false;
  submitted = false;
  roles: any;

  constructor(private formbuilder: FormBuilder, 
              private auth: AuthService, 
              private router: Router, 
              private userService: UserService) {
   }

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.userService.getAlRoles()
      .then((data: any) => {
        this.roles = data.data;
        console.log(this.roles);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  get form() { return this.addForm.controls; }

  cancel() { 
    this.router.navigate(['/uzytkownicy']);
    return;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.addUser(this.form.email.value, this.form.login.value, this.form.password.value, this.form.role.value)
      .pipe(first())
      .subscribe(
        () => { this.router.navigate(['/uzytkownicy']); },
        err => {
          this.loading = false;
          console.log(err);
        }
      )
  }
}

