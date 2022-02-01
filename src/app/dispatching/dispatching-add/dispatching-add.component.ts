import { UsersService } from './../../utils/services/users.service';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { DispatchingService } from 'src/app/utils/services/dispatching.service';
import { Dispatching } from './../../models/Dispatching';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dispatching-add',
  templateUrl: './dispatching-add.component.html',
  styleUrls: ['./dispatching-add.component.scss']
})
export class DispatchingAddComponent implements OnInit {
  entreprises: any = [];
  commercials:any=[];
  dispatching:Dispatching = new Dispatching();
constructor (private dispatchingservice:DispatchingService,private entrepriseservice:EntreprisesService, private userservice:UsersService, private  toastr: ToastrService, private router: Router) { }
date = new FormControl(this.dispatching.date, [
  Validators.required
]);
 entreprise= new FormControl(this.dispatching.entreprise, [
  Validators.required
]);
username= new FormControl(this.dispatching.username, [
  Validators.required
]);
deadline= new FormControl(this.dispatching.deadline, [
  Validators.required
]);
tache= new FormControl(this.dispatching.tache, [
  Validators.required
]);
commentaire= new FormControl(this.dispatching.commentaire, [
  Validators.required
]);
dispatchingform : FormGroup;

  ngOnInit(): void {
    this.refreshUsers();
    this.loadentreprises();
    this.dispatchingform=new FormGroup({
      'date':this.date,
      'username':this.username,
      'entreprise':this.entreprise,
      'deadline':this.deadline,
      'tache':this.tache,
      'commentaire':this.commentaire,
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
  addNewDispatching() {
    console.log("codex");
  
    this.dispatching.date = this.date.value;
    this.dispatching.username=this.username.value;
    this.dispatching.entreprise=this.entreprise.value;
    this.dispatching.deadline=this.deadline.value;
    this.dispatching.tache=this.tache.value;
    this.dispatching.commentaire=this.commentaire.value;
    console.log("this");
    console.log(this.dispatching);
  
    this.dispatchingservice.adddispatching(this.dispatching).subscribe(res => {
      this.dispatching= res;
      

      this.toastr.success('dispatching ajoutée avec succès');
      this.router.navigate(['//dashboard/dispatching/']);
      
    
    
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);

    })
  }
 
}
