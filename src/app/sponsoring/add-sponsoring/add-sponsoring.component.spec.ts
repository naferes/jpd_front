import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSponsoringComponent } from './add-sponsoring.component';

describe('AddSponsoringComponent', () => {
  let component: AddSponsoringComponent;
  let fixture: ComponentFixture<AddSponsoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSponsoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
