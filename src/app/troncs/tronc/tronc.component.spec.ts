import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncComponent } from './tronc.component';

describe('TroncComponent', () => {
  let component: TroncComponent;
  let fixture: ComponentFixture<TroncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
