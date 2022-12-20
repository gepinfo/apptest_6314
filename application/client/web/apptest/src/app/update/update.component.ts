import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})

export class UpdateComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'countrycode', field: 'countrycode'  },{ headerName: 'geonameid', field: 'geonameid'  },{ headerName: 'latitude', field: 'latitude'  },{ headerName: 'longitude', field: 'longitude'  },];
    public addresslocation:any = {
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];
    queryId: any;

    constructor (
        private updateService: UpdateService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.addresslocation.created_by = sessionStorage.getItem('email') || ''; 
        this.activatedRoute.queryParams.subscribe((params:any) => { 
            this.queryId = params.id;
            this.GpGetNounById();
        });
    }
    GpUpdate() {
        this.addresslocation.latitude = parseFloat(this.addresslocation.latitude);
        this.addresslocation.longitude = parseFloat(this.addresslocation.longitude);
        if(typeof this.addresslocation.latitude == 'number' && typeof this.addresslocation.longitude == 'number'){
            this.updateService.GpUpdate(this.addresslocation).subscribe((data:any) => {
                this.addresslocation.name = ''
                this.addresslocation.latitude = ''
                this.addresslocation.longitude = ''
                this.addresslocation.countrycode = ''
                this.addresslocation.geonameid = ''
            },
            (error:Error) => {
                console.log('Error', error);
            });
        }
    }

    GpDelete(){
        this.updateService.GpDelete(this.queryId).subscribe((response:any) => {
            this.addresslocation.name = ''
            this.addresslocation.latitude = ''
            this.addresslocation.longitude = ''
            this.addresslocation.countrycode = ''
            this.addresslocation.geonameid = ''
        })
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    GpGetNounById() {
        this.updateService.GpGetNounById(this.queryId).subscribe((data:any) => {
            this.addresslocation._id = this.queryId;
            this.addresslocation.name = data.name
            this.addresslocation.latitude = data.latitude
            this.addresslocation.longitude = data.longitude
            this.addresslocation.countrycode = data.countrycode
            this.addresslocation.geonameid = data.geonameid
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
}