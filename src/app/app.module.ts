import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MenuSidebarComponent } from './main/menu-sidebar/menu-sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './pages/users/users.component';
import { AuthorizationService } from '../app/utils/services/authorization.service';
import { ErrorComponent } from './error/error.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ChartsModule } from 'ng2-charts';
import { UsersUpdateComponent } from './pages/users/users-update/users-update.component';
import { UsersAddComponent } from './pages/users/users-add/users-add.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { environment } from '../environments/environment';
import { BaseDeDonnesComponent } from './base-de-donnes/base-de-donnes.component';
import { EntreprisesAddComponent } from './base-de-donnes/entreprises-add/entreprises-add.component';
import { EntreprisesListComponent } from './base-de-donnes/entreprises-list/entreprises-list.component';
import { EntreprisesUpdateComponent } from './base-de-donnes/entreprises-update/entreprises-update.component';
import { DispatchingComponent } from './dispatching/dispatching.component';
import { DispatchingListComponent } from './dispatching/dispatching-list/dispatching-list.component';
import { DispatchingAddComponent } from './dispatching/dispatching-add/dispatching-add.component';
import { FicheclientComponent } from './ficheclient/ficheclient.component';
import { ListFicheComponent } from './ficheclient/list-fiche/list-fiche.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DispatchingEditComponent } from './dispatching/dispatching-edit/dispatching-edit.component';

import { DatePipe } from '@angular/common';
import { AddFicheComponent } from './ficheclient/add-fiche/add-fiche.component';
import { UpdateFicheComponent } from './ficheclient/update-fiche/update-fiche.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';
import { ListSponsoringComponent } from './sponsoring/list-sponsoring/list-sponsoring.component';
import { AddSponsoringComponent } from './sponsoring/add-sponsoring/add-sponsoring.component';
import { EditSponsoringComponent } from './sponsoring/edit-sponsoring/edit-sponsoring.component';
import { ProjetComponent } from './projet/projet.component';
import { ListProjetComponent } from './projet/list-projet/list-projet.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { AnalyseGlobalComponent } from './analyse-global/analyse-global.component';
import { OriginProspectComponent } from './analyse-global/origin-prospect/origin-prospect.component';
import { EtatDossierComponent } from './analyse-global/etat-dossier/etat-dossier.component';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';
import { AnalyseCommercialComponent } from './analyse-commercial/analyse-commercial.component';
import { OrigineComponent } from './analyse-commercial/origine/origine.component';
import { SourceComponent } from './analyse-commercial/source/source.component';
import { ChiffreComponent } from './analyse-commercial/chiffre/chiffre.component';

const apiUrl = environment.apiUrl;  

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    UsersComponent,
    ErrorComponent,
    UsersUpdateComponent,
    UsersAddComponent,
    UsersListComponent,
    BaseDeDonnesComponent,
    EntreprisesAddComponent,
    EntreprisesListComponent,
    EntreprisesUpdateComponent,
    DispatchingComponent,
    DispatchingListComponent,
    DispatchingAddComponent,
    FicheclientComponent,
    ListFicheComponent,
    DispatchingEditComponent,
    AddFicheComponent,
    UpdateFicheComponent,
    SponsoringComponent,
    ListSponsoringComponent,
    AddSponsoringComponent,
    EditSponsoringComponent,
    ProjetComponent,
    ListProjetComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    AnalyseGlobalComponent,
    OriginProspectComponent,
    EtatDossierComponent,
    ChiffreAffaireComponent,
    AnalyseCommercialComponent,
    OrigineComponent,
    SourceComponent,
    ChiffreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartsModule,
    FormsModule   ,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1100,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }) , 
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/auth/login']
      }
    })
  ],
  providers: [AuthorizationService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
