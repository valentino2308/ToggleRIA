import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleMenuComponent } from './toogle-menu.component';

describe('ToogleMenuComponent', () => {
  let component: ToogleMenuComponent;
  let fixture: ComponentFixture<ToogleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
