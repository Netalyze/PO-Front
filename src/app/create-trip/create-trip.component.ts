import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
  
  trips = [{'id': 1}, {'id': 2}];
  fragments = [{'name': 'Hala Gąsienicowa', 'pointsUp': 9, 'pointsDown': 6, 'length': 3.2}]
  tripCreateForm!: FormGroup;
  submitted = false;
  currentPoint = "";
  activeTab = 1;
  lengthTotal = 0;
  pointsTotal = 0;

  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.tripCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      mountainRange: ['', Validators.required],
      startingPoint: ['', Validators.required],
      currentAsEnd: [''],
    });
  }

  get form() { return this.tripCreateForm.controls; }

}
