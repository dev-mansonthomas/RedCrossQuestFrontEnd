import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TroncsComponent } from './troncs/troncs.component';
import { TroncComponent } from './tronc/tronc.component';
import { TroncsQrCodeComponent } from './troncs-qr-code/troncs-qr-code.component';
import { TroncSearchComponent } from './tronc-search/tronc-search.component';



@NgModule({
  declarations: [TroncsComponent, TroncComponent, TroncsQrCodeComponent, TroncSearchComponent],
  imports: [
    CommonModule
  ],
  exports:[TroncComponent, TroncComponent, TroncsQrCodeComponent, TroncSearchComponent]
})
export class TroncsModule { }
