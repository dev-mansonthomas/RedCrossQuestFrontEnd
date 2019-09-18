import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifsComponent } from './objectifs.component';

describe('ObjectifsComponent', () => {
  let component: ObjectifsComponent;
  let fixture: ComponentFixture<ObjectifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
