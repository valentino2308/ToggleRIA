import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProcessComponent } from './component-process.component';

describe('ComponentProcessComponent', () => {
  let component: ComponentProcessComponent;
  let fixture: ComponentFixture<ComponentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
