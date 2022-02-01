import { FicheclientService } from './../../utils/services/ficheclient.service';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FicheClient } from 'src/app/models/FicheClient';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.scss']
})
export class AddFicheComponent implements OnInit {
  entreprises:any=[];
  fiche:FicheClient=new FicheClient();
  f
  constructor(private entrepriseservice:EntreprisesService, private ficheservice:FicheclientService, private  toastr: ToastrService, private router: Router) { }

entreprise= new FormControl(this.fiche.entreprise, [
 Validators.required
]);
  date1= new FormControl(this.fiche.date1, [
    Validators.required
  ]);
  compterendu1= new FormControl(this.fiche.compterendu1, [
    Validators.required
  ]);
  ficheform : FormGroup;
  ngOnInit(): void {
    this.loadentreprises();
    this.ficheform=new FormGroup({

      'entreprise':this.entreprise,
      'date1':this.date1,
      'compterendu1':this.compterendu1
    });
    
  
  }

  loadentreprises(){
    this.entrepriseservice.getAllEntreprises().subscribe(res => {
      console.log("aziz");
      console.log(res);
      console.log("aziz");
          this.entreprises= res;
    })
   }
   addNewfiche() {
    console.log("codex");
 this.fiche.entreprise=this.entreprise.value;
 this.fiche.date1=this.date1.value;
 this.fiche.compterendu1=this.compterendu1.value;
  console.log(this.fiche)
    this.ficheservice.addFiche(this.fiche).subscribe(res => {
      this.fiche= res;
      console.log(res);

      this.toastr.success('fiche ajoutée avec succès');
      this.router.navigate(['//dashboard/ficheclient/'])
      
    
    
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);

    })
  }

}
