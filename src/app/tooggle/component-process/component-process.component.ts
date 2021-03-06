import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureCategory } from 'src/app/model/FeatureCategory';
import { FeaturesServiceService } from 'src/app/services/features-service.service';

@Component({
  selector: 'app-component-process',
  templateUrl: './component-process.component.html',
  styleUrls: ['./component-process.component.css']
})
export class ComponentProcessComponent implements OnInit {

  keyFeatureCategory: string;
  featureCategory: FeatureCategory;
  loading = true;
  constructor( private featuresService: FeaturesServiceService,
               private route: ActivatedRoute, private router: Router) { }

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
  goMain(): void {
    const link = ['main' , this.keyFeatureCategory];
    this.router.navigate(link);
  }
}
