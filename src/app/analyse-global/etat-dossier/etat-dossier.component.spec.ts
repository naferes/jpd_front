import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatDossierComponent } from './etat-dossier.component';

describe('EtatDossierComponent', () => {
  let component: EtatDossierComponent;
  let fixture: ComponentFixture<EtatDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
