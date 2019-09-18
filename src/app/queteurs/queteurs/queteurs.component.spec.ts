import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueteursComponent } from './queteurs.component';

describe('QueteursComponent', () => {
  let component: QueteursComponent;
  let fixture: ComponentFixture<QueteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
