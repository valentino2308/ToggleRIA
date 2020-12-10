import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { ComponentModalParamComponent } from '../component-modal-param/component-modal-param.component';
import { FeatureCategory } from 'src/app/model/FeatureCategory';


@Component({
  selector: 'app-toogle-menu',
  templateUrl: './toogle-menu.component.html',
  styleUrls: ['./toogle-menu.component.css']
})
export class ToogleMenuComponent implements OnInit {
  
  @ViewChild(ComponentModalParamComponent, { static: true }) childReference: ComponentModalParamComponent;

  ngOnInit(): void {
  };

  open(): void {
    this.childReference.open();
  };
}

