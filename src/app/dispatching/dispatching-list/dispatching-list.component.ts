import { DispatchingService } from 'src/app/utils/services/dispatching.service';
import { Dispatching } from './../../models/Dispatching';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dispatching-list',
  templateUrl: './dispatching-list.component.html',
  styleUrls: ['./dispatching-list.component.scss']
})
export class DispatchingListComponent implements OnInit {
dispatchings:any=[];
  constructor(private dispatchingservice:DispatchingService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.refreshdispatching();
  }
  refreshdispatching(){
    this.dispatchingservice.getAllDispatching().subscribe(res=>{
      console.log(res);
    this.dispatchings = res;
    })
    
  }
  deleteMethod(id){
    if(confirm("vous étes sûr de supprimer cette taches? ")) {
        this.dispatchingservice.deletedispatching(id).subscribe((res) => {
          this.refreshdispatching();
          this.toastr.success('Supprimée avec succés');
        }, (e) => {
          this.toastr.error(e.error.message);
        })
     }
  }
  
  goToeditPage(id){
    this.router.navigate(['/update-dispatching', id]);












  }

  
}
