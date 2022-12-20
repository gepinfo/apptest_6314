import { Component, OnInit } from '@angular/core';
import { GetlocationsService } from './getlocations.service';

@Component({
  selector: 'app-getlocations',
  templateUrl: './getlocations.component.html',
  styleUrls: ['./getlocations.component.scss'],
})

export class GetlocationsComponent implements OnInit {
    public locations:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        latitude: '',
        longitude: '',
        countrycode: '',
        geonameid: '',
    }

    constructor (
        private getlocationsService: GetlocationsService,
    ) { }

    ngOnInit() {
        this.locations.created_by = sessionStorage.getItem('email') || ''; 
    }
}