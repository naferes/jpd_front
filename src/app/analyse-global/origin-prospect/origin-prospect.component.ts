import { Component, OnInit } from '@angular/core';
import { AnalyseGlobaleService } from 'src/app/utils/services/analyse-globale.service';
import { forkJoin, Observable } from 'rxjs';
@Component({
  selector: 'app-origin-prospect',
  templateUrl: './origin-prospect.component.html',
  styleUrls: ['./origin-prospect.component.scss']
})
export class OriginProspectComponent implements OnInit {
origin_projets:any=[];
origin_prosps:any=[];
results:any[]=[];
res:any=[];
somme:any;
  constructor(private analyseservice:AnalyseGlobaleService ) { }

  ngOnInit(): void {
 forkJoin([this.refreshoriginprosp(),this.refreshoriginprojet()]).subscribe(res=>{this.results=this.convertObj(res[0] , res[1]),this.res=this.valparorig(this.results),this.somme=this.Sommenlong(this.results)})

}

  refreshoriginprojet(){
   return this.analyseservice.getOriginProjet()
  
    
  }
  refreshoriginprosp(){
    return this.analyseservice.getOriginPros() 
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
valparorig = (obj:any) => { 
  const long: number = obj.length;
  let jan:any=0;
  let fev:any=0;
  let mars:any=0;
  let avr:any=0;
  let may:any=0;
  let juin:any=0;
  let juill:any=0;
  let aout:any=0;
  let sep:any=0;
  let oct:any=0;
  let nov:any=0;
  let dec:any=0;
  let lon:any=0;
  let array: Array<any> = [] ; 
  let tot: any[]= []; 
  for (let i = 0; i < long; i++)
  { 
   for (let j = 0; j < obj[i].length; j++)
    {jan+=obj[i][j].obj1.jan+obj[i][j].obj2.jan;
      fev+=obj[i][j].obj1.fev+obj[i][j].obj2.fev;
      mars+=obj[i][j].obj1.mars+obj[i][j].obj2.mars;
      avr+=obj[i][j].obj1.avr+obj[i][j].obj2.avr;
      may+=obj[i][j].obj1.may+obj[i][j].obj2.may;
      juin+=obj[i][j].obj1.juin+obj[i][j].obj2.juin;
      juill+=obj[i][j].obj1.juill+obj[i][j].obj2.juill;
     aout+=obj[i][j].obj1.aout+obj[i][j].obj2.aout;
      sep+=obj[i][j].obj1.sep+obj[i][j].obj2.sep;
      oct+=obj[i][j].obj1.oct+obj[i][j].obj2.oct;
      nov+=obj[i][j].obj1.nov+obj[i][j].obj2.nov;
      dec+=obj[i][j].obj1.dec+obj[i][j].obj2.dec;
      lon+=obj[i][j].obj1.long+obj[i][j].obj2.long;
    }
    
  } 
     tot.push(jan);
    tot.push(fev);
    tot.push(mars);
    tot.push(avr);
    tot.push(may);
    tot.push(juin);
   tot.push(juill);
    tot.push(aout);
    tot.push(sep);
    tot.push(oct);
    tot.push(nov);
    tot.push(dec);
   tot.push(lon);
   
  
  console.log("aziziziz")
   console.log(tot)
  return tot;

}
Sommenlong = (obj:any) => { 
  const long: number = obj.length;
  let somme: any=0;
  
  for (let i = 0; i < long; i++)
  { 

   for (let j = 0; j < obj[i].length; j++)
    {
somme+=obj[i][j].obj1.long+obj[i][j].obj2.long
    }
  
  } 
  return somme; 

}
}
