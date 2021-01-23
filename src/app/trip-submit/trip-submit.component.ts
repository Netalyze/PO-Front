import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-trip-submit',
  templateUrl: './trip-submit.component.html',
  styleUrls: ['./trip-submit.component.css']
})
export class TripSubmitComponent implements OnInit {

  tripSubmitForm!: FormGroup;
  chosenTripId: any;
  trips = 
  [
    {'id': 1}, {'id': 2}
];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.tripSubmitForm = this.formBuilder.group({
      tripId: ['', Validators.required],
      comment: ['', Validators.maxLength(200)]
    });
  }

  get form() { return this.tripSubmitForm.controls; }

}
