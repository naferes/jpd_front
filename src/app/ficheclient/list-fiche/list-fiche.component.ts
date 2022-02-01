import { FicheclientService } from './../../utils/services/ficheclient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import {NgxPaginationModule} from 'ngx-pagination';  

@Component({
  selector: 'app-list-fiche',
  templateUrl: './list-fiche.component.html',
  styleUrls: ['./list-fiche.component.scss']
})
export class ListFicheComponent implements OnInit {
  fiches:any =[];
  p: number = 1;
  constructor( private ficheService:FicheclientService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
this.loadAllFiches();
  }
loadAllFiches(){
  this.ficheService.getAllFiches().subscribe(res=>{
    console.log("chichi");
    console.log(res);
    this.fiches=res;
  })
}
deleteMethod(id){
  if(confirm("vous étes sûr de supprimer cette fiche ? ")) {
      this.ficheService.deleteFicheclinet(id).subscribe((res) => {
        this.loadAllFiches();
        this.toastr.success('Supprimée avec succés');
      }, (e) => {
        this.toastr.error(e.error.message);
      })
   }
}
}
