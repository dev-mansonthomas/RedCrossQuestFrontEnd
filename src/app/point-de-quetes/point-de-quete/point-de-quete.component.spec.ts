import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeQueteComponent } from './point-de-quete.component';

describe('PointDeQueteComponent', () => {
  let component: PointDeQueteComponent;
  let fixture: ComponentFixture<PointDeQueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointDeQueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeQueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
