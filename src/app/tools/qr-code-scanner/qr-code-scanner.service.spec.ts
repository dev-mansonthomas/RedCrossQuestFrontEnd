import { TestBed } from '@angular/core/testing';

import { QrCodeScannerService } from './qr-code-scanner.service';

describe('QrCodeScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrCodeScannerService = TestBed.get(QrCodeScannerService);
    expect(service).toBeTruthy();
  });
});
