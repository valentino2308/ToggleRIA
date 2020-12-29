import { Component, OnInit, ViewChild } from '@angular/core';
import { Feature } from 'src/app/model/Feature';
import { FeatureCategory } from 'src/app/model/FeatureCategory';
import { FeaturesServiceService } from '../../services/features-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-component-features',
  templateUrl: './component-features.component.html',
  styleUrls: ['./component-features.component.css']
})
export class ComponentFeaturesComponent implements OnInit {

  keyFeatureCategory: string;
  featureSelected: Feature;
  closeResult: string;
  featureCategory: FeatureCategory;
  loading = true;
  addUpdateDisplay = false;
  update = false;
  featureName: string;
  active: boolean;
  comment: string;
  errorDisplay = false;
  errorMessage: string;

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
    this.clearError();
    this.addUpdateDisplay = true;
  }
  addOrUpdateFeature(): void {
    this.clearError();

    if (this.update){
      if (this.comment.length > 0){
        this.featuresService.updateFeatures(this.featureCategory.key, this.featureSelected,
          {featureName: this.featureName.toUpperCase(),
            active: this.active,
            comment: this.comment,
            selected: false}).subscribe(
              response => {
                this.featureCategory.features.forEach(oneFeature => {
                  if (oneFeature.featureName === this.featureSelected.featureName){
                    oneFeature.comment = this.comment;
                    oneFeature.featureName = this.featureName.toUpperCase();
                    oneFeature.active = this.active;
                    oneFeature.selected = false;
                  }
                });
                this.addUpdateDisplay = false;
                this.update = false;
                this.cancelFeature();
              },
              error => {
                this.errorDisplay = true;
                this.errorMessage = 'Une erreur s\'est produite lors de la modification de la feature !';
              }
            );
      }
    }
    else{
      if (this.featureName !== undefined
          && this.featureName.length > 0
          && (this.featureName.search(' ') === -1)
          && this.comment !== undefined
          && this.comment.length > 0){
        this.featuresService.addFeatures(this.featureCategory.key,
          {featureName: this.featureName.toUpperCase(), active: this.active,
            comment: this.comment, selected: false
        }).subscribe(
          response => {
            this.featureCategory.features.push({featureName: this.featureName, active: this.active,
              comment: this.comment, selected: false});
            this.cancelFeature();
          },
          error => {
            this.errorDisplay = true;
            this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout de la feature !';
          }
        );
      }
      else{
        this.errorDisplay = true;
        this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout de la feature !';
      }
    }
  }
  cancelFeature(): void{
    this.clearError();
    this.featureName = '';
    this.active = false;
    this.comment = '';
    this.addUpdateDisplay = false;
  }
  clearError(): void {
    this.errorMessage = '';
    this.errorDisplay = false;
  }
  openModif(): void  {
    this.clearError();
    this.update = true;
    let i = 0;
    this.featureCategory.features.forEach(oneFeature => {
      if (oneFeature.selected){
        i++;
      }});
    if (i > 1 || i === 0 ){
      this.errorDisplay = true;
      this.errorMessage = 'Modification possible pour un seul élément !';
    }
    else{
      this.featureCategory.features.forEach(oneFeature => {
        if (oneFeature.selected){
          this.featureName = oneFeature.featureName;
          this.active = oneFeature.active;
          this.comment = oneFeature.comment;
          this.featureSelected = { featureName: oneFeature.featureName, active: oneFeature.active,
            comment: oneFeature.comment, selected: false};
        }});
      this.addUpdateDisplay = true;
    }
  }
  deleteFeatures(): void  {
    this.clearError();
    const features: Feature[] = [];
    this.featureCategory.features.forEach( oneFeature => {
        if (oneFeature.selected){
          this.featuresService.deleteFeatures(this.featureCategory.key, oneFeature).subscribe(
            response => (response),
            error => {
              features.push({featureName: oneFeature.featureName, active: oneFeature.active,
                comment: oneFeature.comment, selected: false});
              this.errorDisplay = true;
              this.errorMessage = 'Erreur lors de la suppression de la feature';
            }
          );
        }
        else{
          features.push({featureName: oneFeature.featureName, active: oneFeature.active,
                          comment: oneFeature.comment, selected: false});
        }
    });
    this.featureCategory.features = features;
  }
  openDuplicate(): void {
    this.clearError();
    this.featureCategory.features.forEach(oneFeature => {
      if (oneFeature.selected){
        oneFeature.selected = false;
        this.featuresService.addFeatures(this.keyFeatureCategory,
          {featureName: oneFeature.featureName + '_COPY',
           active: oneFeature.active,
           comment: oneFeature.comment,
           selected: false
          }).subscribe(
            response => {
              this.featureCategory.features.push({featureName: oneFeature.featureName + '_COPY', active: oneFeature.active,
                comment: oneFeature.comment, selected: false});
            },
            error => {
              this.errorDisplay = true;
              this.errorMessage = 'Erreur lors de la duplication d\'une feature';
            }
          );
      }
    });
  }
  goProcess(): void {
    this.clearError();
    const link = ['process' , this.keyFeatureCategory ];
    this.router.navigate(link);
  }
}
