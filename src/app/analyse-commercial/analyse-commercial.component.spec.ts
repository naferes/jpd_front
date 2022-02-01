import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseCommercialComponent } from './analyse-commercial.component';

describe('AnalyseCommercialComponent', () => {
  let component: AnalyseCommercialComponent;
  let fixture: ComponentFixture<AnalyseCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
