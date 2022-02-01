import { SponsoringComponent } from './../sponsoring.component';
import { SponsoringService } from 'src/app/utils/services/sponsoring.service';
import { Sponsoring } from 'src/app/models/Sponsoring';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { UsersService } from 'src/app/utils/services/users.service';
import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sponsoring',
  templateUrl: './add-sponsoring.component.html',
  styleUrls: ['./add-sponsoring.component.scss']
})
export class AddSponsoringComponent implements OnInit {
commercials:any=[];
entreprises:any=[];
sponsoring:Sponsoring=new Sponsoring();
  constructor(private userservice:UsersService, private entrepriseservice:EntreprisesService,private  toastr: ToastrService, private router: Router,private sponsoringservice:SponsoringService) { }

    source=new FormControl(this.sponsoring.source, [
      Validators.required
    ]);
    dateContacte=new FormControl(this.sponsoring.dateContacte, [
      Validators.required
    ]);
    username=new FormControl(this.sponsoring.username ,[Validators.required]);
    nomEntreprise=new FormControl(this.sponsoring.nomEntreprise,[Validators.required]);
    Service=new FormControl (this.sponsoring.Service,[Validators.required]);
    statut=new FormControl (this.sponsoring.statut,[Validators.required]);
    typeConv=new FormControl (this.sponsoring.typeConv,[Validators.required]);
    contrepartie=new FormControl (this.sponsoring.contrepartie,[Validators.required]);
    montantSign=new FormControl (this.sponsoring.montantSign,[Validators.required]);
    moiSign=new FormControl (this.sponsoring.moiSign,[Validators.required]);
    raison=new FormControl (this.sponsoring.raison,[Validators.required]);
    commentaire=new FormControl (this.sponsoring.commentaire,[Validators.required]);
    actform:FormGroup;
  ngOnInit(): void {
    this.loadentreprises();
    this.refreshUsers();
    this.actform=new FormGroup({
    source:this.source,
    dateContacte:this.dateContacte,
    username:this.username,
    nomEntreprise:this.nomEntreprise,
    Service:this.Service,
    statu:this.statut,
    typeConv:this.typeConv,
    contrepartie:this.contrepartie,
    montantSign:this.montantSign,
    moiSign:this.moiSign,
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
     this.sponsoring.source=this.source.value;
     this.sponsoring.dateContacte=this.dateContacte.value;
     this.sponsoring.username=this.username.value;
     this.sponsoring.nomEntreprise=this.nomEntreprise.value;
     this.sponsoring.Service=this.Service.value;
     this.sponsoring.statut=this.statut.value ;
     this.sponsoring.typeConv=this.typeConv.value;
     this.sponsoring.contrepartie=this.contrepartie.value;
     this.sponsoring.montantSign=this.montantSign.value;
     this.sponsoring.moiSign=this.moiSign.value;
     this.sponsoring.raison=this.raison.value;
     this.sponsoring.commentaire=this.commentaire.value;
     console.log(this.sponsoring)
     this.sponsoringservice.addact(this.sponsoring).subscribe(res => {
    this.sponsoring=res;

      this.toastr.success('activité ajoutée avec succès');
      this.router.navigate(['//dashboard/Sponsoring/']);
      
    
    
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);

    })
    }
}
