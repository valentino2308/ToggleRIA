import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { Feature } from '../model/Feature';
import { FeatureCategory } from '../model/FeatureCategory';
import { Server } from '../model/Server';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  featuresCategories: FeatureCategory[];


  constructor() {

    const featuresComposants: Feature[] = [
      new Feature('KEY10', true, 'Comment 10', false),
      new Feature('KEY1', true, 'Comment 1', false),
      new Feature('KEY2', true, 'Comment 2', false),
      new Feature('KEY21', true, 'Comment 21', false),
      new Feature('KEY22', true, 'Comment 22', false),
      new Feature('KEY23', true, 'Comment 23', false),
      new Feature('KEY24', true, 'Comment 24', false),
      new Feature('KEY25', true, 'Comment 25', false),
      new Feature('KEY26', true, 'Comment 26', false),
      new Feature('KEY27', true, 'Comment 27', false),
      new Feature('KEY28', true, 'Comment 28', false),
      new Feature('KEY29', true, 'Comment 29', false),
      new Feature('KEY30', true, 'Comment 30', false),
      new Feature('KEY31', true, 'Comment 31', false),
      new Feature('KEY32', true, 'Comment 32', false),
      new Feature('KEY33', true, 'Comment 33', false),
      new Feature('KEY34', true, 'Comment 34', false),
      new Feature('KEY35', true, 'Comment 35', false)
      ];

    const featuresSoclePrivee: Feature[] = [
        new Feature('KEY3', false, 'Comment 3', false),
        new Feature('KEY33', false, 'Comment 33', false),
        new Feature('KEY4', true, 'Comment 4', false)
      ];

    const serversSoclePrivee: Server[] = [
        new Server('IBGWFR34', '038', false),
        new Server('IBGWFR35', '068', false),
        new Server('IBGWFR36', '078', false),
        new Server('IBGWFR37', '002', false),
      ];

    const serversSocleComposant: Server[] = [
        new Server('IBGWFR38', '038', false),
        new Server('IBGWFR39', '068', false),
        new Server('IBGWFR40', '078', false),
        new Server('IBGWFR42', '002', false),
      ];

    this.featuresCategories = [
      new FeatureCategory('1' , 'Socle Composant', featuresComposants, serversSocleComposant),
      new FeatureCategory('2', 'Socle privée', featuresSoclePrivee, serversSoclePrivee)
      ];

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

   getData(): any {
     return this.featuresCategories;
  }


}
