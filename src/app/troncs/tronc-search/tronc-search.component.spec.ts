import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncSearchComponent } from './tronc-search.component';

describe('TroncSearchComponent', () => {
  let component: TroncSearchComponent;
  let fixture: ComponentFixture<TroncSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroncSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
