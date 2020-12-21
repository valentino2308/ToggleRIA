import { Capacity } from './../model/api/Capacity';
import { ConfigurationToggle } from './../model/api/Configuration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../model/Feature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  constructor(private http: HttpClient) {
  }
  getCapacity(): Observable<ConfigurationToggle> {
    const urlConfigToggle = 'http://localhost:8080/toggleweb/ws/toggle/configuration';
    return this.http.get<ConfigurationToggle>(urlConfigToggle);
  }
  getCapacityValue(capacityName: string): Observable<Capacity> {
    const urlCapacityToggle  = 'http://localhost:8080/toggleweb/ws/toggle/features';
    return this.http.get<Capacity>(urlCapacityToggle + '/' + capacityName);

  }
  addFeatures(capacity: string, feature: Feature): Observable<any> {
      const link = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacity + '/add';
      const body = { featureName: feature.featureName,
                      active: feature.active,
                      comment: feature.comment};
      return this.http.post<any>(link, body);
    }
}
