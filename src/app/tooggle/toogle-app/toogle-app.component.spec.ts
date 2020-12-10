import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleAppComponent } from './toogle-app.component';

describe('ToogleAppComponent', () => {
  let component: ToogleAppComponent;
  let fixture: ComponentFixture<ToogleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
