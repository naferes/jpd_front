import { AnalyseGlobaleService } from 'src/app/utils/services/analyse-globale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiffre-affaire',
  templateUrl: './chiffre-affaire.component.html',
  styleUrls: ['./chiffre-affaire.component.scss']
})
export class ChiffreAffaireComponent implements OnInit {
x:any=[];
  constructor( private analyseService:AnalyseGlobaleService) { }

  ngOnInit(): void {
    this.refreshCa();
    
  }
  refreshCa(){
    this.analyseService.getCA().subscribe(res => {
      console.log(res);
      this.x = res;
    })
  }

}
