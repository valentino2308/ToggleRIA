import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalFeatureComponent } from './component-modal-feature.component';

describe('ComponentModalFeatureComponent', () => {
  let component: ComponentModalFeatureComponent;
  let fixture: ComponentFixture<ComponentModalFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModalFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModalFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
