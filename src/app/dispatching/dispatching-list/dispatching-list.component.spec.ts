import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchingListComponent } from './dispatching-list.component';

describe('DispatchingListComponent', () => {
  let component: DispatchingListComponent;
  let fixture: ComponentFixture<DispatchingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
