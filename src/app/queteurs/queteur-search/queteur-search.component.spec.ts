import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueteurSearchComponent } from './queteur-search.component';

describe('QueteurSearchComponent', () => {
  let component: QueteurSearchComponent;
  let fixture: ComponentFixture<QueteurSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteurSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteurSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
