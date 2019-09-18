import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedquestQrCodeComponent } from './redquest-qr-code.component';

describe('RedquestQrCodeComponent', () => {
  let component: RedquestQrCodeComponent;
  let fixture: ComponentFixture<RedquestQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedquestQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedquestQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
