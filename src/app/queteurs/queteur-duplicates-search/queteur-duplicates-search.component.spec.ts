import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueteurDuplicatesSearchComponent } from './queteur-duplicates-search.component';

describe('QueteurDuplicatesSearchComponent', () => {
  let component: QueteurDuplicatesSearchComponent;
  let fixture: ComponentFixture<QueteurDuplicatesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteurDuplicatesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteurDuplicatesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
