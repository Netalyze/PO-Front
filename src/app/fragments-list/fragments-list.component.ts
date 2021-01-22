import { Component, OnInit } from '@angular/core';
import { FragmentsService } from '../services/fragments.service';

@Component({
  selector: 'app-fragments-list',
  templateUrl: './fragments-list.component.html',
  styleUrls: ['./fragments-list.component.css']
})
export class FragmentsListComponent implements OnInit {

  fragments: any;
  areas: any;
  currentArea = 0;

  constructor(private fragmentsService: FragmentsService) { }

  ngOnInit(): void {
    this.fragmentsService.getAllFragments()
      .then((data: any) => {
        this.fragments = data.data;
      });

    this.fragmentsService.getAllAreas()
      .then((data: any) => {
        this.areas = data.data;
      })
      .catch(err => {
        console.log('Error in fragment edit. Could not get areas');
        console.log(err);
      });
  }
}
