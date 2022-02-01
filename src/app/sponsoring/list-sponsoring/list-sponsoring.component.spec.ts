import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSponsoringComponent } from './list-sponsoring.component';

describe('ListSponsoringComponent', () => {
  let component: ListSponsoringComponent;
  let fixture: ComponentFixture<ListSponsoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSponsoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
