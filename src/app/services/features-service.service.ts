import { Server } from './../model/Server';
import { ConfigurationToggle } from 'src/app/model/api/Configuration';
import { Capacity } from './../model/api/Capacity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../model/Feature';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  configuration: BehaviorSubject<ConfigurationToggle> =
    new BehaviorSubject<ConfigurationToggle>({tempDirectory: '', outputDirectory: '', listConfigurationWs: []});
  capacity: BehaviorSubject<Capacity> =
    new BehaviorSubject<Capacity>({ fileNameFeature: '', inProgress: false,outputDirectory: '', pathConfFeatures: '',
                                    pathConfServers: '', pathFeatureFileOnServer: '', tempDirectory: '', type: '',
                                    listFeatures: [], listServers: []});
  constructor(private http: HttpClient) {
  }

  getCapacity(): BehaviorSubject<ConfigurationToggle> {
    const urlConfigToggle = 'http://localhost:8080/toggleweb/ws/toggle/configuration';
    this.http.get<ConfigurationToggle>(urlConfigToggle).subscribe(
            response => this.configuration.next(response),
            error => this.configuration.error(error),
    );
    return this.configuration;
  }

  getCapacityValue(capacityName: string): Observable<Capacity> {

    console.log(this.capacity);

    if (this.capacity !== undefined) {
      this.capacity.forEach(capacityResponse => {
        console.log(capacityResponse.type);
        console.log(capacityName);
        if (capacityResponse.type !== capacityName){
          console.log('appel de valeur');
          const urlCapacityToggle  = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacityName;
          this.capacity = new Observable(observer => {
              this.http.get<Capacity>(urlCapacityToggle).subscribe(
                response => observer.next(response),
                error => observer.error(error),
              );
          });
        }
      });
    }else{
      const urlCapacityToggle  = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacityName;
      this.capacity = new Observable(observer => {
          this.http.get<Capacity>(urlCapacityToggle).subscribe(
            response => observer.next(response),
            error => observer.error(error),
          );
      });
    }
    return this.capacity;
  }

  addFeatures(capacity: string, feature: Feature): Observable<any> {
      const link = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacity + '/add';
      const body = { featureName: feature.featureName,
                      active: feature.active,
                      comment: feature.comment};
      return this.http.post<any>(link, body);
  }
  deleteFeatures(capacity: string, feature: Feature): Observable<any>  {
    const link = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacity + '/delete/' + feature.featureName;
    return this.http.delete<any>(link);
  }
  updateFeatures(capacity: string, oldFeature: Feature, newFeature: Feature): Observable<any>  {
    const link = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacity + '/update';
    const body = { oldFeature : {
                                  featureName: oldFeature.featureName,
                                  active: oldFeature.active,
                                  comment: oldFeature.comment
                                },
                    newFeature : {
                                  featureName: newFeature.featureName,
                                  active: newFeature.active,
                                  comment: newFeature.comment
                                }
                  };
    return this.http.put<any>(link, body);
  }

}
