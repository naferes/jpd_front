import { Sponsoring } from './../../models/Sponsoring';
import { Component, OnInit } from '@angular/core';
import { SponsoringService } from 'src/app/utils/services/sponsoring.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sponsoring',
  templateUrl: './list-sponsoring.component.html',
  styleUrls: ['./list-sponsoring.component.scss']
})
export class ListSponsoringComponent implements OnInit {
Sponsorings:any=[];
  constructor(private sponsoringService:SponsoringService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.loadAllSponsoring();
  }
  loadAllSponsoring(){
    this.sponsoringService.getAllSponsoring().subscribe(res=>{
      console.log("chichi");
      console.log(res);
      this.Sponsorings=res;
    })
  }
  deleteMethod(id){
    if(confirm("vous étes sûr de supprimer cette fiche ? ")) {
        this.sponsoringService.deleteact(id).subscribe((res) => {
        
          this.toastr.success('Supprimée avec succés');
          this.loadAllSponsoring();
        }, (e) => {
          this.toastr.error(e.error.message);
        })
     }
  }

}
