import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginProspectComponent } from './origin-prospect.component';

describe('OriginProspectComponent', () => {
  let component: OriginProspectComponent;
  let fixture: ComponentFixture<OriginProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
