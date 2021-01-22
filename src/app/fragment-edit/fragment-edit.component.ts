import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FragmentsService } from '../services/fragments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fragment-edit',
  templateUrl: './fragment-edit.component.html',
  styleUrls: ['./fragment-edit.component.css']
})
export class FragmentEditComponent implements OnInit {

  editForm!: FormGroup;
  loading = false;
  submitted = false;
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
      })
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
  }
}
