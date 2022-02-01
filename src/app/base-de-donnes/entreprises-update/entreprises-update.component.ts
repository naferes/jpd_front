import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormsModule  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/models/Entreprise';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entreprises-update',
  templateUrl: './entreprises-update.component.html',
  styleUrls: ['./entreprises-update.component.scss']
})
export class EntreprisesUpdateComponent implements OnInit {

  id: number;
  private sub: any;
  entrepriseX: any = []
  entreprise: Entreprise = new Entreprise();
  constructor(private route: ActivatedRoute,private entrepriseService:EntreprisesService, private toastr: ToastrService, private router: Router) { }
    nom = new FormControl(this.entreprise.nom, [
      Validators.required
    ]);
  
    adresse = new FormControl(this.entreprise.adresse, [
      Validators.required
    ]);
  
    Tel = new FormControl(this.entreprise.Tel, [
      Validators.required
    ]);
  
    type = new FormControl(this.entreprise.type, [
      Validators.required
    ]);
  
    mail = new FormControl(this.entreprise.mail, [
      Validators.required
    ]);
  
    visavis = new FormControl(this.entreprise.visavis, [
      Validators.required
    ]);
  
    postevisavis = new FormControl(this.entreprise.postevisavis, [
      Validators.required
    ]);
  
    mailvisavis = new FormControl(this.entreprise.mailvisavis, [
      Validators.required
    ]);
  
    telvisavis = new FormControl(this.entreprise.telvisavis, [
      Validators.required
    ]);
    entrepriseForm: FormGroup;
  

  ngOnInit(): void {
    this.getEntreprise()
    console.log(this.entrepriseX)
    this.getEntreprise()
    this.entrepriseForm  =  new FormGroup({
      'nom':this.nom,
      'adresse':this.adresse,
      'Tel':this.Tel,
      'type':this.type,
      'mail':this.mail,
      'visavis':this.visavis,
      'mailvisavis':this.mailvisavis,
      'telvisavis':this.telvisavis,
      'postevisavis':this.postevisavis,
    });
  }
  
  getEntreprise(){
    this.id = +this.route.snapshot.paramMap.get('id')
     this.entrepriseX = this.entrepriseService.getEntreprise(this.id);
     this.entrepriseService.getEntreprise(this.id).subscribe(res => {
      console.log(res);
      this.entrepriseX  = res;
    })
    console.log(this.id)
    console.log(this.entrepriseX)
  }

  editEntreprise() {
    
    if(this.entrepriseForm.invalid){
      return this.toastr.error('Veuillez saisir les champs manquants');
    }
    this.entreprise.nom = this.nom.value;
    console.log(this.entreprise.nom)
    this.entreprise.adresse = this.adresse.value;
    console.log(this.adresse.value)

    this.entreprise.Tel =  this.Tel.value;
    this.entreprise.type = this.type.value;
    this.entreprise.mail = this.mail.value;
    this.entreprise.visavis =  this.visavis.value;
    this.entreprise.postevisavis =  this.postevisavis.value;
    this.entreprise.telvisavis = this.telvisavis.value;
    this.entreprise.mailvisavis = this.mailvisavis.value;
    this.entrepriseService.editEntreprise(this.id,this.entreprise).subscribe(res => {
      console.log(this.entreprise)
      this.toastr.success('Entreprise modifé avec succès');
      this.router.navigate(['/dashboard/baseDeDonnees/']);        
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);
    })
  }

}
