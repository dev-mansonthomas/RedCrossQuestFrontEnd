import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedquestQrCodeComponent } from './redquest-qr-code/redquest-qr-code.component';
import { RedquestSettingsComponent } from './redquest-settings/redquest-settings.component';



@NgModule({
  declarations: [RedquestQrCodeComponent, RedquestSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class RedquestModule { }
