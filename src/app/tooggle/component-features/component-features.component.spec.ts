import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFeaturesComponent } from './component-features.component';

describe('CompoentFeaturesComponent', () => {
  let component: ComponentFeaturesComponent;
  let fixture: ComponentFixture<ComponentFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
