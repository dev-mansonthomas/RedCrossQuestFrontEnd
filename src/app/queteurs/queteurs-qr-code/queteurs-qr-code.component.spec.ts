import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueteursQrCodeComponent } from './queteurs-qr-code.component';

describe('QueteursQrCodeComponent', () => {
  let component: QueteursQrCodeComponent;
  let fixture: ComponentFixture<QueteursQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteursQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteursQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
