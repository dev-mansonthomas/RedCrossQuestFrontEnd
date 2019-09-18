import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultatsJournalierAvantRcqComponent } from './resultats-journalier-avant-rcq/resultats-journalier-avant-rcq.component';
import { ObjectifsComponent } from './objectifs/objectifs.component';



@NgModule({
  declarations: [ResultatsJournalierAvantRcqComponent, ObjectifsComponent],
  imports: [
    CommonModule
  ]
})
export class TresorieModule { }
