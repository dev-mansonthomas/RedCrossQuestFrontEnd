import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueteurComponent } from './queteur.component';

describe('QueteurComponent', () => {
  let component: QueteurComponent;
  let fixture: ComponentFixture<QueteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
