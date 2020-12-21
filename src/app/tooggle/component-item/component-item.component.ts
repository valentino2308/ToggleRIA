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

  @Input() featureCategory: string;
  constructor(private router: Router  ) {}

  ngOnInit(): void {
  }
  getCurrentCategory(): void {
    const link = ['main' , this.featureCategory];
    this.router.navigate(link);
  }
}
