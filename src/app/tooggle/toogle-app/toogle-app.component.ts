import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Feature } from '../../model/Feature';
import { FeatureCategory } from '../../model/FeatureCategory'
import { FeaturesServiceService } from '../../services/features-service.service'

@Component({
  selector: 'app-toogle-app',
  templateUrl: './toogle-app.component.html',
  styleUrls: ['./toogle-app.component.css']
})
export class ToogleAppComponent implements OnInit {

  featuresCategories : FeatureCategory[];
  featureCatgorySelected : String;

  constructor(private featuresService : FeaturesServiceService)  { }

  ngOnInit(): void {

    
    this.featuresCategories = this.featuresService.getData();
    if (this.featuresCategories.length > 0)
      this.featureCatgorySelected = this.featuresCategories[0].key;
  }

  selectFeatureCategory(selectedFeatureCategory : String) : void {
    this.featureCatgorySelected = selectedFeatureCategory;
  }


}