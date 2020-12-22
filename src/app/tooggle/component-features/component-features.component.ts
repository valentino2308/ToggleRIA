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
  loading = true;
  constructor(private featuresService: FeaturesServiceService, private route: ActivatedRoute,  private router: Router) {
   }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.keyFeatureCategory = params.id;
      this.featuresService.getCapacityValue(this.keyFeatureCategory).subscribe(
        response => {
          this.featureCategory = {
            key: this.keyFeatureCategory,
            label: this.keyFeatureCategory,
            features: response.listFeatures,
            servers: response.listServers
          };
          this.loading = false;
        }
      );
    });
  }
  open(): void  {
    this.childReference.open();
  }

  openModif(): void  {
    this.featureCategory.features.forEach( element => {
        if (element.selected){
          this.childReference.openModif(element);
        }
    });
  }

  goProcess(): void {
    const link = ['process' , this.keyFeatureCategory ];
    this.router.navigate(link);
  }
}
