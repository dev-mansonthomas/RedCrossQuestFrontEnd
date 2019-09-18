import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncsComponent } from './troncs.component';

describe('TroncsComponent', () => {
  let component: TroncsComponent;
  let fixture: ComponentFixture<TroncsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroncsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
