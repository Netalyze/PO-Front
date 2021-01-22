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
    this.fragments = this.fragmentsService.getAllFragments()
      .then((data: any) => {
        this.fragments = data.data;
      });

    this.areas = this.fragmentsService.getAllAreas()
      .then((data: any) => {
        this.areas = data.data;
      });
  }

}
