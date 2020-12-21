import { FeatureCategory } from './../model/FeatureCategory';
import { Capacity } from './../model/api/Capacity';
import { ConfigurationToggle } from './../model/api/Configuration';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../model/Feature';
import { Server } from '../model/Server';
import { features } from 'process';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  featuresCategories: FeatureCategory[] = [];


  constructor(private http: HttpClient) {}


  getAllData(): FeatureCategory[] {
    const urlConfigToggle  = 'http://localhost:8080/toggleweb/ws/toggle/configuration';
    const urlCapacityToggle  = 'http://localhost:8080/toggleweb/ws/toggle/features';


    this.http.get<ConfigurationToggle>(urlConfigToggle).subscribe(
      responseConfiguration => {
        responseConfiguration.listConfigurationWs.forEach(capacityName => {
          console.log(urlCapacityToggle + '/' + capacityName.capacity);
          this.http.get<Capacity>(urlCapacityToggle + '/' + capacityName.capacity).subscribe(
            responseCapacities => {
              this.featuresCategories.push({
                key: capacityName.capacity,
                label: capacityName.capacity.toUpperCase(),
                features: responseCapacities.listFeatures,
                servers: responseCapacities.listServers
              });
              console.log(this.featuresCategories);

            },
            error => {
              console.log('Passage en mock data');
            }
          );
        });
        return this.featuresCategories;
      },
      error => {
        console.log('Passage en mock data');
      }
    );
    console.log(this.featuresCategories);

  }
  getFeatureCategoryByKey(key: any): FeatureCategory {
      let featureCategoryFind: FeatureCategory;
      if (key != null && !(key.length === 0)){
        this.featuresCategories.forEach(element => {
          if (element.key === key) {
            featureCategoryFind = element;
          }
        });
      }
      return featureCategoryFind;
  }


  addFeatures(capacity: string, feature: Feature): any{
    const link = 'http://localhost:8080/toggleweb/ws/toggle/features/' + capacity + '/add';
    const body = { featureName: feature.featureName,
                    active: feature.active,
                    comment: feature.comment};
    this.http.post<any>(link, body);
  }
}
