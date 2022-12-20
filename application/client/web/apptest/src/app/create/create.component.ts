import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
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
    getAllLocationData:any;

    constructor (
        private createService: CreateService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.addresslocation.created_by = sessionStorage.getItem('email') || ''; 
        this.createService.Getallusers().subscribe((data:any) => {
            this.rowData = data;
            this.getAllLocationData = data;
          }, (error:any) => {
            console.log("error",error);
          });
    }
    GpCreate() {
        this.addresslocation.latitude = parseFloat(this.addresslocation.latitude);
        this.addresslocation.longitude = parseFloat(this.addresslocation.longitude);
        if(typeof this.addresslocation.latitude == 'number' && typeof this.addresslocation.longitude == 'number'){
            this.createService.GpCreate(this.addresslocation).subscribe((data:any) => {
                this.addresslocation.name = ''
            this.addresslocation.latitude = ''
            this.addresslocation.longitude = ''
            this.addresslocation.countrycode = ''
            this.addresslocation.geonameid = ''
            this.ngOnInit();
            },
            (error:Error) => {
                console.log('Error', error);
            });
        }
    }

    GpRoute(queryId:any) {
        this.router.navigate(['./update'], { queryParams: { 'id': queryId } })
    }
    onRowClick(event: any): void {
        console.log(event.rowIndex);
        let Indexdata = this.getAllLocationData[event.rowIndex];
        this.GpRoute(Indexdata._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}