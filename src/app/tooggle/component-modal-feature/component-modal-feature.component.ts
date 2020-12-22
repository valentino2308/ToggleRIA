import { Feature } from './../../model/Feature';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-component-modal-feature',
  templateUrl: './component-modal-feature.component.html',
  styleUrls: ['./component-modal-feature.component.css']
})
export class ComponentModalFeatureComponent implements OnInit {

  closeResult: string;
  @ViewChild('mymodalFeature', { static: false }) mymodalFeature: ElementRef;
  feature: Feature;

  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal) {}

  openModif(feature: Feature): void{
    this.feature = feature;
    open();
  }
  open(): void {
    console.log('on est ici');
    this.modalService.open(this.mymodalFeature, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('result' + result);

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('result' + reason);
    });
  }
  getDismissReason(reason: any): string {
      console.log(reason);
      console.log(this.feature);
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

}
