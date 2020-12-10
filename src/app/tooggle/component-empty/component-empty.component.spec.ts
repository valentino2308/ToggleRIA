import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEmptyComponent } from './component-empty.component';

describe('ComponentEmptyComponent', () => {
  let component: ComponentEmptyComponent;
  let fixture: ComponentFixture<ComponentEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
