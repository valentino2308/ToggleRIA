import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationToggle } from 'src/app/model/api/Configuration';
import { FeaturesServiceService } from '../../services/features-service.service'

@Component({
  selector: 'app-component-modal-param',
  templateUrl: './component-modal-param.component.html',
  styleUrls: ['./component-modal-param.component.css']
})
export class ComponentModalParamComponent implements OnInit {

  @ViewChild('myModalParam', { static: false }) mymodalFeature: ElementRef;
  closeResult: string;
  configurationToggle: ConfigurationToggle;

  constructor(private modalService: NgbModal, private featuresService: FeaturesServiceService) {}
  ngOnInit(): void {
    this.featuresService.getCapacity().subscribe(response =>{
      console.log(response);
      this.configurationToggle = response;
    });
  }
  open(): void {
    this.modalService.open(this.mymodalFeature, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}
