import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncsQrCodeComponent } from './troncs-qr-code.component';

describe('TroncsQrCodeComponent', () => {
  let component: TroncsQrCodeComponent;
  let fixture: ComponentFixture<TroncsQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroncsQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncsQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
