import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeQuetesComponent } from './point-de-quetes.component';

describe('PointDeQuetesComponent', () => {
  let component: PointDeQuetesComponent;
  let fixture: ComponentFixture<PointDeQuetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointDeQuetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeQuetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
