import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdateService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(addresslocation:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/locations' + `?jwt_token=${jwt_token}`, addresslocation);
    }

    GpGetNounById(tagsId:any): Observable<any> {
        return this.http.get(this.sharedService.WEB_API + '/locations/' + tagsId);
    }

    GpDelete(locationId:any): Observable<any>{
        return this.http.delete(this.sharedService.WEB_API + '/locations/'+ locationId);
    }
}