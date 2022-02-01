import { Component, OnInit } from '@angular/core';
import { Dispatching } from 'src/app/models/Dispatching';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { UsersService } from 'src/app/utils/services/users.service';
import { DispatchingService } from 'src/app/utils/services/dispatching.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dispatching-edit',
  templateUrl: './dispatching-edit.component.html',
  styleUrls: ['./dispatching-edit.component.scss']
})
export class DispatchingEditComponent implements OnInit {
  id: number;
  entreprises: any = [];
  commercials:any=[];
  dispatchingX: any = []
  dispatching:Dispatching = new Dispatching();
  constructor(private datePipe: DatePipe,private route: ActivatedRoute,private dispatchingservice:DispatchingService,private entrepriseservice:EntreprisesService, private userservice:UsersService, private  toastr: ToastrService, private router: Router) { }
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
    this.getdispatching();
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
   getdispatching(){
    this.id = +this.route.snapshot.paramMap.get('id')
     this.dispatchingX = this.dispatchingservice.getDispatching(this.id);
     this.dispatchingservice.getDispatching(this.id).subscribe(res => {
      console.log(res);
      this.dispatchingX  = res;
      
    })
    console.log(this.id)
    console.log(this.dispatchingX)
  }
  editEntreprise() {
    
    if(this.dispatchingform.invalid){
      return this.toastr.error('Veuillez saisir les champs manquants');
    }
    
    this.dispatching.date = this.date.value;
    this.dispatching.username=this.username.value;
    this.dispatching.entreprise=this.entreprise.value;
    this.dispatching.deadline=this.deadline.value;
    this.dispatching.tache=this.tache.value;
    this.dispatching.commentaire=this.commentaire.value;
    this.dispatchingservice.editdispatching(this.id,this.dispatching).subscribe(res => {
      console.log(this.entreprise)
      this.toastr.success('dispatching modifé avec succès');
      this.router.navigate(['/dashboard/baseDeDonnees/']);        
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);
    })
}
}