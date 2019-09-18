import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DataExportComponent } from './data-export/data-export.component';



@NgModule({
  declarations: [SettingsComponent, DataExportComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
