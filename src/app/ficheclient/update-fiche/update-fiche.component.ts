import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { Component, OnInit } from '@angular/core';
import { FicheClient } from 'src/app/models/FicheClient';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FicheclientService } from 'src/app/utils/services/ficheclient.service';

@Component({
  selector: 'app-update-fiche',
  templateUrl: './update-fiche.component.html',
  styleUrls: ['./update-fiche.component.scss']
})
export class UpdateFicheComponent implements OnInit {
fiche:FicheClient=new FicheClient();
id: number;
entreprises:any=[];
ficheX: any = []
  constructor(private entrepriseservice:EntreprisesService,private ficheservice:FicheclientService,private route: ActivatedRoute, private  toastr: ToastrService, private router: Router ) { }
  /*entreprise = new FormControl(this.fiche.entreprise, [
    Validators.required
  ]);*/
  date1 = new FormControl(this.fiche.date1, [
    Validators.required
  ]);
  compterendu1 = new FormControl(this.fiche.compterendu1, [
    
  ]);
  date2 = new FormControl(this.fiche.date2, [
    
  ]);
  compterendu2 = new FormControl(this.fiche.compterendu2, [
    
  ]);
  date3 = new FormControl(this.fiche.date3, [
    
  ]);
  compterendu3 = new FormControl(this.fiche.compterendu3, [
    
  ]);
  date4 = new FormControl(this.fiche.date4, [
    
  ]);
  compterendu4 = new FormControl(this.fiche.compterendu4, [
    
  ]);
  date5 = new FormControl(this.fiche.date5, [
    Validators.required
  ]);
  compterendu5 = new FormControl(this.fiche.compterendu5, [
    Validators.required
  ]);
  ficheform:FormGroup;
  ngOnInit(): void {
    this.getfiche();
    this.ficheform=new FormGroup({
     // 'entreprise':this.entreprise,
      'date1':this.date1,
      'compterendu1':this.compterendu1,
      'date2':this.date2,
      'compterendu2':this.compterendu2,
      'date3':this.date3,
      'compterendu3':this.compterendu3,
      'date4':this.date4,
      'compterendu4':this.compterendu4,
      'date5':this.date5,
      'compterendu5':this.compterendu5,
    });
  }
  loadentreprises(){
    this.entrepriseservice.getAllEntreprises().subscribe(res => {
      console.log(res);
          this.entreprises= res;
    })
   }
   getfiche(){
    this.id = +this.route.snapshot.paramMap.get('id')
 
     this.ficheservice.getfiche(this.id).subscribe(res => {
      console.log(res);
      this.ficheX = res;
      
    })
    console.log(this.id)
    console.log(this.ficheX)
  }
  updatefiche() {
    this.fiche.entreprise=this.ficheX.entreprise;
    this.fiche.date1=this.date1.value;
    this.fiche.compterendu1=this.compterendu1.value;
    this.fiche.date2=this.date2.value;
    this.fiche.compterendu2=this.compterendu2.value;
    this.fiche.date3=this.date3.value;
    this.fiche.compterendu3=this.compterendu3.value;
    this.fiche.date4=this.date4.value;
    this.fiche.compterendu4=this.compterendu4.value;
    this.fiche.date5=this.date5.value;
    this.fiche.compterendu5=this.compterendu5.value
    this.ficheservice.editfiche(this.id,this.fiche).subscribe(res => {
      this.toastr.success('fiche modifié avec succès');
      this.router.navigate(['/dashboard/ficheclient/']);        
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);
    })
}
}
