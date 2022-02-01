import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseGlobalComponent } from './analyse-global.component';

describe('AnalyseGlobalComponent', () => {
  let component: AnalyseGlobalComponent;
  let fixture: ComponentFixture<AnalyseGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
