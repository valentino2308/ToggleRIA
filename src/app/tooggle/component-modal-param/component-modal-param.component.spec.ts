import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalParamComponent } from './component-modal-param.component';

describe('ComponentModalParamComponent', () => {
  let component: ComponentModalParamComponent;
  let fixture: ComponentFixture<ComponentModalParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModalParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModalParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
