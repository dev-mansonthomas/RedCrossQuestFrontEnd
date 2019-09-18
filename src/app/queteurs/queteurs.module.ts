import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueteursComponent } from './queteurs/queteurs.component';
import { QueteurComponent } from './queteur/queteur.component';
import { QueteurDuplicatesSearchComponent } from './queteur-duplicates-search/queteur-duplicates-search.component';
import { QueteurSearchComponent } from './queteur-search/queteur-search.component';
import { QueteursQrCodeComponent } from './queteurs-qr-code/queteurs-qr-code.component';



@NgModule({
  declarations: [QueteursComponent, QueteurComponent, QueteurDuplicatesSearchComponent, QueteurSearchComponent, QueteursQrCodeComponent],
  imports: [
    CommonModule
  ]
})
export class QueteursModule { }
