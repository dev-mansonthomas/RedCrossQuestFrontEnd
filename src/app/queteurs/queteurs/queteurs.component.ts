import { Component, OnInit } from '@angular/core';
import { QueteurService } from '../queteur.service';
import { Queteur } from '../Queteur';


@Component({
  selector: 'app-queteurs',
  templateUrl: './queteurs.component.html',
  styleUrls: ['./queteurs.component.scss']
})
export class QueteursComponent implements OnInit {

  private queteurs:Queteur[];

  constructor(private queteurService:QueteurService) { }

  ngOnInit() {
    this.getQueteurs();
  }

  getQueteurs():void{
    this.queteurService.getQueteurs()
    .subscribe((queteurs:Queteur[])=> this.queteurs = queteurs);

  }

}
