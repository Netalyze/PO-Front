import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FragmentsService } from '../services/fragments.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-fragment-edit',
  templateUrl: './fragment-edit.component.html',
  styleUrls: ['./fragment-edit.component.css']
})
export class FragmentEditComponent implements OnInit {

  editForm!: FormGroup;
  loading = false;
  submitted = false;
  fragment: any;
  points: any;
  areas: any;

  constructor(private formBuilder: FormBuilder, 
              private fragmentsService: FragmentsService,
              private router: Router) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
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
      });

      this.fragmentsService.getFragment()
      .then((data: any) => {
        this.fragment = data.data;
        this.editForm.setValue({
          name: this.fragment.name,
          scoringUp: this.fragment.scoring_up,
          scoringDown: this.fragment.scoring_down,
          pointStart: this.getPoint(this.fragment.point_start),
          pointEnd: this.getPoint(this.fragment.point_end),
          length: this.fragment.length,
          area: this.getArea(this.fragment.area_id)
        });
      });
  }

  get form() { return this.editForm.controls; }

  cancel() { 
    this.router.navigate(['/']);
    return;
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;
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

    this.fragmentsService.editFragment(requestBody)
      .pipe(first())
      .subscribe(() => {
        console.log('Fragment edited');
      }, 
      err => {
        console.log('Error occured while editing fragment:');
        console.log(err);
      });
  }

  calcClimbLength(pointAID: number, pointBID: number) {
    let pointAAltitude = 0;
    let pointBAltitude = 0;
    for (let point of this.points) {
      if (point.id === Number(pointAID)) { pointAAltitude = point.altitude; }
      else if (point.id === Number(pointBID)) { pointBAltitude = point.altitude; }
    }
    return Math.abs(pointAAltitude - pointBAltitude);  // Nie wiem jak z rozróżnieniem czy wchodzimy czy schodzimy dlatego abs
  }

  getPoint(pointID: number) {
    for (let point of this.points) {
      if (point.id === Number(pointID)) { return point.id; }
    }
  }

  getArea(areaID: number) {
    for (let area of this.areas) {
      if (area.id === Number(areaID)) { return area.id; }
    }
  }
}
