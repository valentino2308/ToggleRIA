import { Component, OnInit } from '@angular/core';
import { ConfigurationToggle } from 'src/app/model/api/Configuration';
import { FeaturesServiceService } from '../../services/features-service.service'

@Component({
  selector: 'app-toogle-app',
  templateUrl: './toogle-app.component.html',
  styleUrls: ['./toogle-app.component.css']
})
export class ToogleAppComponent implements OnInit {

  loading = true;

  constructor(private featuresService: FeaturesServiceService)  { }

  ngOnInit(): void {
  }
}
