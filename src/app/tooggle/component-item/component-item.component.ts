import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureCategory } from 'src/app/model/FeatureCategory';
import { FeaturesServiceService } from '../../services/features-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-item',
  templateUrl: './component-item.component.html',
  styleUrls: ['./component-item.component.css']
})
export class ComponentItemComponent implements OnInit {

  @Input() featureCategory : String;
  
  feature : FeatureCategory;

  constructor(private featuresService : FeaturesServiceService,
    private router: Router  ) { }    

  ngOnInit(): void {
    this.feature = this.featuresService.getFeatureCategoryByKey(this.featureCategory);
  }
  getCurrentCategory() {
    const link = ['main' , this.feature.key ]
    this.router.navigate(link);
  }
}
