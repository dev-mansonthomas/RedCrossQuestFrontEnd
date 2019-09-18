import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeQueteSearchComponent } from './point-de-quete-search.component';

describe('PointDeQueteSearchComponent', () => {
  let component: PointDeQueteSearchComponent;
  let fixture: ComponentFixture<PointDeQueteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointDeQueteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeQueteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
