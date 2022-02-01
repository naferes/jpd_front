import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { ErrorComponent } from './error/error.component';
import { UsersUpdateComponent } from './pages/users/users-update/users-update.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersAddComponent } from './pages/users/users-add/users-add.component';
import { EntreprisesListComponent } from './base-de-donnes/entreprises-list/entreprises-list.component';
import { EntreprisesAddComponent } from './base-de-donnes/entreprises-add/entreprises-add.component';
import { EntreprisesUpdateComponent } from './base-de-donnes/entreprises-update/entreprises-update.component';
import { BaseDeDonnesComponent } from './base-de-donnes/base-de-donnes.component';
import { DispatchingComponent } from './dispatching/dispatching.component';
import { DispatchingListComponent } from './dispatching/dispatching-list/dispatching-list.component';
import { DispatchingAddComponent } from './dispatching/dispatching-add/dispatching-add.component';
import { FicheclientComponent } from './ficheclient/ficheclient.component';
import { ListFicheComponent } from './ficheclient/list-fiche/list-fiche.component';
import { DispatchingEditComponent } from './dispatching/dispatching-edit/dispatching-edit.component';
import { AddFicheComponent } from './ficheclient/add-fiche/add-fiche.component';
import { UpdateFicheComponent } from './ficheclient/update-fiche/update-fiche.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';
import { ListSponsoringComponent } from './sponsoring/list-sponsoring/list-sponsoring.component';
import { EditSponsoringComponent } from './sponsoring/edit-sponsoring/edit-sponsoring.component';
import { AddSponsoringComponent } from './sponsoring/add-sponsoring/add-sponsoring.component';
import { ProjetComponent } from './projet/projet.component';
import { ListProjetComponent } from './projet/list-projet/list-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { AnalyseGlobalComponent } from './analyse-global/analyse-global.component';
import { EtatDossierComponent } from './analyse-global/etat-dossier/etat-dossier.component';
import { OriginProspectComponent } from './analyse-global/origin-prospect/origin-prospect.component';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';
import { AnalyseCommercialComponent } from './analyse-commercial/analyse-commercial.component';
import { ChiffreComponent } from './analyse-commercial/chiffre/chiffre.component';
import { OrigineComponent } from './analyse-commercial/origine/origine.component';
import { SourceComponent } from './analyse-commercial/source/source.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: {
          allowedRoles: ['ROLE_RESPONSABLE']
        },
        children: [
          {
            path: '' ,
            component: UsersListComponent
          },
          {
            path: 'addUser', 
            component: UsersAddComponent
          },
          {
            path: 'update/:id',
            component: UsersUpdateComponent,
          }
        ]
      },
      {
        path: 'baseDeDonnees',
        component: BaseDeDonnesComponent,
       
        children: [
          {
            path: '' ,
            component:EntreprisesListComponent
          },
          {
            path: 'addEntreprise', 
            component: EntreprisesAddComponent
          },
          {
            path: 'update-entreprise/:id',
            component: EntreprisesUpdateComponent,
          }
        ]
      },
      {
        path: 'dispatching',
        component: DispatchingComponent,
        data: {
          allowedRole: ['ROLE_RESPONSABLE']
        },
        children: [
          {
            path: '' , 
            component:DispatchingListComponent
          },
          {
            path: 'adddispatching',
            component: DispatchingAddComponent,
          },
          {
            path: 'update-dispatching/:id',
            component:DispatchingEditComponent,
          },
          
        
        ]
      },
      {
        path: 'ficheclient',
        component: FicheclientComponent,
        data: {
          allowedRole: ['ROLE_RESPONSABLE']
        },
        children: [
          {
            path: '' , 
            component:ListFicheComponent
          },
          {
            path: 'addfiche', 
            component: AddFicheComponent,
          },
          {
            path: 'update-fiche/:id',
            component: UpdateFicheComponent,
          }
         
        
        ]
      },
      {
        path: 'Sponsoring',
        component:  SponsoringComponent,
        data: {
          allowedRole: ['ROLE_RESPONSABLE']
        },
        children: [
          {
            path: '' , 
            component:ListSponsoringComponent,
          },
          {
            path: 'addsponsoring', 
            component:AddSponsoringComponent,
          },
          {
            path: 'update-sponsoring/:id',
            component: EditSponsoringComponent,
          }
         
        
        ]
      },
      {
        path: 'Projet',
        component:ProjetComponent,
        data: {
          allowedRole: ['ROLE_RESPONSABLE']
        },
        children: [
          {
            path: '' , 
            component:ListProjetComponent,
            
          },
          {
            path: 'addprojet', 
            component:AddProjetComponent,
          },
          {
            path: 'update-projet/:id',
            component: UpdateProjetComponent,
          }
         
        
        ]
      },
      {
        path: 'Analyseglobal',
        component:AnalyseGlobalComponent,
        data: {
          allowedRole: ['ROLE_RESPONSABLE']
        },
        children: [
          {
            path: '' , 
            component:EtatDossierComponent,
          },
          {
            path: 'origin', 
            component:OriginProspectComponent,
          }
         
         
        
        ]
      },
      {
        path: 'Analysecommercial',
        component:AnalyseCommercialComponent,
        
        children: [
          {
            path: '' , 
            component:OrigineComponent,
          },
          {
            path: 'chiffre', 
            component:ChiffreComponent,
          },
          {
            path: 'source', 
            component:SourceComponent,
          }
         
         
        
        ]
      },
      {
        path: 'CA',
        component:ChiffreAffaireComponent,
        
       
      },
    ]
  },
 

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
