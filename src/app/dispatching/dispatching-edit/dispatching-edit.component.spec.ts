import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchingEditComponent } from './dispatching-edit.component';

describe('DispatchingEditComponent', () => {
  let component: DispatchingEditComponent;
  let fixture: ComponentFixture<DispatchingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
