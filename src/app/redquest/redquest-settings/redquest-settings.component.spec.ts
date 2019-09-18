import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedquestSettingsComponent } from './redquest-settings.component';

describe('RedquestSettingsComponent', () => {
  let component: RedquestSettingsComponent;
  let fixture: ComponentFixture<RedquestSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedquestSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedquestSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
