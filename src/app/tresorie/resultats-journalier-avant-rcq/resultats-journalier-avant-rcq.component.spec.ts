import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsJournalierAvantRcqComponent } from './resultats-journalier-avant-rcq.component';

describe('ResultatsJournalierAvantRcqComponent', () => {
  let component: ResultatsJournalierAvantRcqComponent;
  let fixture: ComponentFixture<ResultatsJournalierAvantRcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsJournalierAvantRcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsJournalierAvantRcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
