import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color  } from 'ng2-charts';
import { SourceService } from 'src/app/utils/services/source.service';
import { forkJoin, Observable } from 'rxjs';
@Component({
  selector: 'app-etat-dossier',
  templateUrl: './etat-dossier.component.html',
  styleUrls: ['./etat-dossier.component.scss']
})
export class EtatDossierComponent implements OnInit {
  results:any[]=[];
  somme:any;
  status:any=[];
  data:any=[];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  a=2;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public barChartColors: Color[] = [
    { backgroundColor: '#FFE50C' }
  ]
  constructor(private sourceservice:SourceService) { }

  ngOnInit(): void {
    this.refreshStatut();
    
    forkJoin([this.refreshsourceprojet(),this.refreshsourceprosp()]).subscribe(res=>{this.results=this.convertObj(res[0] , res[1]),this.somme=this.Sommenbre(this.results),this.barChartData[0].data =this.chartval(this.results)})
    
  }
  refreshsourceprojet(){
    return this.sourceservice.getSourceProjet();
   
     
   }
   refreshsourceprosp(){
     return this.sourceservice.getSourcePros();
 }
  convertObj = (obj1:any, obj2:any) => { 
    const long: number = obj1.length;
    let results: any[] = []; 
    
    for (let i = 0; i < long; i++)
    { 
     let array: Array<any> = [] ; 
  
     for (let j = 0; j < obj1[i].length; j++)
      {
      array.push({ obj1: obj1[i][j], obj2: obj2[i][j] }); 
      }
    results.push(array);  
    }
    return results; 
  
  }
  chartval = (obj:any) => { 
    const long: number = obj.length;
    let val: any = []; 
    
    for (let i = 0; i < long; i++)
    { 
     let array: Array<any> = [] ; 
  
     for (let j = 0; j < obj[i].length; j++)
      {
       val[i]=obj[i][j].obj1.nbre+obj[i][j].obj2.nbre;
      }
     
    } console.log("aziziziz")
     console.log(val)
    return val; 
  
  }
  Sommenbre = (obj:any) => { 
    const long: number = obj.length;
    let somme: any=0;
    
    for (let i = 0; i < long; i++)
    { 
  
     for (let j = 0; j < obj[i].length; j++)
      {
 somme+=obj[i][j].obj1.nbre+obj[i][j].obj2.nbre
      }
    
    } 
    return somme; 

  }
  refreshStatut(){
    this.sourceservice.getstaut().subscribe(res => {
      
      this.status= res;
    })
  }
}
