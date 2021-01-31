import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { FragmentsService } from '../services/fragments.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
  
  areas: any;
  currentArea: any = null;
  points: any;
  fragments: any;
  fragmentsForPoint: any = [];
  tripFragments: any = [];
  tripFragmentsStr = "";
  tripCreateForm!: FormGroup;
  submitted = false;
  currentPoint: any = null;
  nextPoint: any = null;
  activeTab = 1;
  lengthTotal = 0;
  pointsTotal = 0;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: FragmentsService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.tripCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      mountainRange: ['', Validators.required],
      startingPoint: ['', Validators.required],
      currentAsEnd: [''],
    }, {validator: this.checkDates});

    this.http.getAllAreas().then((data: any) => {
      this.areas = data.data;
    });
  }

  get form() { return this.tripCreateForm.controls; }

  onAreaSelected(event: any) {
    let id = this.currentArea.split('.')[0];
    this.http.getPointsForArea(id).then((data: any) => {
      this.points = data.data;
    });
    this.http.getFragmentsForArea(id).then((data: any) => {
      this.fragments = data.data;
    });
  }

  onStartPointSelected(event: any) {
    this.nextPoint = this.currentPoint;
    let id = this.currentPoint.split('.')[0];
    this.updateFragmentsList(id);
  }

  addNextFragment(item: any) {
    console.log(item);
    this.tripFragments.push(item);
    this.http.getPoint(item.point_end).then((data: any) => {
      this.tripFragmentsStr += this.nextPoint.split('.')[1] + " -> " + data.data.name + `\t(${item.scoring_up})\n`;
      this.nextPoint = data.data.id + "." + data.data.name;
      this.lengthTotal += Number(item.length);
      this.pointsTotal += Number(item.scoring_up);
    });
    this.updateFragmentsList(item.point_end);
  }

  updateFragmentsList(startId: any) {
    this.fragmentsForPoint = [];
    for (let i = 0; i < this.fragments.length; i++) {
      if (this.fragments[i].point_start == startId)
        this.fragmentsForPoint.push(this.fragments[i]);
    }
  }

  addTrip() {
    this.submitted = true;
    if (this.tripCreateForm.invalid) {
      return;
    }
    this.messageService.addMessage('Wycieczka została utworzona. Zostaniesz przekierowany na stronę główną', 'ok');
    setTimeout(() => {
      this.router.navigate(['/']);
      this.messageService.clear();
    }
    , 1500);
  }

  cancel() { 
    this.router.navigate(['/']);
  }

  checkDates(group: FormGroup) {
    if(group.controls.endDate.value < group.controls.startDate.value) {
    return { notValid:true }
    }
    return null;
 }

}
