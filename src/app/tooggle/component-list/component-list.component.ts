import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureCategory } from 'src/app/model/FeatureCategory';
import { FeaturesServiceService } from '../../services/features-service.service'

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
   
  featuresCategories : FeatureCategory[];
 
  constructor(private featuresService : FeaturesServiceService ) { }
 
  ngOnInit(): void {
      this.featuresCategories = this.featuresService.getData();
  }
}
