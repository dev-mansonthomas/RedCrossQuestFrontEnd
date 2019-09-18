import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptageComponent } from './comptage.component';

describe('ComptageComponent', () => {
  let component: ComptageComponent;
  let fixture: ComponentFixture<ComptageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
