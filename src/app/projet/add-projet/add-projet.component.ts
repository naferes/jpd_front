import { ProjetService } from './../../utils/services/projet.service';
import { Projet } from './../../models/Projet';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/utils/services/users.service';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {

  commercials:any=[];
  entreprises:any=[];
projet:Projet=new Projet();
    constructor(private userservice:UsersService, private entrepriseservice:EntreprisesService,private  toastr: ToastrService, private router: Router,private projetservice:ProjetService) { }
  
      source=new FormControl(this.projet.source, [
        Validators.required
      ]);
      dateContacte=new FormControl(this.projet.dateContacte, [
        Validators.required
      ]);
      username=new FormControl(this.projet.username ,[Validators.required]);
      nomEntreprise=new FormControl(this.projet.nomEntreprise,[Validators.required]);
      statut=new FormControl (this.projet.statut,[Validators.required]);
      chanceProjEnCours=new FormControl (this.projet.chanceProjEnCours,[Validators.required]);
      montantProjSigne=new FormControl (this.projet.montantProjSigne,[Validators.required]);
      moisProjSigne=new FormControl (this.projet.moisProjSigne,[Validators.required]);
      raison=new FormControl (this.projet.raison,[Validators.required]);
      commentaire=new FormControl (this.projet.commentaire,[Validators.required]);
      actform:FormGroup;
  ngOnInit(): void {
    this.loadentreprises();
    this.refreshUsers();
    this.actform=new FormGroup({
    source:this.source,
    dateContacte:this.dateContacte,
    username:this.username,
    nomEntreprise:this.nomEntreprise,
    statu:this.statut,
    chanceProjEnCours:this.chanceProjEnCours,
    montantProjSigne:this.montantProjSigne,
    moisProjSigne:this.moisProjSigne,
    raison:this.raison,
    commentaire:this.commentaire,

    });
  }
  refreshUsers(){
    this.userservice.getAllUsers().subscribe(res => {
      console.log(res);
      this.commercials = res;
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
   addnewact(){
     this.projet.source=this.source.value;
     this.projet.dateContacte=this.dateContacte.value;
     this.projet.username=this.username.value;
     this.projet.nomEntreprise=this.nomEntreprise.value;
     this.projet.statut=this.statut.value ;
     this.projet.chanceProjEnCours=this.chanceProjEnCours.value;
     this.projet.montantProjSigne=this.montantProjSigne.value;
     this.projet.moisProjSigne=this.moisProjSigne.value;
     this.projet.raison=this.raison.value;
     this.projet.commentaire=this.commentaire.value;
     console.log(this.projet)
     this.projetservice.addactprojet(this.projet).subscribe(res => {
    this.projet=res;

      this.toastr.success('activité ajoutée avec succès');
      this.router.navigate(['//dashboard/Projet/']);
      
    
    
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);

    })
    }

}
