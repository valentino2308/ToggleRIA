import { Component, OnInit, ViewChild } from '@angular/core';
import { Feature } from 'src/app/model/Feature';
import { FeatureCategory } from 'src/app/model/FeatureCategory';
import { ComponentModalFeatureComponent } from '../component-modal-feature/component-modal-feature.component';
import { FeaturesServiceService } from '../../services/features-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component-features',
  templateUrl: './component-features.component.html',
  styleUrls: ['./component-features.component.css']
})
export class ComponentFeaturesComponent implements OnInit {

  keyFeatureCategory: string;
  @ViewChild(ComponentModalFeatureComponent, { static: true }) childReference: ComponentModalFeatureComponent;

  featureSelected: Feature;
  closeResult: string;
  featureCategory: FeatureCategory;

  constructor(private featuresService: FeaturesServiceService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.keyFeatureCategory = params.id;
      this.featureCategory = this.featuresService.getFeatureCategoryByKey(this.keyFeatureCategory);
    });
  }
  open(): void  {
    this.childReference.open();
  }
  goProcess(): void {
    const link = ['process' , this.keyFeatureCategory ];
    this.router.navigate(link);
  }
}
