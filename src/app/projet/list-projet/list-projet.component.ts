import { ProjetService } from './../../utils/services/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/Projet';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {
projets:any=[];
  constructor(private projetService:ProjetService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.loadAllProjet();
  }

  loadAllProjet(){
    console.log("aaaaaaaaaa");
    this.projetService.getAllprojet().subscribe(res=>{
      console.log("chichi");
      console.log(res);
      this.projets=res;
    })
  }
  deleteMethod(id){
    if(confirm("vous étes sûr de supprimer cette fiche ? ")) {
        this.projetService.deleteact(id).subscribe((res) => {
        
          this.toastr.success('Supprimée avec succés');
          this.loadAllProjet();
        }, (e) => {
          this.toastr.error(e.error.message);
        })
     }
  }
}
