import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fragment-edit',
  templateUrl: './fragment-edit.component.html',
  styleUrls: ['./fragment-edit.component.css']
})
export class FragmentEditComponent implements OnInit {

  editForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

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
  }

  get form() { return this.editForm.controls; }

  onSubmit() {
    
  }
}
