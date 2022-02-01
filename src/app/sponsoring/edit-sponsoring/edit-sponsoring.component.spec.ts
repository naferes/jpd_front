import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSponsoringComponent } from './edit-sponsoring.component';

describe('EditSponsoringComponent', () => {
  let component: EditSponsoringComponent;
  let fixture: ComponentFixture<EditSponsoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSponsoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
