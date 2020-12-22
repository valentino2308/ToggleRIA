import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentModalParamComponent } from '../component-modal-param/component-modal-param.component';


@Component({
  selector: 'app-toogle-menu',
  templateUrl: './toogle-menu.component.html',
  styleUrls: ['./toogle-menu.component.css']
})
export class ToogleMenuComponent implements OnInit {
  @ViewChild(ComponentModalParamComponent, { static: true }) childReference: ComponentModalParamComponent;
  ngOnInit(): void {
  }
  open(): void {
    this.childReference.open();
  }
}

