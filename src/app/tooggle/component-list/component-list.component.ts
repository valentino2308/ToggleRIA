import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigurationToggle } from 'src/app/model/api/Configuration';
import { FeatureCategory } from 'src/app/model/FeatureCategory';
import { FeaturesServiceService } from '../../services/features-service.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  featuresCategories: FeatureCategory[];
  loading = true;
  constructor(private featuresService: FeaturesServiceService ) { }
  configurationToggle: ConfigurationToggle;

  ngOnInit(): void {
    this.featuresService.getCapacity().subscribe( response => {
      this.configurationToggle = response;
      this.loading = false;
    });
  }
}
