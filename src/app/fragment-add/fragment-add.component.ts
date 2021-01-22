import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FragmentsService } from '../services/fragments.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-fragment-add',
  templateUrl: './fragment-add.component.html',
  styleUrls: ['./fragment-add.component.css']
})
export class FragmentAddComponent implements OnInit {

  addForm!: FormGroup;
  loading = false;
  submitted = false;
  points: any;
  areas: any;

  constructor(private formBuilder: FormBuilder, 
              private fragmentsService: FragmentsService,
              private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      scoringUp: ['', Validators.required],
      scoringDown: ['', Validators.required],
      pointStart: ['', Validators.required],
      pointEnd: ['', Validators.required],
      length: ['', Validators.required],
      area: ['', Validators.required]
    });

    this.fragmentsService.getAllPoints()
      .then((data: any) => {
        this.points = data.data;
        console.log(this.points);
      })
      .catch(err => {
        // Dodanie errora do jakiegoś messageservice
        console.log('Error in fragment edit. Could not get poins');
        console.log(err);
      });

    this.fragmentsService.getAllAreas()
      .then((data: any) => {
        this.areas = data.data;
      })
      .catch(err => {
        console.log('Error in fragment edit. Could not get areas');
        console.log(err);
      })
  }

  get form() { return this.addForm.controls; }

  cancel() { 
    this.router.navigate(['/']);
    return;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }

    // this.loading = true;
    let requestBody = {
      'area_id': this.form.area.value,
      'point_start': this.form.pointStart.value,
      'point_end': this.form.pointEnd.value,
      'name': this.form.name.value,
      'length': this.form.length.value,
      'scoring_up': this.form.scoringUp.value,
      'scoring_down': this.form.scoringDown.value,
      'climb_length': this.calcClimbLength(this.form.pointStart.value, this.form.pointEnd.value),
      'fragment_type': 'punktowany',
    };

    this.fragmentsService.addFragment(requestBody)
      .pipe(first())
      .subscribe(() => {
        console.log('Fragment added');
      }, 
      err => {
        console.log('Error occured while adding fragment:');
        console.log(err);
      });
  }

  calcClimbLength(pointAID: number, pointBID: number) {
    let pointAAltitude = 0;
    let pointBAltitude = 0;
    for (let item of this.points) {
      if (item.id === Number(pointAID)) { pointAAltitude = item.altitude; }
      else if (item.id === Number(pointBID)) { pointBAltitude = item.altitude; }
    }
    return Math.abs(pointAAltitude - pointBAltitude);  // Nie wiem jak z rozróżnieniem czy wchodzimy czy schodzimy dlatego abs
  }
}

